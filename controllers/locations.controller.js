const express = require('express');
const locations = express.Router();
const locationArray = require('../models/location.model');

locations.get('/', (request, response) => {
  response.json(locationArray);
});

module.exports = locations;
