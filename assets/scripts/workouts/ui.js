'use strict'

const showWorkoutTemplate = require('../templates/workout-list.handlebars')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const createWorkoutSuccess = (response) => {
  console.log('creatWorkoutSuccess ui reached!')
  resetForm($('#create-workout'))
  $('#message').text('You have created a workout!').fadeOut(8000)
  $('#get-all-workouts-container').show()
  // $('#update-workout').show()
}

const createWorkoutFailure = (response) => {
  $('#message').text('Creating a workout failed. Try again.').fadeOut(8000)
}

const getWorkoutsSuccess = (data) => {
  console.log('getWorkoutSuccess ui reached!')
  // Linter expects ===, but works with ==
  if (data.workouts == '') {
    $('#message').text('There seems to be no list of workouts. Try creating one.').fadeOut(8000)
    // $('#update-workout').show()
  } else {
    const showWorkoutList = showWorkoutTemplate({ workouts: data.workouts })
    $('#workout-listing').empty()
    $('#workout-listing').show()
    $('#workout-listing').append(showWorkoutList)
    $('#message').text('You now have your list of workouts! Let\'s get started!').fadeOut(8000)
  }
}

const getWorkoutsFailure = (response) => {
  $('#message').text('Getting your workouts failed. Try again.').fadeOut(8000)
}

module.exports = {
  resetForm,
  createWorkoutSuccess,
  createWorkoutFailure,
  getWorkoutsSuccess,
  getWorkoutsFailure
}
