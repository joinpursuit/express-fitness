const express = require("express");
const locations = express.Router();
const locationsData = require("../models/location.model");

locations.get("/location");
locations.get("/", (req, res) => {
  res.send(locationsData);
});

module.exports = locations;
