const express = require("express");
const people = express.Router()

const peopleData = require("../models/person.model.js");

people.get("/", function (req, res) {
    res.json(peopleData);
})

module.exports = people