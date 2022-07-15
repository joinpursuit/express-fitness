const express = require('express');
const locations = express.Router();
const locationsArray = require('../models/location.model.js');

locations.get('/', (req, res) => {
  res.json(locationsArray);
});

locations.get('/people', (req, res) => {
  const peopleLocations = locationsArray.map((location) => {
    const peopleFilter = peopleLocations.filter((person) => {
      return person.mainLocation === location.zip;
    });
    location.people === peopleFilter;
    return location;
  });
  res.send(peopleLocations);
});

module.exports = locations;
