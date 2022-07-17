const express = require("express");
const people = express.Router();

const peopleData = require("../models/person.model.js");

people.get("/", (req, res) => {
    res.json(peopleData)
});

people.get("/:id", (req, res) => {
    const { id } = req.params;
    if (peopleData[id]) {
        res.json(peopleData[id])
    } else {
        res.status(404).send(`"Sorry, no page found!"`)
    }
});

module.exports = people;