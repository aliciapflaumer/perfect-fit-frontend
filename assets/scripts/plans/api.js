'use strict'

const config = require('../config')
const store = require('../store')

const createPlan = (data) => {
  // console.log(data)
  // console.log('createPlan api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/plans/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
    .then((response) => {
      store.plan = response.plan
    })
}

const getPlans = () => {
  // console.log('getPlans api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/plans/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
    .then((response) => {
      store.plans = response.plans
      return store
    })
}

const deletePlan = (id) => {
  // console.log('deletePlan api function reached!')
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/plans/' + id,
    method: 'DELETE',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlan = (data) => {
  // console.log('updatePlan api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/plans/' + data.plan.id,
    method: 'PATCH',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createPlan,
  getPlans,
  deletePlan,
  updatePlan
}
