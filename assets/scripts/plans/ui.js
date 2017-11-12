'use strict'

const showPlanTemplate = require('../templates/plan-list.handlebars')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const createPlanSuccess = (response, id) => {
  // console.log('creatPlanSuccess ui reached!')
  resetForm($('#create-plan'))
  $('#plan-message').text('You have created a plan!').show().fadeOut(8000)
  $('#get-all-plans-container').show()
  $('#update-plan').show()
  $('#plan-listing').empty(id)
}

const createPlanFailure = (response) => {
  $('#plan-message').text('Creating a plan failed. Did you fill in all fields completely?').show().fadeOut(8000)
}

const getPlansSuccess = (data) => {
  // console.log('getPlanSuccess ui reached!')
  // Linter expects ===, but works with ==
  if (data.plans == '') {
    $('#message').text('There seems to be no list of plans. Try creating one.').show().fadeOut(8000)
    // $('#update-plan').show()
  } else {
    const showPlanList = showPlanTemplate({ plans: data.plans })
    // $('#get-all-plans-container').show()
    $('#plan-listing').empty()
    $('#plan-listing').show()
    $('#plan-listing').append(showPlanList)
    $('#message').text('You now have your list of plans! Let\'s get started!').show().fadeOut(8000)
  }
}

const getPlansFailure = (response) => {
  $('#plan-message').text('Getting your plans failed. Did you create a plan yet?').show().fadeOut(8000)
}

const onDeletePlanSuccess = (id) => {
  // console.log('onDeletePlanSuccess ui reached!').show().fadeOut(8000)
  resetForm($('#delete-plan'))
  $('#plan-message').text('You have deleted a plan!').show().fadeOut(8000)
  $('#plan-listing').empty(id)
}

const onDeletePlanFailure = (response) => {
  // console.log('onDeletePlanFailure ui reached!')
  $('#plan-message').text('Unable to delete a plan! Did you type the ID number correctly? Try again.').show().fadeOut(8000)
}

const onUpdatePlanSuccess = (id) => {
  // console.log('onUpdatePlanSuccess ui reached!')
  resetForm($('#update-plan'))
  $('#plan-message').text('You have have updated your plan!').show().fadeOut(8000)
  $('#plan-listing').empty(id)
}

const onUpdatePlanFailure = (id) => {
  // console.log('onUpdatePlanFailure ui reached!')
  $('#plan-message').text('Unable to update a plan. Is the exercise ID correct?').show().fadeOut(8000)
}

module.exports = {
  resetForm,
  createPlanSuccess,
  createPlanFailure,
  getPlansSuccess,
  getPlansFailure,
  onDeletePlanSuccess,
  onDeletePlanFailure,
  onUpdatePlanSuccess,
  onUpdatePlanFailure
}
