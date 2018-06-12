// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

const store = require(`../../store`)

// Create Game Success
const createGameSuccess = function (response) {
  store.game = response.game
  $(`#createGameMsg`).html(``)
  const message = (`<p>Create Game success message!</p>`)
  $(`#createGameMsg`).append(message)
}
// Create Game Error
const createGameError = function (error) {
  console.log(`Error in Create Game is `, error)
  $(`#createGameMsg`).html(``)
  const message = (`<p>ERROR: Create Game error message.</p>`)
  $(`#createGameMsg`).append(message)
}

// Organizational gap

// Get Gamessss Success
const getGamesSuccess = function (getGamesResponse) {
  $(`#getGamesMsg`).html(``)
  const message = (`<p>Get Games success message!</p>
  <p>According to Get Games, you've played ` + getGamesResponse.games.length + ` games</p>`)
  $(`#getGamesMsg`).append(message)
}
// Get Gamessss Error
const getGamesError = function (error) {
  console.log(`Error in Get Games is `, error)
  $(`#getGamesMsg`).html(``)
  const message = (`<p>ERROR: Get Games error message.</p>`)
  $(`#getGamesMsg`).append(message)
}

// Organizational gap

// Get One Game Success
const getOneGameSuccess = function () {
  $(`#getThisGameMsg`).html(``)
  const message = (`<p>Get Game success message!</p>`)
  $(`#getThisGameMsg`).append(message)
}
// Get One Game Error
const getOneGameError = function (error) {
  console.log(`Error in Get One Game is `, error)
  $(`#getThisGameMsg`).html(``)
  const message = (`<p>ERROR: Get Game error message.</p>`)
  $(`#getThisGameMsg`).append(message)
}

// Organizational gap

// Update Game Success
const updateGameSuccess = function () {
  $(`#updateGameMsg`).html(``)
  const message = (`<p>Update Game success message!</p>`)
  $(`#updateGameMsg`).append(message)
}
// Update Game Error
const updateGameError = function (error) {
  console.log(`Error in Update Game is `, error)
  $(`#updateGameMsg`).html(``)
  const message = (`<p>ERROR: Update Game error message</p>`)
  $(`#updateGameMsg`).append(message)
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
