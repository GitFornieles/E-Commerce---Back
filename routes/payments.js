const express = require("express");
const routerPayments = express.Router();
const { Payment, Cart, User } = require("../models/index");

//Ruta para ver todos los payments registrados
routerPayments.get("/", (req, res) => {
  Payment.findAll()
    .then((payments) => res.status(200).send(payments))
    .catch((err) => console.log(err));
});

routerPayments.post("/user", (req, res) => {
  Payment.findAll({ where: { ownerId: req.body.ownerId } }).then((payments) =>
    res.status(200).send(payments)
  );
});

// RUTA PARA PAGAR CART
// Ruta para "Pagar" un Cart. El User hace click en "pagar"  y el front manda un pedido http a esta ruta con esta info:
// Ruta para crear nuevo payment.
// Busca el User
// Busca el cart
// Crea el pago
// Asigna el cart al payment
// Asigna el payment al cart
// asigna el user al payment
// Cambia el cart purchasedStatus a true
// Cambia el cart shippingStatus a true
// Cambia el cart inProgress a false

// req.body={
//     ownerId:
//     cartId:
//     total:
// }
routerPayments.post("/", (req, res) => {
  const { ownerId, cartId, total } = req.body;
  User.findByPk(ownerId)
    .then((user) =>
      Cart.findByPk(cartId).then((cart) => {
        Payment.create({ total: total }).then((newPayment) => {
          newPayment.setOwner(user).then((newPayment) => {
            newPayment.setCart(cart).then((newPayment) => {
              cart.setPayment(newPayment).then(() => {
                Cart.update(
                  {
                    purchasedStatus: true,
                    shippingStatus: true,
                    inProgress: false,
                  },
                  { where: { id: cartId } }
                ).then(() => {
                  res.status(202).send(newPayment);
                });
              });
            });
          });
        });
      })
    )
    .catch((err) => console.log(err));
});

module.exports = routerPayments;
