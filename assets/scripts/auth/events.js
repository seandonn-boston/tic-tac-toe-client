'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const authApi = require(`./api`)
const authUi = require(`./ui`)

const onSignUp = function (event) {
  event.preventDefault()
  console.log(`This is onSignUp`)

  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
  console.log(`data is `, data)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log(`This is onSignIn`)

  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
  console.log(`data is `, data)
}

module.exports = {
  onSignUp,
  onSignIn
}
