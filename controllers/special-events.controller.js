const express = require("express");
const specialEvent = express.Router();
const specialEventData = require("../models/special-event.model.js");

// in order to even get to this line the path is already "/bookmarks"
specialEvent.get("/", (req, res) => {
    res.json(specialEventData)
});

specialEvent.get("/:id", (req, res) => {
    const { id } = req.params;
    if (specialEventData[id]) {
        res.json(specialEventData[id])
    } else {
        res.status(404).json({error: "Sorry, no page found!"})
    } 
})

module.exports = specialEvent;