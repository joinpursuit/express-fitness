const express = require('express');
const locations = express.Router();

const locationsData = require("../models/location.model.js")
locations.get('/',(request, response)=>{
  response.json(locationsData)
});

module.exports = locations