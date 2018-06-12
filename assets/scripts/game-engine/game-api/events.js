// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

const gameApi = require(`./api`)
const gameUi = require(`./ui`)

// Create Game
const onCreateGame = function (event) {
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .then(onUpdateGame)
    .catch(gameUi.createGameError)
}

// Get Games
const onGetGames = function (event) {
  gameApi.getGames()
    .then(gameUi.getGamesSuccess)
    .catch(gameUi.getGamesError)
}

// Get One Game
const onGetOneGame = function (event) {
  gameApi.getOneGame()
    .then(gameUi.getOneGameSuccess)
    .catch(gameUi.getOneGameError)
}

// Update Game
const onUpdateGame = function (event) {
  gameApi.updateGame()
    .then(gameUi.updateGameSuccess)
    .catch(gameUi.updateGameError)
}

module.exports = {
  onCreateGame,
  onGetGames,
  onGetOneGame,
  onUpdateGame
}
