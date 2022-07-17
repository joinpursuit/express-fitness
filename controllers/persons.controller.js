const express = require("express");
const people = express.Router();
const personData = require ("../models/person.model.js")
people.get ("/", (req,res)=> {
    res.json(personData)
})
module.exports = people