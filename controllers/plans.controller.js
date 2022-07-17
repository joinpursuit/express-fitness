const express = require("express");

const Plans = express.Router();

const PlansData = require("../models/plan.model.js")

Plans.get("/", (req, res) => {
    res.json(PlansData)
})

// location.get("/:id", (req, res) => {
//     const {id} = req.params
//     res.json(locationsData[id])
// })

module.exports = Plans