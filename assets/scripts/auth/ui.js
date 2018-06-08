'use strict'

const signUpSuccess = function (response) {
  console.log(`response is `, response)
}

const signUpError = function (error) {
  console.log(`Error in sign up is `, error)
}

module.exports = {
  signUpSuccess,
  signUpError
}
