import Users from "./users";
import MktCart from "./mktCart";

MktCart.belongsTo(Users,{as:"owner"})
Product.belongsTo(MktCart,{as:"product"})
