const S = require("sequelize");
const db = require("../db");

class MktCart extends S.Model {}

MktCart.init(
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
  },
  { sequelize: db, modelName: "mktCart" }
);

module.exports = MktCart;
