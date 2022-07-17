
const express = require('express')
const app = express()

const locationsControllers = require('./controllers/locations.controller.js')
const machinesControllers = require('./controllers/machines.controller.js')
const personControllers = require("./controllers/persons.controller.js")
const specialEventsControllers = require('./controllers/special-events.controller.js')
const plansControllers = require('./controllers/plans.controller.js')

app.get('/',(request, response)=>{
  response.send(`Hello, world!`)
});

app.use('/locations', locationsControllers);
app.use('/machines', machinesControllers);
app.use('/persons', personControllers);
app.use('/special-events', specialEventsControllers);
app.use('/plans', plansControllers);



module.exports = app