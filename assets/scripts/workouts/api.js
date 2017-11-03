'use strict'

const config = require('../config')
const store = require('../store')

const createWorkout = (data) => {
  // console.log(data)
  // console.log('createWorkout api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/workouts/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
    .then((response) => {
      store.workout = response.workout
    })
}

const getWorkouts = () => {
  // console.log('getWorkouts api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/workouts/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
    .then((response) => {
      store.workouts = response.workouts
      return store
    })
}

const deleteWorkout = (id) => {
  // console.log('deleteWorkout api function reached!')
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/workouts/' + id,
    method: 'DELETE',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWorkout = (data) => {
  // console.log('updateWorkout api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/workouts/' + data.workout.id,
    method: 'PATCH',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
}
