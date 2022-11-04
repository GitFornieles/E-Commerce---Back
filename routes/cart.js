const express = require("express");
const routerCart = express.Router();
const { CartItem, Users, Product } = require("../models/index");

//Ruta de obtención de todos los Cart de un user
//El front envía el ownerId (id del usuario)
routerCart.post("/userCarts", (req, res) => {
  const id = req.body.id;
  CartItem.findAll({ where: { ownerId: id } }).then((result) =>
    res.status(200).send(result)
  );
});

//Ruta de obtención de carrito vigente
//El front envía el ownerId (id del usuario)
//La ruta devuelve SOLO los ítems que conforman el carrito pendiente

routerCart.get("/currentCart", (req, res) => {
  const id = req.body.id;
  CartItem.findAll({ where: { ownerId: id, inProgresss: true } }).then(
    (result) => res.status(200).send(result)
  );
});

//Ruta para agregar producto
//Front envía:
// - id usuario
// - cartNum (número de carrito)
// - Qty (cantidad del producto)
// - productId

routerCart.post("/addProduct", (req, res) => {
  const { userId, cartNum, qty, productId } = req.body;
  Users.findByPk(userId)
    .then((usuario) => {
      Product.findByPk(productId).then((producto) => {
        CartItem.create({ qty: qty, cartNum: cartNum })
          .then((productoCreado) => productoCreado.setOwner(usuario))
          .then((productoCreado) => productoCreado.setProduct(producto))
          .then((result)=>res.status(201).send(result));
      });
    }).catch(err=>console.log(err))
});

//Editar cantidad a un producto que ya está en el carrito
//Front envía:
// - id usuario
// - cartNum (número de carrito)
// - Qty (cantidad del producto)
// - productId
routerCart.put("/addProduct",(req,res)=>{
    const { userId, cartNum, qty, productId } = req.body;
    CartItem.update({qty:qty},{where:{cartNum:cartNum,productId:productId}}).then(result=>res.status(202),send(result)).catch(err=>console.log(err))
})

//Ruta para eliminar un producto del carrito
//Front envía:
// - id usuario
// - cartNum (número de carrito)
// - Qty (cantidad del producto)
// - productId
routerCart.delete("/remProduct",(req,res)=>{
    const { userId, cartNum, qty, productId } = req.body;
    CartItem.destroy({where:{cartNum:cartNum,productId:productId}}).then(()=>res.status(202),send("Producto eliminado")).catch(err=>console.log(err))
})

//Ruta para "cerrar" carrito
//Agregar lógica de enviar a purchaseOrders/payments
routerCart.put("/closeCart",(req,res)=>{
    const { userId, cartNum, qty, productId } = req.body;
    CartItem.update({inProgresss:false},{where:{cartNum:cartNum}}).then(()=>res.status(202),send("Carrit Cerrado")).catch(err=>console.log(err))
})




module.exports = routerCart;