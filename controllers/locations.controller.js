const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");

locations.get("/locations", (request, response) => {
	response.json(locationsArray);
});

module.exports = locations;
