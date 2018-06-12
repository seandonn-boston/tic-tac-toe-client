// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

const store = require(`../../store`)

// Organizational gap

// Working
const createGameSuccess = function () {
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>A new game has been created in the API!</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}
// Working
const createGameError = function (error) {
  console.log(`Error in sign up is `, error)
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>ERROR: We were unable to create a new game at this time.</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}

// Organizational gap

// Working
const getGamesSuccess = function () {
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>A get game success message!</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}
// Working
const getGamesError = function (error) {
  console.log(`Error in sign up is `, error)
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>ERROR: get game error message</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}

// Organizational gap

// Working
const getOneGameSuccess = function () {
  console.log(`d`)
  console.log(`ui store is `, store)
  console.log(`ui token is `, store.user.token)

  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>A get ONE game success message!</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}

module.exports = {
  createGameSuccess,
  createGameError,
  getGamesSuccess,
  getGamesError
}
