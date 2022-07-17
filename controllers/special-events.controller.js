const express = require("express");

const specialevents = express.Router();

const specialeventsData = require("../models/special-event.model.js")

specialevents.get("/", (req, res) => {
    res.json(specialeventsData)
})

// location.get("/:id", (req, res) => {
//     const {id} = req.params
//     res.json(locationsData[id])
// })

module.exports = specialevents