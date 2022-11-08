const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {} //aka "carrito de compras"

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    mainImage: {
      type: S.STRING,
      allowNull: false,
    },
    categorie: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
        type: S.TEXT,
        allowNull: false,
    },
    cost:{
        type:S.INTEGER,
        allowNull:false
    },
    price:{
        type:S.INTEGER,
        allowNull:false
    },
    stock:{
        type:S.INTEGER,
        allowNull:false
    },
    rating:{
        type:S.FLOAT,
    },
  },
  { sequelize: db, modelName: "product" }
);


module.exports=Product