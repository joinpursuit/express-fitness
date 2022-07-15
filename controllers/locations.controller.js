const express = require('express');
const locations = express.Router();
const locationsArr = require('../models/location.model.js');

locations.get('/', (req, res) => {
	res.send(locationsArr);
});

locations.get('/people', (req, res) => {
	const peopleLocations = locationsArr.map((location) => {
		const peopleFilter = peopleLocations.filter((person) => {
			return person.mainLocation === location.zip;
		});

		location.people = peopleFilter;
		return location;
	});
	res.send(peopleLocations);
});
module.exports = locations;
