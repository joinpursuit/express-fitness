const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");
const peopleArray = require("../models/person.model.js");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});
locations.get("/people", (req, res) => {
  let peopleArrayWithLocations = locationsArray.map((location) => {
    let perpleArrayFilter = peopleArray.filter((person) => {
      return person.mainLocation === location.zip;
    });
    location.people = perpleArrayFilter;
    return location;
  });

  res.json(peopleArrayWithLocations);
});

module.exports = locations;
