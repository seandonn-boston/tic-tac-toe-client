// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

const store = require(`../store`)

// Organizational gap

// Sign Up success message is working but needs and html display still
const signUpSuccess = function (response) {
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
  const message = (`<p>Welcome new user and thank you for joining! Please sign in with your new credentials to continue to the game! (please)</p>`)
  $(`#signUpEmptyDiv`).append(message)
  document.getElementById(`signUpForm`).reset()
}
// Sign Up error message is working but needs and html display still
const signUpError = function (error) {
  console.log(`Error in sign up is `, error)
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
  const message = (`<p>ERROR: We were unable to sign you up at this time. It is possible that your email has already been registered, please try again with a different email.</p>`)
  $(`#signUpEmptyDiv`).append(message)
}

// Organizational gap

// Sign In success message is working but needs and html display still
const signInSuccess = function (response) {
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
  store.user = response.user
  const message = (`<p>Welcome back!</p>`)
  $(`#signInEmptyDiv`).append(message)
  document.getElementById(`signInForm`).reset()
  const gameBoardSection = document.getElementById(`gb-section`)
  gameBoardSection.classList.remove(`hidden`)
}
// Sign In error message is working but needs and html display still
const signInError = function (error) {
  console.log(`Error in sign in is `, error)
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
  const message = (`<p>ERROR: We are unable to sign you in at this time. Please review your login credentials and try again.</p>`)
  $(`#signInEmptyDiv`).append(message)
}

// Organizational gap

// Change Password success message is displaying properly
const changePasswordSuccess = function () {
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
  const message = (`<p>You successfully changed your password.</p>`)
  $(`#changePasswordEmptyDiv`).append(message)
  document.getElementById(`changePasswordForm`).reset()
}
// Change Password error message is displaying properly
const changePasswordError = function (error) {
  console.log(`Error in changePassword is `, error)
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
  const message = (`<p>You were unable to change your password. Double check your inputs.</p>`)
  $(`#changePasswordEmptyDiv`).append(message)
}

// Organizational gap

// Sign Out success message is working but needs and html display still
const signOutSuccess = function () {
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
  $(`#signOutEmptyDiv`).html(``)
  const message = (`<p>You successfully signed out.</p>`)
  $(`#signOutEmptyDiv`).append(message)
  const gameBoardSection = document.getElementById(`gb-section`)
  gameBoardSection.classList.add(`hidden`)
  delete store.user
}
// Sign Out error message is working but needs and html display still
const signOutError = function (error) {
  console.log(`Error in sign out is `, error)
  $(`#signUpEmptyDiv`).html(``)
  $(`#signInEmptyDiv`).html(``)
  $(`#changePasswordEmptyDiv`).html(``)
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
