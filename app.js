const express = require('express');

//create an instance of the express
const app = express();

// CONTROLLERS
const locationsController = require("./controllers/locations.controller.js");
const equipmentController = require("./controllers/machines.controller.js");
const peopleController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");

//basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.use("/locations", locationsController);
app.use("/machines", equipmentController);
app.use("/persons", peopleController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

app.get('*', (req, res) => {
  res.status(404).send('Sorry, no page found!');
});

//so other files can access
module.exports = app;
