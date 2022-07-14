const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-event.model.js");

specialEvents.get("/special-events", (request, response) => {
	response.json(specialEventsArray);
});

module.exports = specialEvents;
