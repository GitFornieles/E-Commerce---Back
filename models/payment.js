const S = require("sequelize");
const db = require("../db");

class Payment extends S.Model {} //aka "carrito de compras"

Payment.init(
  {
    status: {
      type: S.STRING,
      allowNull: false,
      defaultValue: true
    },
    total: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "payment" }
);

module.exports = Payment;

//Los campos "ownerId" "cartId" se crean con la relación en indexedDB.js