'use strict'

const showWorkoutTemplate = require('../templates/workout-list.handlebars')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const createWorkoutSuccess = (response, id) => {
  // console.log('creatWorkoutSuccess ui reached!')
  resetForm($('#create-workout'))
  $('#create-workout-message').text('You have created an exercise!').show().fadeOut(8000)
  $('#get-all-workouts-container').show()
  $('#update-workout').show()
  $('#workout-listing').empty(id)
}

const createWorkoutFailure = (response) => {
  $('#workout-message').text('Creating an exercise failed. Did you fill in all fields completely?').show().fadeOut(8000)
}

const getWorkoutsSuccess = (data) => {
  // console.log('getWorkoutSuccess ui reached!')
  // Linter expects ===, but works with ==
  if (data.workouts == '') {
    $('#get-workout-message').text('There seems to be no list of exercises. Try creating one.').show().fadeOut(8000)
    // $('#update-workout').show()
  } else {
    const showWorkoutList = showWorkoutTemplate({ workouts: data.workouts })
    // $('#get-all-workouts-container').show()
    $('#workout-listing').empty()
    $('#workout-listing').show()
    $('#workout-listing').append(showWorkoutList)
    $('#get-workout-message').text('You now have your list of exercises! Let\'s get started!').show().fadeOut(8000)
  }
}

const getWorkoutsFailure = (response) => {
  $('#workout-message').text('Getting your exercises failed. Did you create a workout yet?').show().fadeOut(8000)
}

const onDeleteWorkoutSuccess = (id) => {
  // console.log('onDeleteWorkoutSuccess ui reached!').show().fadeOut(8000)
  resetForm($('#delete-workout'))
  $('#workout-message').text('You have deleted an exercise!').show().fadeOut(8000)
  $('#workout-listing').empty(id)
}

const onDeleteWorkoutFailure = (response) => {
  // console.log('onDeleteWorkoutFailure ui reached!')
  $('#workout-message').text('Unable to delete an exercise! Did you type the ID number correctly? Try again.').show().fadeOut(8000)
}

const onUpdateWorkoutSuccess = (id) => {
  // console.log('onUpdateWorkoutSuccess ui reached!')
  resetForm($('#update-workout'))
  $('#workout-message').text('You have have updated an exercise!').show().fadeOut(8000)
  $('#workout-listing').empty(id)
}

const onUpdateWorkoutFailure = (id) => {
  // console.log('onUpdateWorkoutFailure ui reached!')
  $('#workout-message').text('Unable to update an exercise. Is the exercise ID correct?').show().fadeOut(8000)
}

module.exports = {
  resetForm,
  createWorkoutSuccess,
  createWorkoutFailure,
  getWorkoutsSuccess,
  getWorkoutsFailure,
  onDeleteWorkoutSuccess,
  onDeleteWorkoutFailure,
  onUpdateWorkoutSuccess,
  onUpdateWorkoutFailure
}
