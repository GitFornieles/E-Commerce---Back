const express = require("express");
const router = express.Router();
const routerUsers = require("./users")
const routerWallet = require("./wallets")



router.use("/users",routerUsers)
router.use("/wallet",routerWallet)

module.exports=router