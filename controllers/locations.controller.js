const express = require('express');
const router = express.Router();
const locationsObject = require('../models/location.model');

router.get('/', (request, response) => {
  response.send(locationsObject);
});
router.get('/locations', (request, response) => {
  response.send(locationsObject);
});
module.exports = router;
