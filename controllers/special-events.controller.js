const express = require('express');
const specialEvents = express.Router() 

const specialData = require('../models/special-event.model.js')

specialEvents .get('/',(request, response)=>{
  response.json(specialData)
})

module.exports = specialEvents