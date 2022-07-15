// DEPENDENCIES
const express = require("express");

// CONFIG
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");

// ROUTES
machines.get("/", (req, res) => {
  res.json(machinesArray);
});

// EXPORT
module.exports = machines;