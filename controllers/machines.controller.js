const express = require("express");
const machines = express.Router();
const machinessArray = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.send(machinessArray);
});

module.exports = machines;