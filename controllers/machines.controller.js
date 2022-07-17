const express = require("express");
const equipment = express.Router();

const equipmentData = require("../models/machine.model.js");

equipment.get("/", (req, res) => {
    res.json(equipmentData)
});

equipment.get("/:id", (req, res) => {
    const { id } = req.params;
    if (equipmentData[id]) {
        res.json(equipmentData[id])
    } else {
        res.status(404).send(`"Sorry, no page found!"`)
    }
});

module.exports = equipment;