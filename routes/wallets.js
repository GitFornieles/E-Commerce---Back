const { Users, Wallet } = require("../models/index");
const express = require("express");
const routerWallet = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const tokens = require("../middleware/tokens/tokens");
const { Op } = require("sequelize");

//Ruta home
// /api/wallet

//Acciones a logrear
//  - Usuario crea medio de pago
//  - Usuario elimina medio de pago
//  - Usuario modifica medio de pago
//  - Ruta de consulta de medio de pago de un usuario

//devuelve todos los medios de pago de un usuario

// req.body trae el id del usuario





module.exports=routerWallet