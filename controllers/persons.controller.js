const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model");

persons.get("/persons");
persons.get("/", (req, res) => {
  res.send(personsArray);
});
module.exports = persons;
