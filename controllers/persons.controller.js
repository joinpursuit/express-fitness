const express = require("express");
const persons = express.Router();
const personData = require ("../models/person.model.js")
persons.get ("/", (req,res)=> {
    res.json(personData)
})
module.exports = persons