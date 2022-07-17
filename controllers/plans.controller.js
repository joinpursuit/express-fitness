const express = require("express");
const plans = express.Router();
const plansData = require("../models/plan.model.js");

// in order to even get to this line the path is already "/bookmarks"
plans.get("/", (req, res) => {
    res.json(plansData)
});

plans.get("/:id", (req, res) => {
    const { id } = req.params;
    if (plansData[id]) {
        res.json(plansData[id])
    } else {
        res.status(404).json({error: "Sorry, no page found!"})
    } 
})

module.exports = plans;