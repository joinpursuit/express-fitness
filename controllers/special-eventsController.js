/** @format */

const express = require('express');
const specialEvents = express.Router();
const specialEventsArray = require('../models/special-events.model.js');

specialEvents.get('/', (req, res) => {
	res.json(specialEventsArray);
});

module.exports = specialEvents;
