const express = require('express');
const app = express();

const locations = require('./models/location.model');
const machines = require('./models/machine.model');
const plans = require('./models/plan.model');
const persons = require('./models/person.model');
const specialEvents = require('./models/special-event.model');

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/locations', (req, res) => {
  res.send(locations);
});

app.get('/machines', (req, res) => {
  res.send(machines);
});

app.get('/plans', (req, res) => {
  res.send(plans);
});

app.get('/persons', (req, res) => {
  res.send(persons);
});

app.get('/special-events', (req, res) => {
  res.send(specialEvents);
});

//404 Error Page
app.use('*', (req, res) => {
  res.status(404).send('404 Error! Please check the URL!');
});

module.exports = app;
