'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const authApi = require(`./api`)
const authUi = require(`./ui`)

// Sign Up is operating properly
const onSignUp = function (event) {
  event.preventDefault()
  console.log(`This is onSignUp. This is working`)
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
  console.log(`data is `, data)
}

// Sign In is operating properly
const onSignIn = function (event) {
  event.preventDefault()
  console.log(`This is onSignIn`)

  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
  console.log(`data is `, data)
}

// Change Password is operating properly
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
  console.log(`this is the data of onChangePassword:`, data)
}

// Change Sign Out is operating properly
const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
