const express = require("express");
const person = express.Router();
const personsData = require("../models/person.model.js");

// in order to even get to this line the path is already "/bookmarks"
person.get("/", (req, res) => {
    res.json(personsData)
});

person.get("/:id", (req, res) => {
    const { id } = req.params;
    if (personsData[id]) {
        res.json(personsData[id])
    } else {
        res.status(404).json({error: "Sorry, no page found!"})
    } 
})

module.exports = person;