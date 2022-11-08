const S = require("sequelize");
const db = require("../db");

class CartItem extends S.Model {}

CartItem.init(
  {
    qty: {
      type: S.INTEGER,
      allowNull: false,
    },
    purchasedPrice: {
      type: S.INTEGER,
    },
    //Este campo es para distinguir "carritos" finalizados (ya comprados) del carrito "vigente" que el usuario está armando.
  },
  { sequelize: db, modelName: "cartitem" }
);

module.exports = CartItem;
