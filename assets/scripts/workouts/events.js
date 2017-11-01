'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require(`../../../lib/get-form-fields`)

const onCreateWorkout = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onCreateWorkout events function reached!')
  api.createWorkout(data)
    .then(ui.createWorkoutSuccess)
    .catch(ui.createWorkoutFailure)
}

const onGetAllWorkouts = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // console.log('onGetAllWorkouts events function reached!')
  api.getWorkouts()
    .then(ui.getWorkoutsSuccess)
    .catch(ui.getWorkoutsFailure)
}

const addHandlers = () => {
  $('#create-workout').on('submit', onCreateWorkout)
  $('#get-workouts').on('submit', onGetAllWorkouts)
  // $('#delete-workout').on('submit', onDeleteWorkout)
  // $('#update-workout').on('submit', onUpdateWorkout)
}

module.exports = {
  addHandlers
}
