const express = require("express");
const machines = express.Router();
// Controller dictates the logic of the router

const machinesData = require("../models/machine.model.js");

// in order to get to this line the path is already "/bookmarks"
machines.get("/", (req, res) => {
    res.json(machinesData)
});


module.exports = machines;