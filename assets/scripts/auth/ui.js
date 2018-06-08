'use strict'

const store = require(`../store`)

// Organizational gap

// Sign Up success message is working but needs and html display still
const signUpSuccess = function (response) {
  console.log(`response is `, response)
}
// Sign Up error message is working but needs and html display still
const signUpError = function (error) {
  console.log(`Error in sign up is `, error)
}

// Organizational gap

// Sign In success message is working but needs and html display still
const signInSuccess = function (response) {
  console.log(`response is `, response)
  store.user = response.user
  console.log(`store is `, store)
}
// Sign In error message is working but needs and html display still
const signInError = function (error) {
  console.log(`Error in sign in is `, error)
}

// Organizational gap

// Change Password success message is displaying properly
const changePasswordSuccess = function () {
  $(`#changePasswordEmptyDiv`).html(``)
  const message = (`<p>You successfully changed your password.</p>`)
  $(`#changePasswordEmptyDiv`).append(message)
}
// Change Password error message is displaying properly
const changePasswordError = function (error) {
  console.log(`Error in changePassword is `, error)
  $(`#changePasswordEmptyDiv`).html(``)
  const message = (`<p>You were unable to change your password. Double check your inputs.</p>`)
  $(`#changePasswordEmptyDiv`).append(message)
}

// Organizational gap

// Sign Out success message is working but needs and html display still
const signOutSuccess = function () {
  $(`#signOutEmptyDiv`).html(``)
  const message = (`<p>You successfully signed out.</p>`)
  $(`#signOutEmptyDiv`).append(message)
  delete store.user
}
// Sign Out error message is working but needs and html display still
const signOutError = function (error) {
  console.log(`Error in sign out is `, error)
  $(`#signOutEmptyDiv`).html(``)
  const message = (`<p>You successfully signed out.</p>`)
  $(`#signOutEmptyDiv`).append(message)
}

// Organizational gap

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
}
