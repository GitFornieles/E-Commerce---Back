const express = require("express");
const router = express.Router();
const routerUsers = require("./users")

router.use("/users",routerUsers)


module.exports=router