const express = require('express');
const specialEvents = express.Router();
const specialEventsArray = require('../models/special-event.model');

specialEvents.get('/', (request, response) => {
  response.json(specialEventsArray);
});

module.exports = specialEvents;
