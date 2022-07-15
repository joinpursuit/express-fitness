// DEPENDENCIES
const express = require("express");

// CONFIG
const specialEvents = express.Router();
const specialEventsData = require("../models/special-event.model.js")

// ROUTES
specialEvents.get("/", (req, res) => {
  res.json(specialEventsData)
})

// 404 PAGE
specialEvents.get("*", (req, res) => {
  res.json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = specialEvents;