// DEPENDENCIES
const express = require("express");

// CONFIG
const locationsPeople = express.Router();
const locationsPeopleData = require("../models/location-people.model.js");

// ROUTES
locationsPeople.get("/locations/", (req, res) => {
  res.json(locationsPeopleData);
});

// 404 PAGE
locationsPeople.get("*", (req, res) => {
  res.json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = locationsPeople;