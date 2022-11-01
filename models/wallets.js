const S = require("sequelize");
const db = require("../db");
const bc = require("bcrypt");

class Wallet extends S.Model {
  //LLAMADA EN EL HOOK
  createHash(string, salt) {
    //Esta función crea el hash que se almacena en el campo "password" del usuario en la base de datos.
    //Parámetros: password ingresado por usuario y "salt" que se genera de forma aleatoria.
    return bc.hash(string, salt);
  }
  validatePassword(password) {
    //función para validar el password ingresado en el login
    return bc.hash(password, this.salt).then((hash) => hash === this.password);
  }
}

Wallet.init(
  {
    type: {
      type: S.STRING,
      allowNull: false,
    },
    typeNum: {
      type: S.STRING,
      allowNull: false,
    },
    cvv: {
      type: S.STRING,
      allowNull: false,
    },
    thrDate: {
      type: S.DATE,
      allowNull: false,
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "wallet" }
);

Wallet.addHook("beforeCreate", (wallet) => {
  wallet.salt = bc.genSaltSync();
  return Wallet.createHash(wallet.typeNum, wallet.salt)
    .then((result) => {
      wallet.typeNum = result;
    })
    .then(() =>
      Wallet.createHash(wallet.cvv, wallet.salt).then((result) => {
        wallet.cvv = result;
      })
    )
    .catch((err) => console.log(err));
});

module.exports = Wallet;

//ownerId,
