const express = require("express");
const specialEvents = express.Router();

const specialEventsData = require("../models/special-event.model.js");

specialEvents.get("/", (req, res) => {
    res.json(specialEventsData)
});

specialEvents.get("/:id", (req, res) => {
    const { id } = req.params;
    if (specialEventsData[id]) {
        res.json(specialEventsData[id])
    } else {
        res.status(404).send(`"Sorry, no page found!"`)
    }
});

module.exports = specialEvents;