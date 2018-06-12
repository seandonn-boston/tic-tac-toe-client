// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

const config = require(`../../config`)
const store = require(`../../store`)

// Create Game
const createGame = function () {
  return $.ajax({
    method: `POST`,
    url: config.apiUrl + `/games`,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

// Get Games
const getGames = function () {
  return $.ajax({
    method: `GET`,
    url: config.apiUrl + `/games`,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

// Get One Game
const getOneGame = function () {
  return $.ajax({
    method: `GET`,
    url: config.apiUrl + `/games/` + store.game.id,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

// Update Game
const updateGame = function () {
  console.log(`currentSpaceValue is`, store.currentSpaceValue)
  console.log(`currentUserValue is`, store.currentUserValue)
  console.log(`over is`, !store.gameOn)
  return $.ajax({
    method: `PATCH`,
    url: config.apiUrl + `/games/` + store.game.id,
    headers: {
      Authorization: `Token token=` + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.currentSpaceValue,
          value: store.currentUserValue
        },
        over: store.gameOn
      }
    }
  })
}

module.exports = {
  createGame,
  getGames,
  getOneGame,
  updateGame
}
