'use strict'

const showWorkoutTemplate = require('../templates/workout-list.handlebars')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const createWorkoutSuccess = (response) => {
  // console.log('creatWorkoutSuccess ui reached!')
  resetForm($('#create-workout'))
  $('#message').text('You have created a workout!').show().fadeOut(8000)
  $('#get-all-workouts-container').show()
  $('#update-workout').show()
}

const createWorkoutFailure = (response) => {
  $('#message').text('Creating a workout failed. Try again.').show().fadeOut(8000)
}

const getWorkoutsSuccess = (data) => {
  // console.log('getWorkoutSuccess ui reached!')
  // Linter expects ===, but works with ==
  if (data.workouts == '') {
    $('#message').text('There seems to be no list of workouts. Try creating one.').show().fadeOut(8000)
    // $('#update-workout').show()
  } else {
    const showWorkoutList = showWorkoutTemplate({ workouts: data.workouts })
    // $('#get-all-workouts-container').show()
    $('#workout-listing').empty()
    $('#workout-listing').show()
    $('#workout-listing').append(showWorkoutList)
    $('#message').text('You now have your list of workouts! Let\'s get started!').show().fadeOut(8000)
  }
}

const getWorkoutsFailure = (response) => {
  $('#message').text('Getting your workouts failed. Try again.').show().fadeOut(8000)
}

const onDeleteWorkoutSuccess = (id) => {
  // console.log('onDeleteWorkoutSuccess ui reached!').show().fadeOut(8000)
  resetForm($('#delete-workout'))
  $('#message').text('You have deleted a workout!').show().fadeOut(8000)
  $('#workout-listing').empty(id)
}

const onDeleteWorkoutFailure = (response) => {
  // console.log('onDeleteWorkoutFailure ui reached!')
  $('#message').text('Unable to delete a workout! Did you type the ID number correctly? Try again.').show().fadeOut(8000)
}

const onUpdateWorkoutSuccess = (id) => {
  // console.log('onUpdateWorkoutSuccess ui reached!')
  resetForm($('#update-workout'))
  $('#message').text('You have have updated your workout!').show().fadeOut(8000)
  $('workout-listing').empty(id)
}

const onUpdateWorkoutFailure = (id) => {
  // console.log('onUpdateWorkoutFailure ui reached!')
  $('#message').text('Unable to update your workout. Try again.').show().fadeOut(8000)
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
