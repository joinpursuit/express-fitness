const express = require('express');
const router = express.Router();
const specialEventObject = require('../models/special-event.model');

router.get('/', (request, response) => {
  response.send(specialEventObject);
});
router.get('/special-events', (request, response) => {
  response.send(specialEventObject);
});

module.exports = router;
