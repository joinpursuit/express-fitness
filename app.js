// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// CONTROLLERS
const locationsController = require("./controllers/locations.controller.js");
const equipmentController = require("./controllers/machines.controller.js");
const peopleController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/machines", equipmentController);
app.use("/persons", peopleController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = app;
