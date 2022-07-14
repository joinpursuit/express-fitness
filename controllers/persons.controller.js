const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js");

persons.get("/persons", (request, response) => {
	response.json(personsArray);
});

module.exports = persons;
