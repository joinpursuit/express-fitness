// DEPENDENCIES
const express = require("express");
const locationsController     = require("./controllers/locations.controller.js");
const machinesController      = require("./controllers/machines.controller.js");
const personsController       = require("./controllers/persons.controller.js");
const plansController         = require("./controllers/plans.controller.js");
const special_eventController = require("./controllers/special-events.controller.js");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", special_eventController);

// EXPORT
module.exports = app;