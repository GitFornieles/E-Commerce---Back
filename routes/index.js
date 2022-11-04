const express = require("express");
const router = express.Router();
const routerUsers = require("./users")
const routerWallet = require("./wallets")
const routerproducts = require("./products");
const routerCart=require("./cart")


router.use("/products", routerproducts);
router.use("/users",routerUsers)
router.use("/wallet",routerWallet)
router.use("/cart",routerCart)

module.exports=router