const S = require("sequelize");
const db = require("../db");

class CartItem extends S.Model {} //aka "carrito de compras"

CartItem.init(
  {
    qty: {
      type: S.INTEGER,
      allowNull: false,
    },
    cartNum:{
      type:S.INTEGER,
      allowNull:false
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
  { sequelize: db, modelName: "cartitem" }
);

module.exports = CartItem;
