const express = require('express')

const app = express()

const locationController = require('../express-fitness/controllers/locations.controller')

const personController = require('../express-fitness/controllers/persons.controller')

const planController = require('../express-fitness/controllers/plans.controller')

const machineController = require('../express-fitness/controllers/machines.controller')

const specialEventsController = require('../express-fitness/controllers/special-events.controller')


app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use('/locations', locationController)

app.use('/persons', personController)

app.use('/plans',  planController)

app.use('/machines', machineController)

app.use('/special-events', specialEventsController)

app.use('*', (req, res) => {
  res.status(404).send('Oops! Nothing to see here')
})

module.exports = app