// DEPENDENCIES
const express = require("express");

// CONFIG
const special_event = express.Router();
const special_eventData = require("../models/special-event.model.js")

// ROUTES
special_event.get("/", (req, res) => {
  res.json(special_eventData)
})

// EXPORT
module.exports = special_event;