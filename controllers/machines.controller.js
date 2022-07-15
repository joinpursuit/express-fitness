// DEPENDENCIES
const express = require("express");

// CONFIG
const machines = express.Router();
const machinesData = require("../models/machine.model.js");

// ROUTES
machines.get("/", (req, res) => {
  res.json(machinesData);
});

// 404 PAGE
machines.get("*", (req, res) => {
  res.json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = machines;