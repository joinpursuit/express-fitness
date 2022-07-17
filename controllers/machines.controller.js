const express = require("express");

const machines = express.Router();

const machinesData = require("../models/machine.model.js")

machines.get("/", (req, res) => {
    res.json(machinesData)
})

// location.get("/:id", (req, res) => {
//     const {id} = req.params
//     res.json(locationsData[id])
// })

module.exports = machines