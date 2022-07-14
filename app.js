//dependencies

const express = require("express");

//config

const app = express();
const locationsController = require("../express-fitness/controllers/locations.controller");
const peopleController = require("../express-fitness/controllers/persons.controller");
const plansController = require("../express-fitness/controllers/plans.controller");
const machinesController = require("../express-fitness/controllers/machines.controller");
const eventsControllers = require("../express-fitness/controllers/special-events.controller");
//routes

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);

app.use("/persons", peopleController);

app.use("/plans", plansController);

app.use("/machines", machinesController);

app.use("/special-events", eventsControllers);

//export
module.exports = app;
