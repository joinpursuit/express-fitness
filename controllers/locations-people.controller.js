const express = require("express");
const locationsPeople = express.Router();
const locationsPeopleArray = require("../models/location-people.model.js");

locationsPeople.get("/", (request, response) => {
	response.json(locationsPeopleArray);
});

module.exports = locationsPeople;
