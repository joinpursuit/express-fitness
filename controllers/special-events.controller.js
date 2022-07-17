const express = require("express");
const specialEvent = express.Router();
// Controller dictates the logic of the router

const specialEventData = require("../models/special-event.model.js");

// in order to get to this line the path is already "/bookmarks"
specialEvent.get("/", (req, res) => {
    res.json(specialEventData)
});

module.exports = specialEvent;