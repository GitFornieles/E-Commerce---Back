const express = require("express");
const router = express.Router();
const Product = require("../models/index");
const { Op } = require("sequelize");

router.get("/", (req, res) => {
  Product.findAll().then((products) => res.send(products));
});

router.get("/:categorie", (req, res) => {
  Product.findAll({ where: req.params.categorie }).then((products) =>
    res.send(products)
  );
});

router.get("/:name", (req, res) => {
  let valueToFind = req.params.name.toString();
  Product.findAll({ where: { [Op.like]: valueToFind } }).then((products) => {
    res.send(products);
  });
});

router.get("/:id", (req, res) => {
  Product.findByPk(req.params.id).then((product) => res.send(product));
});

router.post("/add", (req, res) => {
  Product.create(req.body).then((product) => res.status(201).send(product));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Product.update(req.body, {
    where: { id },
    returning: true,
    plain: true,
  }).then((result) => {
    let obj = {
      updatedProduct: result[1],
    };
    res.send(obj);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Product.destroy({ where: { id } }).then(() => res.sendStatus(204));
});

module.exports = router;
