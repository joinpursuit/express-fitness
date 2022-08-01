const express = require('express');
const router = express.Router();
const personObject = require('../models/person.model');

router.get('/', (request, response) => {
  response.send(personObject);
});
router.get('/persons', (request, response) => {
  response.send(personObject);
});

module.exports = router;
