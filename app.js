const express = require("express");
const app = express();
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const personsController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");
const locationsPeopleController = require("./controllers/locations-people.controller.js");

app.get("/", (request, response) => {
	response.send("Hello, world!");
});
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);
app.use("/locations/people", locationsPeopleController);
app.get("*", (request, response) => {
	response.status(404).send("Sorry, no page found!");
});
module.exports = app;
