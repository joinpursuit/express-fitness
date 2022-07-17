const express = require("express");
const plans = express.Router();
const planData = require ("../models/plan.model.js")
plans.get ("/", (req,res)=> {
    res.json(planData)
})
module.exports = plans