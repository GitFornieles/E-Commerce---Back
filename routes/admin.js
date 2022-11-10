const express = require("express");
const router = express.Router();
const { User } = require("../models/index");
const tokens = require("../middleware/tokens/tokens");
const { Op } = require("sequelize");

router.get("/allUser/:user", (req, res) => {
  const user = req.params.user;
  User.findAll({ where: { [Op.not]: { nickname: user } } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
});

//el body deberia enviar info del usuario
router.delete("/deleteUser", (req, res) => {
  User.destroy({ where: req.body }).then(() => res.sendStatus(201));
});

router.put("/createAdmin", (req, res) => {
  User.update(
    { admin: true },
    { where: { nickname: req.body.nickname } }
  ).then(() => res.status(200).send("Usuario admin"));
});

router.put("/deleteAdmin", (req, res) => {
  User.update(
    { admin: false },
    { where: { nickname: req.body.nickname } }
  ).then(() => res.status(200).send("Usuario ya no es admin"));
});

router.post("/login", (req, res, next) => {
  const { nickname, password } = req.body;

  User.findOne({ where: { nickname: nickname, admin: true } }).then(
    (foundUser) => {
      if (!foundUser)
        res.status(401).send("User Not Found or User is not an Admin");
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

              // Aca cambie el return a res.send(payload) porque sino no me funcionaba:
              res.send(payload);
            }
          })
          .catch((err) => console.log(err));
    }
  );
});

module.exports = router;
