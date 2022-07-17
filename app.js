/** @format */

// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// ROUTES
app.get('/', (req, res) => {
	res.send('Hello, World!');
});

const locationsController = require('./controllers/locationsController.js');
app.use('/locations', locationsController);

const personsController = require('./controllers/personsController.js');
app.use('/persons', personsController);

const plansController = require('./controllers/plansController.js');
app.use('/plans', plansController);

const machinesController = require('./controllers/machinesController.js');
app.use('/machines', machinesController);

const specialEventsController = require('./controllers/special-eventsController.js');
app.use('/special-events', specialEventsController);

// 404 PAGE
app.get('*', (req, res) => {
	res.status(404).json({ error: 'Sorry, no page found!' });
});

// EXPORT
module.exports = app;
