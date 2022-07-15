const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model");

machines.get("/machines");
machines.get("/", (req, res) => {
  res.send(machinesArray);
});
module.exports = machines;
