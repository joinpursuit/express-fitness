const express = require("express");
const plans = express.Router();
// Controller dictates the logic of the router

const plansData = require("../models/plan.model.js");

// in order to get to this line the path is already "/bookmarks"
plans.get("/", (req, res) => {
    res.json(plansData)
});

module.exports = plans;