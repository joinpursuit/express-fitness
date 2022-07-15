// DEPENDENCIES
const express = require("express"),
      locationsController     = require("./controllers/locations.controller.js"),
      machinesController      = require("./controllers/machines.controller.js"),
      personsController       = require("./controllers/persons.controller.js"),
      plansController         = require("./controllers/plans.controller.js"),
      specialEventsController = require("./controllers/special-events.controller.js");
      
// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/locations/people", (req, res) => {
  const locationsPeopleData = require("./models/location-people.model.js");

  res.json(locationsPeopleData);
});

// CONTROLLER-ROUTES
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

// EXPORT
module.exports = app;