const express = require("express");

const persons = express.Router();

const personsData = require("../models/person.model.js")

persons.get("/", (req, res) => {
    res.json(personsData)
})

// location.get("/:id", (req, res) => {
//     const {id} = req.params
//     res.json(locationsData[id])
// })

module.exports = persons