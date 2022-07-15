const express = require('express');
const machines = express.Router();
const machinesArray = require('../models/machine.model');

machines.get('/', (request, response) => {
  response.json(machinesArray);
});

module.exports = machines;
