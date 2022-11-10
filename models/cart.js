const S = require("sequelize");
const db = require("../db");

class Cart extends S.Model {} //aka "carrito de compras"

//Cart se completa con las relaciones
// - "un user tiene muchos productos" y "un producto tiene muchos user" (ver models/index.js)
// - "un carrito tiene muchos cartItem" y "cartItem pertenece a un carrito"
// - "un carrito tiene un payment" y "un payment pertenece a un carrito"

Cart.init(
  {
    purchasedStatus: {
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
    inProgress: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
    total: { type: S.BIGINT },
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
