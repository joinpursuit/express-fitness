const locations = require("express").Router();
const locationArray = require("../models/location.model");

locations.get("/", (req, res) => {
  res.json(locationArray);
});

module.exports = locations;