const express = require('express')
const plans = express.Router()
const plansArr = require('../models/plan.model.js')

plans.get('/', (req, res ) => {
    res.send(plansArr)
});

module.exports = plans