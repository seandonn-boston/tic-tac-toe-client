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
  const changePasswordSuccessHTML = (`<p>You've changed your password!</p>`)
  $(`#changePasswordEmptyDiv`).append(changePasswordSuccessHTML)
}
// Change Password error message is displaying properly
const changePasswordError = function () {
  $(`#changePasswordEmptyDiv`).html(``)
  const changePasswordErrorHTML = (`<p>You were unable to change your password!</p>`)
  $(`#changePasswordEmptyDiv`).append(changePasswordErrorHTML)
}

// Organizational gap

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError
}
