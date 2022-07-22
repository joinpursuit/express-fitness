const express = require("express");
const app = express();
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller")
const peopleController = require("./controllers/persons.controller")
const plansController = require("./controllers/plans.controller")
const specialEventController = require("./controllers/special-events.controller")

app.get("/", (req, res) => {
    res.send("Hello, world!")
});

app.use("/locations", locationsController);
app.use("/machines", machinesController );
app.use("/persons", peopleController );
app.use("/plans", plansController );
app.use("/special-events", specialEventController)
// app.get ("*", function (req, res) {
//     res.send("Sorry, no page found!")
// })




module.exports = app;