const express = require("express");

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

module.exports = locations;