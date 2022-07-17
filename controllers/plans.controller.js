const express = require("express");
const plans = express.Router();
const plansData = require("../models/plan.model");

plans.get("/plans");
plans.get("/", (req, res) => {
  res.send(plansData);
});

module.exports = plans;
