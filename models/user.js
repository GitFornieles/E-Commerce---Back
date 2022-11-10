const S = require("sequelize");
const db = require("../db");
const bc = require("bcrypt");

class User extends S.Model {
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
  setAdmin() {
    this.admin = true;
  }
  unSetAdmin() {
    this.admin = false;
  }
}

User.init(
  {
    dni: {
      type: S.BIGINT,
      allowNull: false,
    },
    nickname: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastname: {
      type: S.STRING,
      allowNull: false,
    },
    age: {
      type: S.INTEGER,
      allowNull: false,
    },
    address: {
      type: S.STRING,
      allowNull: false,
    },
    city: {
      type: S.STRING,
      allowNull: false,
    },
    postalCode: {
      type: S.INTEGER,
      allowNull: false,
    },
    cellphone: {
      type: S.BIGINT,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: { len: [8, 20] },
    },
    salt: {
      type: S.STRING,
    },
    admin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", (User) => {
  User.salt = bc.genSaltSync();
  return User.createHash(User.password, User.salt)
    .then((result) => {
      User.password = result;
    })
    .catch((err) => console.log(err));
});

module.exports = User;
