const express = require('express');
const machines = express.Router();

const machinesData = require('../models/machine.model.js')

machines.get('/',(request, response)=>{
  response.json(machinesData)
})

module.exports = machines