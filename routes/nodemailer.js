const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  let email = req.body.email;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aromasjejeje@gmail.com",
      pass: "fuguxiirjiyqcrhp",
    },
  });
  let mailOptions = {
    from: "Aromas",
    to: email,
    subject: "Confirmacion de pago",
    text: "Su pago ha sido confirmado :)",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send(req.body);
    }
  });
});

module.exports = router;
