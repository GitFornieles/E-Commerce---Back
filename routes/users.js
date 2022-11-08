const { User, Cart, CartItem } = require("../models/index");
const express = require("express");
const routerUsers = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const tokens = require("../middleware/tokens/tokens");
const { Op } = require("sequelize");

//RUTA "HOME" "/"
// /api/users

//ACCIONES DE ESTE ROUTER:
// - Crear Usuario
// - Login, con creación de token/cookie
// - Logout
// - Obtener universo de usuarios que no contiene al usuario propio
// - Modificar Usuario

//MODELO DE USER
// {
// dni: {
// nickname: {
// email: {
// name: {
// lastname: {
// age: {
// address: {
// city: {
// postalCode: {
// cellphone: {
// password: {
// salt: {
// admin: {
//   },

//Ruta de prueba de conexión
routerUsers.get("/", (req, res, next) => {
  res.send("LLegaste a Users");
});

//Ruta que devuelve universo de usuarios

//RUTA DE LOGIN
//Req.body=
// {
//     nickname:
//     password:
// }

//Busca el nickname, si no lo encuentra devuelve error
//Busca valida el password, si no valida, devuelve error
//Almacena la información del usuario sin password ni salt
//Busca si el id del usuario tiene Cart pendiente
//Si tiene Cart pendiente, envía al front un objeto con: {user:usuario, cartId:numero de carrito, products:[items del carrito]}
//Si no tiene Cart pendiente, envía al front: {user:usuario, cartId:numero de carrito, products:[]}
routerUsers.post("/login", (req, res, next) => {
  const { nickname, password } = req.body;
  User.findOne({ where: { nickname } }).then((foundUser) => {
    if (!foundUser) res.status(401).send("User Not Found");
    else
      foundUser
        .validatePassword(password)
        .then((validated) => {
          if (!validated) return res.status(401).send("Invalid Password");
          else {
            let payload = { ...foundUser };
            delete payload.password;
            delete payload.salt;
            let token = tokens.generateToken(payload);
            res.cookie("token", token);
            return payload;
          }
        })
        .then((payload) => {
          payload=payload.dataValues
          Cart.findOne({
            where: { ownerId: payload.id, inProgress: true },
          }).then((currentCart) => {
            //res.send(currentCart)
            if (currentCart)
              CartItem.findAll({ where: { cartId: currentCart.id } }).then(
                (currentProducts) => {
                  res.status(200).send({
                    user: payload,
                    cartId: currentCart.id,
                    products: currentProducts,
                  });
                }
              );
            else {
              Cart.create()
                .then((currentCart) => currentCart.setOwner(foundUser))
                .then((currentCart) => {
                  currentCart=currentCart.dataValues
                  res.status(200).send({
                    user: payload,
                    cartId: currentCart.id,
                    products: [],
                  });
                });
            }
          });
        })
        .catch((err) => console.log(err));
  });
});

//Ruta de creación de nuevo usuario
// Req.body={
//     dni:
//     nickname:
//     email:
//     name:
//     lastname:
//     age:
//     address:
//     city:
//     postalCode:
//     cellphone:
//     password:
// }
//   /api/users/new
routerUsers.post("/new", (req, res, next) => {
  //1. Busco si el mail está registradp existe. Si es así, devuelvo un 208 y msg
  //2. Si el mail no está registrado, busco el nickname
  //3. Verifico que no esté tampoco el DNI
  //3. Si no existen en la DB mail nickname ni dni, creo usuario y lo mando al FRONT
  User.findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result)
        res.status(208).send({ response: "Email already registered" });
      else
        User.findOne({ where: { nickname: req.body.nickname } }).then(
          (result) => {
            if (result)
              res.status(208).send({ response: "Nickname is already in use" });
            else
              User.findOne({ where: { dni: req.body.dni } }).then((result) => {
                if (result)
                  res
                    .status(208)
                    .send({ response: "El DNI ya se encuentra registrado" });
                else {
                  newUser = {
                    dni: req.body.dni,
                    nickname: req.body.nickname,
                    email: req.body.email,
                    name: req.body.name,
                    lastname: req.body.lastname,
                    age: req.body.age,
                    address: req.body.address,
                    city: req.body.city,
                    postalCode: req.body.postalCode,
                    cellphone: req.body.cellphone,
                    password: req.body.password,
                  };
                  User.create(newUser).then((result) => {
                    delete result.salt;
                    delete result.password; //eliminamos el campo password del objeto a enviar al front
                    res.status(201).send(result);
                  });
                }
              });
          }
        );
    })
    .catch((err) => res.send(err));
});

routerUsers.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  User.destroy({ where: { id: id } })
    .then(() => res.status(202).send("Usuario Eliminado"))
    .catch((err) => console.log(err));
  // ¿ELIMINAMOS TODAS LAS OPERACIONES REALIZADAS POR ESTE USUARIO?
});

// El front debe mandar TODA la información. Lo que no haya cambiado lo manda también
// Ruta de modificación de usuario
// Debe venir con el id de usuario
//     email:
//     address:
//     city:
//     postalCode:
//     cellphone:

routerUsers.put("/modUser", (req, res, next) => {
  User.update(
    {
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      postalCode: req.body.postalCode,
      cellphone: req.body.cellphone,
    },
    { where: { id: req.body.id } }
  ).then(() => res.status(202).send("Usuario modificado"));
});

routerUsers.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = routerUsers;
