// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

const config = require(`../../config`)
const store = require(`../../store`)

// Working
const createGame = function () {
  console.log(`api store is `, store)
  console.log(`api token is `, store.user.token)
  return $.ajax({
    method: `POST`,
    url: config.apiUrl + `/games`,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

// Working
const getGames = function () {
  console.log(`api store is `, store)
  console.log(`api token is `, store.user.token)
  return $.ajax({
    method: `GET`,
    url: config.apiUrl + `/games`,
    headers: {
      Authorization: `Token token=` + store.user.token
    }
  })
}

module.exports = {
  createGame,
  getGames
}
