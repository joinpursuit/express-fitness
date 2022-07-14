const express = require('express')
const persons = express.Router()
const personArr = require('../models/person.model.js')

persons.get('/', (req, res) => {
   res.send(personArr) 
});


module.exports = persons;