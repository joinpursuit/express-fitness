const express = require("express");
const specialEvents = express.Router();
const specialEventsData = require("../models/special-event.model");

specialEvents.get("/special-events");
specialEvents.get("/", (req, res) => {
  res.send(specialEventsData);
});

module.exports = specialEvents;