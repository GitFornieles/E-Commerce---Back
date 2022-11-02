// Configuración del server
const db = require("./db/index");
const models = require("./models/index");
const express = require("express");
const app = express();
const routes = require("./routes");
const cookies = require("cookie-parser"); // siempre agregar esto para poder trabajar con cookies
const cors = require("cors");
const port = 8000;

//Middlewares
app.use(express.json());
app.use(cookies());
app.use(cors()); // Esto permite que el server acepte pedidos HTTP desde otros dominios

//Routing
app.use("/api", routes);
app.get("/*", (req, res) => {
  res.send("Nada por acá");
});

//DB
//{ force: true }
db.sync({ force: false }).then(() => {
  console.log("DataBase Connected");
  app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
  });
});
