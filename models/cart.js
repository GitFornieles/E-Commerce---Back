const S = require("sequelize");
const db = require("../db");

class Cart extends S.Model {} //aka "carrito de compras"

Cart.init(
  {
    qty: {
      type: S.INTEGER,
      allowNull: false,
    },
    purchaseStatus: {
      type: S.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    shippingStatus: {
      type: S.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    //Este campo es para distinguir "carritos" finalizados (ya comprados) del carrito "vigente" que el usuario está armando.
    inProgress:{
      type: S.BOOLEAN,
      defaultValue:true
    }
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
