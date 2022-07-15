// DEPENDENCIES
const express = require("express");

// CONFIG
const persons = express.Router();
const personsData = require("../models/person.model.js")

// ROUTES
persons.get("/", (req, res) => {
  res.json(personsData);
})

// EXPORT
module.exports = persons;