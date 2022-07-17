const express = require("express");
const machines = express.Router();
const machinesData = require("../models/machine.model.js");

// in order to even get to this line the path is already "/bookmarks"
machines.get("/", (req, res) => {
    res.json(machinesData)
});

machines.get("/:id", (req, res) => {
    const { id } = req.params;
    if (machinesData[id]) {
        res.json(machinesData[id])
    } else {
        res.status(404).json({error: "Sorry, no page found!"})
    } 
})

module.exports = machines;