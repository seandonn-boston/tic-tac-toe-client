// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const store = require(`../store`)

store.gameOn = true
store.currentUserValue = `x`
let userOnDeck = `o`
let totalTurns = 0
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let currentGameArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let arrx = []
let arro = []
let winner

const gameEvents = require(`./game-api/events`)

const onPlay = function () {
  // Get store.currentSpaceValue as a single number by retrieving the space ID and "boiling it down" to the unique number at the end of the ID
  store.currentSpaceValue = Number(event.target.id.replace(`moveSpace`, ``))

  // Game API functions
  if (totalTurns === 0) {
    gameEvents.onCreateGame()
  } else if (winner === undefined) {
    gameEvents.onGetGames()
    gameEvents.onGetOneGame()
    gameEvents.onUpdateGame()
  } else if (winner !== undefined) {
    gameEvents.onUpdateGame()
  }

  // Check if the clicked space already contains an x or o. If the space does contain an x or o, tell the user it cannot be played. If the space does not contain x or o, play the users symbol in that selected space
  const data = $(event.target).html()
  if ((data === `x` || data === `o`) && store.gameOn === true) {
    $(`#emptyMessage`).html(``)
    const invalidTurn = (`<p>Sorry, this space is already taken, please choose another</p>`)
    $(`#emptyMessage`).append(invalidTurn)
  } else if (store.gameOn === true) {
    $(`#emptyMessage`).html(``)
    $(`#moveSpace` + store.currentSpaceValue).html(``)
    const symbol = store.currentUserValue
    $(`#moveSpace` + store.currentSpaceValue).append(symbol)
    const validTurn = (`<p>An ${symbol} has been played! Next up: ${userOnDeck}</p>`)
    $(`#emptyMessage`).append(validTurn)

    // ADD THE store.currentSpaceValue TO arrx OR arro ACCORDING TO WHICH USER PLAYED THIS TURN
    if (store.currentUserValue === `x`) {
      arrx.push(store.currentSpaceValue)
    } else if (store.currentUserValue === `o`) {
      arro.push(store.currentSpaceValue)
    }

    // ADD THE store.currentUserValue TO currentGameArr[store.currentSpaceValue]
    currentGameArr[store.currentSpaceValue] = store.currentUserValue

    // Nested totalTurn reevaluation
    totalTurns = totalTurns + 1

    // Nested winner check
    if (totalTurns >= 5) {
      for (let i = 0; i < winningCombos.length; i++) {
        const currentCombo = winningCombos[i]
        const a = currentCombo[0]
        const b = currentCombo[1]
        const c = currentCombo[2]
        if (arrx.includes(a) === true && arrx.includes(b) === true && arrx.includes(c) === true) {
          store.gameOn = false
          winner = `x`
          $(`#emptyMessage`).html(``)
          const winningMessage = (`<p>x wins!</p>`)
          $(`#emptyMessage`).append(winningMessage)
        } else if (arro.includes(a) === true && arro.includes(b) === true && arro.includes(c) === true) {
          store.gameOn = false
          winner = `o`
          $(`#emptyMessage`).html(``)
          const winningMessage = (`<p>o wins!</p>`)
          $(`#emptyMessage`).append(winningMessage)
        }
      }
    }

    // Nested tie check (to be combined with winner check)
    if (totalTurns === 9 && winner === undefined) {
      $(`#emptyMessage`).html(``)
      const tieMessage = (`<p>This game resulted in a tie!</p>`)
      $(`#emptyMessage`).append(tieMessage)
    }

    // Nested turn rotation, so not to accidentally skip turns if
    if (store.currentUserValue === `x`) {
      store.currentUserValue = `o`
      userOnDeck = `x`
    } else if (store.currentUserValue === 'o') {
      store.currentUserValue = `x`
      userOnDeck = `o`
    }
  }
}

const onReset = function () {
  arrx = []
  arro = []
  currentGameArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  winner = undefined
  store.currentUserValue = `x`
  totalTurns = 0
  store.gameOn = true
  $(`#moveSpace0`).html(``)
  $(`#moveSpace1`).html(``)
  $(`#moveSpace2`).html(``)
  $(`#moveSpace3`).html(``)
  $(`#moveSpace4`).html(``)
  $(`#moveSpace5`).html(``)
  $(`#moveSpace6`).html(``)
  $(`#moveSpace7`).html(``)
  $(`#moveSpace8`).html(``)
  $(`#emptyMessage`).html(``)
}

module.exports = {
  onPlay,
  onReset
}
