const express = require('express')
const locations = express.Router()
const locationArray = require('../models/location.model')


locations.get('/', (req, res) => {
    res.json(locationArray)
})

module.exports = locations