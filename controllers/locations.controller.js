const express = require("express")
const locations = express.Router();

const locationsData = require("../models/location.model.js")
const peopleData = require("../models/people.model.js")

locations.get("/", (req, res) => {
    res.json(locationsData)
})

locations.get("/people", (req, res) => {
        res.json(peopleData)
})

module.exports = locations