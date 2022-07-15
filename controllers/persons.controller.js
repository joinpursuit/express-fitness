const express = require('express');
const people = express.Router();
const peopleArray = require('../models/person.model');

people.get('/', (request, response) => {
  response.json(peopleArray);
});

module.exports = people;
