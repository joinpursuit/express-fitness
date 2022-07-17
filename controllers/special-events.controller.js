const express = require('express');
const specialevents = express.Router();

const specialEventsData = require('../models/special-event.model.js');

specialevents.get('/', (req, res) => {
  res.json(specialEventsData);
});

module.exports = specialevents;
