
const express = require('express')
const person = express.Router()

const personData = require('../models/person.model.js')

person.get('/',(request, response)=>{
  response.json(personData)
})

module.exports = person
