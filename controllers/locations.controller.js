// DEPENDENCIES
const express = require("express");

// CONFIG
const locations = express.Router();
const locationsData = require("../models/location.model.js");

// ROUTES
locations.get("/", (req, res) => {
  res.json(locationsData);
});

// 404 PAGE
locations.get("*", (req, res) => {
  res.json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = locations;