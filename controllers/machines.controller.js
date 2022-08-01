const express = require('express');
const router = express.Router();
const machinesObject = require('../models/machine.model');

router.get('/', (request, response) => {
  response.send(machinesObject);
});
router.get('/machines', (request, response) => {
  response.send(machinesObject);
});

module.exports = router;
