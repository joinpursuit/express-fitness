const express = require('express');
const app = express();
const locations = require('./models/location.model.js');
const machines = require('./models/machine.model.js');
const persons = require('./models/person.model.js');
const plans = require('./models/plan.model.js');
const e = require('./models/special-event.model.js');
app.get('/', (request, response) => {
  response.send('Hello, world!');
});

app.get('/locations', (request, response) => {
  response.send(locations);
});
app.get('/machines', (request, response) => {
  response.send(machines);
});
app.get('/persons', (request, response) => {
  response.send(persons);
});
app.get('/plans', (request, response) => {
  response.send(plans);
});
app.get('/special-events', (request, response) => {
  response.send(e);
});

app.use('*', (request, response) => {
  response.status(404).send('Oops something went wrong.');
});
module.exports = app;
