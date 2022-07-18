const express = require('express')
const plans = express.Router();

const plansData = require('../models/plan.model.js')

plans.get('/',(request, response)=>{
  response.json(plansData)
})

module.exports = plans