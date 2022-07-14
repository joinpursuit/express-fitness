//dependencies

const express = require("express");

//config

const app = express();

//routes

app.get("/", (req, res) => {
  res.send("HELLO");
});

//export
module.exports = app;
