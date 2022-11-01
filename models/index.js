import Users from "./users";
import Cart from "./cart";
import Product from "./products"
import Payment from "./payment"
import purchaseOrder from "./purchaseOrder"
import Image from "./images"
import Review from "./review"
import Wallet from "./wallets";

Cart.belongsTo(Users,{as:"ownerId"})
Cart.hasMany(Product)

Payment.belongsTo(Users,{as:"ownerId"})
Users.hasMany(Payment)
purchaseOrder.belongsTo(Payment,{as:"paymentId"})
Payment.belongsTo(Wallet, {as: "payMethodId"})

Payment.belongsTo(purchaseOrder,{as:"purchaseId"})
purchaseOrder.belongsTo(Users,{as:"ownerId"})
purchaseOrder.belongsTo(Cart,{as:"cartId"})

Image.belongsTo(Product)

Review.belongsTo(Product)
Review.belongsTo(Users,{as:"author"})

Wallet.belongsTo(Users,{as:"ownerId"})
