const express = require('express')
const machines = express.Router()
const machinesArr = require('../models/machine.model.js')

machines.get('/',(req, res) => {
    res.send(machinesArr)
});

module.exports = machines;