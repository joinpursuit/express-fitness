const express = require("express");
const events = express.Router();

const eventData = require("../models/special-event.model");

events.get("/", (req, res) => {
  res.json(eventData);
});

module.exports = events;
