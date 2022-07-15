// DEPENDENCIES
const express = require("express"),
      locationsController       = require("./controllers/locations.controller.js"),
      machinesController        = require("./controllers/machines.controller.js"),
      personsController         = require("./controllers/persons.controller.js"),
      plansController           = require("./controllers/plans.controller.js"),
      specialEventsController   = require("./controllers/special-events.controller.js"),
      locationsPeopleController = require("./controllers/locations-people.controller.js");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/locations/people", (req, res) => {
  res.send(app.use("/locations-people", locationsPeopleController));
});

// CONTROLLER-ROUTES
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

// EXPORT
module.exports = app;