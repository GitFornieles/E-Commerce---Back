const S = require("sequelize");
const db = require("../db");

class Review extends S.Model {} //aka "carrito de compras"

Review.init(
  {
    review: {
      type: S.STRING,
      allowNull: false,
    },
    rating: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "review" }
);

module.exports = Review;

//productId, authorId