const Users = require("./users");
const CartItem = require("./cartItem");
const Product = require("./products");
const Payment = require("./payment");
const purchaseOrder = require("./purchaseOrder");
const Image = require("./images");
const Review = require("./review");
const Wallet = require("./wallets");

CartItem.belongsTo(Users, { as: "owner" });
Product.hasMany(CartItem, { as: "product" });

Payment.belongsTo(Users, { as: "owner" });
purchaseOrder.belongsTo(Payment, { as: "payment" });
Payment.belongsTo(Wallet, { as: "payMethod" });

Payment.belongsTo(purchaseOrder, { as: "purchase" });
purchaseOrder.belongsTo(Users, { as: "owner" });
purchaseOrder.belongsTo(CartItem, { as: "cartItem" });

Image.belongsTo(Product);

Review.belongsTo(Product);
Review.belongsTo(Users, { as: "owner" });

Wallet.belongsTo(Users, { as: "owner" });

module.exports = {
  Users,
  CartItem,
  Product,
  Payment,
  purchaseOrder,
  Image,
  Review,
  Wallet,
};
