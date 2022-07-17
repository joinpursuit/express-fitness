const express = require('express')
const people = express.Router()

const peopleData = require('../models/person.model.js')

people.get('/', (req, res) => {
  res.json(peopleData)
})

module.exports = people