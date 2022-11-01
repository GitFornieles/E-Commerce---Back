const S = require("sequelize");
const db = require("../db");

class PurchaseOrder extends S.Model {} //aka "carrito de compras"

PurchaseOrder.init(
  {
    status:{
        type:S.STRING,
        allowNull:false
    }
  },
  { sequelize: db, modelName: "purchaseorder" }
);

module.exports = PurchaseOrder;

//ownerId, payMethodId, cartId