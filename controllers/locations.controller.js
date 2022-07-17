const express = require("express");
const locations = express.Router();
const locationsData = require("../models/location.model.js");

// in order to even get to this line the path is already "/bookmarks"
locations.get("/", (req, res) => {
    res.json(locationsData)
});

locations.get("/:id", (req, res) => {
    const { id } = req.params;
    if (locationsData[id]) {
        res.json(locationsData[id])
    } else {
        res.status(404).json({error: "Sorry, no page found!"})
    } 
})


module.exports = locations