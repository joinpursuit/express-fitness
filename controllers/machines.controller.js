const express = require("express");
const machines = express.Router();
const machineData = require ("../models/machine.model.js")
machines.get ("/", (req,res)=> {
    res.json(machineData)
})
module.exports = machines