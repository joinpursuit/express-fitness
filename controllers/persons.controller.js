const people = require("express").Router();
const peopleArray = require("../models/person.model");

people.get("/", (req, res) => {
  res.json(peopleArray);
});

module.exports = people;
