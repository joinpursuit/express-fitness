const express = require("express");
const app = express();

const locationController = require("./controllers/locations.controller");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationController);



module.exports = app;
