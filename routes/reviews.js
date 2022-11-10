const express = require("express");
const routerReviews = express.Router();
const { Review } = require("../models");
const { User } = require("../models");
const { Product } = require("../models");

routerReviews.post("/", (req, res) => {
  const { user, product, review, rating } = req.body;
  User.findByPk(user).then((currentUser) => {
    Product.findByPk(product)
      .then((curentProduct) => {
        const newReview = { review: review, rating: rating };
        Review.create(newReview)
          .then((addReview) => addReview.setUser(currentUser))
          .then((addReview) => addReview.setProduct(curentProduct));
      })
      .then(() => res.status(202).send("review agregada"));
  });
});

routerReviews.get("/comentarios/:id", (req, res) => {
  const productId= req.params.id
  console.log(productId);
  Review.findAll({ where: { productId } }).then((comentarios) =>
    res.send(comentarios)
  );
});

routerReviews.delete("/:id", (req, res) => {
  const id = req.body.id;
  Review.destroy({ where: { id } }).then(() => res.sendStatus(204));
});

module.exports = routerReviews;
