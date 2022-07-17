const express = require("express");
const persons = express.Router();

const personData = require("../models/person.model");

persons.get("/", (req, res) => {
  res.json(personData);
});

module.exports = persons;
