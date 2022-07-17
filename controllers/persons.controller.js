const express = require("express");
const person = express.Router();
// Controller dictates the logic of the router

const personData = require("../models/person.model.js");

// in order to get to this line the path is already "/bookmarks"
person.get("/", (req, res) => {
    res.json(personData)
});

module.exports = person;