const express = require("express");
const machines = express.Router();

const equipmentData = require("../models/machine.model.js");

machines.get("/", function (req, res) {
    res.json(equipmentData)
})
module.exports = machines;