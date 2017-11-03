'use strict'

const store = require('../store')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const signUpSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed up')
  $('#message').text('Successfully signed up').show().fadeOut(8000)
  $('#sign-up').show()
  resetForm($('#sign-up'))
  // console.log('Is the form empty now?')
}

const signUpFailure = function (data) {
  // console.log(data)
  $('#message').text('Error on sign up. You may already be signed in.').show().fadeOut(8000)
  $('#sign-up').show()
  resetForm($('#sign-up'))
}

const signInSuccess = function (data) {
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-workout').show()
  $('#get-workouts').show()
  $('#update-workout').show()
  $('#delete-workout').show()
  $('#get-all-workouts-container').show()
  // console.log(data)
  // console.log('Arrived at Sign in success!')
  $('#message').text('Successfully signed in').fadeOut(8000).show()
  $('#update-workout').show()
  store.user = data.user
  // console.log('store.user console log data is ' + data.user)
  resetForm($('#sign-in'))
  resetForm($('#update-workout'))
}

const signInFailure = function (data) {
  // console.log(data)
  $('#message').text('Error on sign in. Did you enter your email and password correct?').show().fadeOut(8000)
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  // $('#get-books').hide()
  // $('#create-book').hide()
  // $('#update-book').hide()
  // $('#delete-book').hide()
  resetForm($('#sign-in'))
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('#message').text('Successfully changed password').show().fadeOut(8000)
  resetForm($('#change-password'))
}

const changePasswordFailure = function (data) {
  // console.log(error)
  $('#message').text('Error on change password').show().fadeOut(8000)
  resetForm($('#sign-up'))
}

const signOutSuccess = function () {
  // console.log('Successfully signed out')
  $('#message').text('Successfully signed out').show().fadeOut(8000)
  store.user = null // empty store
  $('#create-workout').hide()
  $('#get-workouts').hide()
  $('#update-workout').hide()
  $('#delete-workout').hide()
  $('#get-all-workouts-container').hide()
}

const signOutFailure = function (data) {
  // console.log(data)
  $('#message').text('Error on sign out').show().fadeOut(8000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
