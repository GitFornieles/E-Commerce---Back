const Users = require("./users");
const Cart = require("./cart");
const Product = require("./products");
const Payment = require("./payment");
const purchaseOrder = require("./purchaseOrder");
const Image = require("./images");
const Review = require("./review");
const Wallet = require("./wallets");

Cart.belongsTo(Users, { as: "owner" });

Payment.belongsTo(Users, { as: "owner" });
purchaseOrder.belongsTo(Payment, { as: "payment" });
Payment.belongsTo(Wallet, { as: "payMethod" });

Payment.belongsTo(purchaseOrder, { as: "purchase" });
purchaseOrder.belongsTo(Users, { as: "owner" });
purchaseOrder.belongsTo(Cart, { as: "cart" });

Image.belongsTo(Product);

Review.belongsTo(Product);
Review.belongsTo(Users, { as: "owner" });

Wallet.belongsTo(Users, { as: "owner" });
