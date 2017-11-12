'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require(`../../../lib/get-form-fields`)

const onCreatePlan = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  // console.log('onCreatePlan events function reached!')
  api.createPlan(data)
    .then(ui.createPlanSuccess)
    .catch(ui.createPlanFailure)
}

const onGetAllPlans = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // console.log('onGetAllPlans events function reached!')
  api.getPlans()
    .then(ui.getPlansSuccess)
    .catch(ui.getPlansFailure)
}

const onDeletePlan = (event) => {
  event.preventDefault()
  // console.log('onDeletePlan events function reached!')
  const id = getFormFields(event.target)
  api.deletePlan(id.plan.id)
    .then(ui.onDeletePlanSuccess)
    .catch(ui.onDeletePlanFailure)
}

const onUpdatePlan = (event) => {
  event.preventDefault()
  // console.log('onUpdatePlan events function re reached!')
  const data = getFormFields(event.target)

  api.updatePlan(data)
    .then(ui.onUpdatePlanSuccess)
    .catch(ui.onUpdatePlanFailure)
}

const addHandlers = () => {
  $('#create-plan').on('submit', onCreatePlan)
  $('#get-plans').on('submit', onGetAllPlans)
  $('#delete-plan').on('submit', onDeletePlan)
  $('#update-plan').on('submit', onUpdatePlan)
}

module.exports = {
  addHandlers
}
