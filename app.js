const express = require('express')

const app = express();


const locationController = require('./controllers/locations.controller')
const machineController = require('./controllers/machines.controller')
const personController = require('./controllers/persons.controller')
const planController = require('./controllers/plans.controller')
const specialEventController = require('./controllers/special-events.controller')

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use('/locations', locationController)
app.use('/machines', machineController)
app.use('/persons', personController)
app.use('/plans', planController)
app.use('/special-events', specialEventController)


app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;