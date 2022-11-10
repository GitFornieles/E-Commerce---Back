const express = require("express");
const router = express.Router();
const routerUsers = require("./users");
const routerWallet = require("./wallets");
const routerproducts = require("./products");
const routerCart = require("./cart");
const routerAdmin = require("./admin");const routerPayments=require("./payments");
const routerReviews = require("./reviews");


router.use("/products", routerproducts);
router.use("/users", routerUsers);
router.use("/wallet", routerWallet);
router.use("/cart", routerCart);
router.use("/admin", routerAdmin);
router.use("/payment",routerPayments)
router.use("/reviews",routerReviews)

module.exports = router;
