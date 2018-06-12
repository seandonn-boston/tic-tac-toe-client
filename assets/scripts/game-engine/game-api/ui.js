// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

const store = require(`../../store`)

// Create Game Success
const createGameSuccess = function (response) {
  store.game = response.game
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>Create Game success message!</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}
// Create Game Error
const createGameError = function (error) {
  console.log(`Error in Create Game is `, error)
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>ERROR: Create Game error message.</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}

// Organizational gap

// Get Gamessss Success
const getGamesSuccess = function () {
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>Get Games success message!</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}
// Get Gamessss Error
const getGamesError = function (error) {
  console.log(`Error in Get Games is `, error)
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>ERROR: Get Games error message.</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}

// Organizational gap

// Get One Game Success
const getOneGameSuccess = function () {
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>Get Game success message!</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}
// Get One Game Error
const getOneGameError = function (error) {
  console.log(`Error in Get One Game is `, error)
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>ERROR: Get Game error message.</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}

// Organizational gap

// Update Game Success
const updateGameSuccess = function () {
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>Update Game success message!</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}
// Update Game Error
const updateGameError = function (error) {
  console.log(`Error in Update Game is `, error)
  $(`#gameStatusEmptyDiv`).html(``)
  const message = (`<p>ERROR: Update Game error message</p>`)
  $(`#gameStatusEmptyDiv`).append(message)
}

module.exports = {
  createGameSuccess,
  createGameError,
  getGamesSuccess,
  getGamesError,
  getOneGameSuccess,
  getOneGameError,
  updateGameSuccess,
  updateGameError
}
