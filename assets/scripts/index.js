'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const workoutsEvents = require('./workouts/events')

$(() => {
  setAPIOrigin(location, config)

  $('#sign-up').show()
  $('#sign-in').show()

  authEvents.addHandlers()
  workoutsEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
