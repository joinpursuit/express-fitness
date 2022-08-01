const express = require('express');
const app = express();

app.use(express.json());
const locationsRoute = require('./controllers/locations.controller');
const machinesRoute = require('./controllers/machines.controller');
const personRoute = require('./controllers/persons.controller');
const plansRoute = require('./controllers/plans.controller');
const specialEventRoute = require('./controllers/special-events.controller');
app.get('/', (request, response) => {
  response.send('Hello, world!');
});

app.use('/locations', locationsRoute);
app.use('/machines', machinesRoute);
app.use('/persons', personRoute);
app.use('/plans', plansRoute);
app.use('/special-events', specialEventRoute);

app.use('*', (request, response) => {
  response.status(404).send('Oops something went wrong.');
});
module.exports = app;
