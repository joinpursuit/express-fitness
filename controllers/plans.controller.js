// DEPENDENCIES
const express = require("express");

// CONFIG
const plans = express.Router();
const plansData = require("../models/plan.model.js");

// ROUTES
plans.get("/", (req, res) => {
  res.json(plansData)
})

// 404 PAGE
plans.get("*", (req, res) => {
  res.json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = plans;