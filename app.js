const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

// location
const locationsController = require('./controllers/locations.controller')
app.use('/locations', locationsController)


// machines
const machinesController = require('./controllers/machines.controller')
app.use('/machines', machinesController)


// people
const personsController = require('./controllers/persons.controller')
app.use('/persons', personsController)


// plans
const plansController = require('./controllers/plans.controller')
app.use('/plans', plansController)


// special-events
const specialEventsController = require('./controllers/special-events.controller')
app.use('/special-events', specialEventsController)



module.exports = app;
