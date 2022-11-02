const express = require("express");
const router = express.Router();
const routerUsers = require("./users")
const routerWallet = require("./wallets")
const products = require("./products");



router.use("/products", products);
router.use("/users",routerUsers)
router.use("/wallet",routerWallet)

module.exports=router