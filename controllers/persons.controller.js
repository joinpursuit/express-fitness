// DEPENDENCIES
const express = require("express");

// CONFIG
const persons = express.Router();
const personsData = require("../models/person.model.js")

// ROUTES
persons.get("/", (req, res) => {
  res.json(personsData);
})

// 404 PAGE
persons.get("*", (req, res) => {
  res.json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = persons;