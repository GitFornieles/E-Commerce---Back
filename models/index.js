const User = require("./user");
const CartItem = require("./cartItem");
const Product = require("./product");
const Payment = require("./payment");
//const purchaseOrder = require("./purchaseOrder");
const Image = require("./images");
const Review = require("./review");
const Cart = require("./cart")

//En esta isntancia no se implementará eñl guardado de métodos de pago
// const Wallet = require("./wallet");
// Payment.belongsTo(Wallet, { as: "payMethod" });
// Wallet.belongsTo(User, { as: "owner" });
//No se requiere finalmente la tabla de purchaseOrder

//CartItem.belongsTo(User, { as: "owner" }); //En la tabla CartItem crea la columna ownerId -> VER SI SE USA PARA ALGO
//Product.hasMany(CartItem, { as: "product" }); //En la tabla CartItem crea la columna productId
CartItem.belongsTo(Product)

Payment.belongsTo(User, { as: "owner" }); //En la tabla Payment crea la columna ownerId
//purchaseOrder.belongsTo(Payment, { as: "payment" });

//Payment.belongsTo(purchaseOrder, { as: "purchase" });
//purchaseOrder.belongsTo(User, { as: "owner" });
//purchaseOrder.belongsTo(CartItem, { as: "cartItem" });

Image.belongsTo(Product);

Review.belongsTo(Product);
Review.belongsTo(User); // En la tabla Review agrega la columna ownerId
User.hasMany(Review)


// const DataTypes = require('sequelize/lib/data-types');
// const Devices_has_executables = sequelize.define("devices_has_executables",{
//   nueva_columna: DataTypes.INTEGER
//  },{timestamps: true});
//  devices.belongsToMany(executables, { through: Devices_has_executables  });
//  executables.belongsToMany(devices, { through: Devices_has_executables  });

// Cart se completa con las relaciones 
// - "un user tiene muchos cart"
//User.hasMany(Cart) // En la tabla Cart crea la columna userId (no la crea como Owner){as:"owner"}
Cart.belongsTo(User,{as:"owner"})
// - "cartItem pertenece a un carrito"
CartItem.belongsTo(Cart, {as:"cart"}) //En la tabla CartItem crea la columna cartId
// - "un carrito tiene un payment" y "un payment pertenece a un carrito"
Payment.belongsTo(Cart, {as:"cart"}) // En la tabla Payment crea la columna cartId
Cart.belongsTo(Payment) // En la tabla Cart agrega la columna paymentId





module.exports = {
  User,
  CartItem,
  Product,
  Payment,
  Image,
  Review,
  Cart
};

//  purchaseOrder,
//  Wallet,