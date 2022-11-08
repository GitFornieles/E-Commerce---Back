const express = require("express");
const router = express.Router();
const { Users } = require("../models/");
const tokens = require("../middleware/tokens/tokens");

router.get("/allUsers", (req, res) => {
  Users.findAll({ where: { [Op.not]: req.body } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
});

//el body deberia enviar info del usuario
router.delete("/deleteUser", (req, res) => {
  Users.destroy({ where: req.body }).then(() => res.sendStatus(201));
});

router.put("/createAdmin", (req, res) => {
  Users.update({ where: req.body }).then((user) => user.setAdmin());
});

router.put("/deleteAdmin", (req, res) => {
  Users.update({ where: req.body }).then((user) => user.unSetAdmin());
});

router.post("/login", (req, res, next) => {
  const { nickname, password } = req.body;
  Users.findOne({ where: { nickname: nickname, admin: true } }).then(
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
              return payload;
            }
          })
          .catch((err) => console.log(err));
    }
  );
});

module.exports = router;
