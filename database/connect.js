const mysql = require('mysql');

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    db.query("CREATE DATABASE nodejs", function (err, result) {
        if (err) throw err;
        console.log("Base de données créée !");
      });
  });