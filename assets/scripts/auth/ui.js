'use strict'

const store = require(`../store`)

const signUpSuccess = function (response) {
  console.log(`response is `, response)
}

const signUpError = function (error) {
  console.log(`Error in sign up is `, error)
}

const signInSuccess = function (response) {
  console.log(`response is `, response)
  store.user = response.user
  console.log(`store is `, store)
}

const signInError = function (error) {
  console.log(`Error in sign in is `, error)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError
}
