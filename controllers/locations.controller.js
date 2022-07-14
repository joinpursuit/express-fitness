const express = require('express');
const locations = express.Router();
const locationsArr = require('../models/location.model.js');

locations.get('/', (req, res) => {
	res.send(locationsArr);
});

module.exports = locations;
