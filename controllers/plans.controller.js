const express = require('express');
const router = express.Router();
const plansObject = require('../models/plan.model');

router.get('/', (request, response) => {
  response.send(plansObject);
});
router.get('/plans', (request, response) => {
  response.send(plansObject);
});

module.exports = router;
