// create a server 
const express = require('express');
const { connect } = require("./db/connect.js");
const routerUsers = require("./route/user");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", routerUsers);

connect("mysql://localhost:8080/", (err) => {
  if (err) {
    console.log("Erreur lors de la connexion à la base de données");
    process.exit(-1);
  } else {
    console.log("Connexion avec la base de données établie");
    app.listen(3000);
    console.log("Server");
  }
});
