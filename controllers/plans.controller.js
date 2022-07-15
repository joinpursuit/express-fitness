// DEPENDENCIES
const express = require("express");

// CONFIG
const plans = express.Router();
const plansData = require("../models/plan.model.js");

// ROUTES
plans.get("/", (req, res) => {
  res.json(plansData)
})

// EXPORT
module.exports = plans;