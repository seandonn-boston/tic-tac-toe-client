'use strict'

const config = require(`../config`)
const store = require(`../store`)

// Sign Up is operating proerly
const signUp = function (data) {
  return $.ajax({
    method: `POST`,
    url: config.apiUrl + `/sign-up`,
    data: data
  })
}

// Sign In is operating properly
const signIn = function (data) {
  return $.ajax({
    method: `POST`,
    url: config.apiUrl + `/sign-in`,
    data: data
  })
}

// Change Paswword is NOT NOT NOT operating properly
const changePassword = function (data) {
  console.log(`store is `, store)
  console.log(`token is `, store.user.token)
  return $.ajax({
    method: `PATCH`,
    url: `https://tic-tac-toe-wdi.herokuapp.com/change-password`,
    data: data,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword
}
