const express = require('express');
const locations = express.Router();
const locationsArray = require('../models/location.model.js');
const peoplesArray = require('../models/person.model.js');

locations.get('/', (req, res) => {
  res.json(locationsArray);
});

locations.get('/people', (req, res) => {
  let peopleInLocation = locationsArray.map((location) => {
    let peopleFiltered = peoplesArray.filter((person) => {
      return person.mainLocation === location.zip;
    });
    location.people = peopleFiltered;
    return location;
  });
  res.json(peopleInLocation);
});

module.exports = locations;
