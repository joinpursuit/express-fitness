const express = require("express");

const locations = express.Router();

const locationsData = require("../models/location.model.js")

locations.get("/", (req, res) => {
    res.json(locationsData)
})

// location.get("/:id", (req, res) => {
//     const {id} = req.params
//     res.json(locationsData[id])
// })

module.exports = locations