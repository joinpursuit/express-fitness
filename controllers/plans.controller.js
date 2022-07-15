const express = require('express');
const plans = express.Router();
const plansArray = require('../models/plan.model');

plans.get('/', (request, response) => {
  response.json(plansArray);
});

module.exports = plans;
