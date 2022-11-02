const express = require("express");
const router = express.Router();
const products = require("./products");

router.use("/products", products);

module.exports = router;
