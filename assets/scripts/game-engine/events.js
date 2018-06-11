// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let arrEX = []
let arrOH = []
let winner
let currentUserValue = `EX`
let totalTurns = 0
let gameOn = true

const onPlay = function () {
  // Get currentSpaceValue as a single number by retrieving the space ID and "boiling it down" to the unique number at the end of the ID
  const currentSpaceValue = Number(event.target.id.replace(`moveSpace`, ``))

  // Check if the clicked space already contains an EX or OH. If the space does contain an EX or OH, tell the user it cannot be played. If the space does not contain EX or OH, play the users symbol in that selected space
  // console.log(`The currentUserValue is `, currentUserValue)
  const data = $(event.target).html()
  if (data === `EX` || data === `OH`) {
    $(`#emptyMessage`).html(``)
    const invalidTurn = (`<p>Sorry, this space is already taken, please choose another</p>`)
    $(`#emptyMessage`).append(invalidTurn)
  } else if (gameOn === true) {
    $(`#emptyMessage`).html(``)
    $(`#moveSpace` + currentSpaceValue).html(``)
    const symbol = currentUserValue
    $(`#moveSpace` + currentSpaceValue).append(symbol)
    const validTurn = (`<p>${symbol} has been played!</p>`)
    $(`#emptyMessage`).append(validTurn)

    // ADD THE currentSpaceValue TO arrEX OR arrOH ACCORDING TO WHICH USER PLAYED THIS TURN
    if (currentUserValue === `EX`) {
      arrEX.push(currentSpaceValue)
    } else if (currentUserValue === `OH`) {
      arrOH.push(currentSpaceValue)
    }

    // Nested totalTurn reevaluation
    totalTurns = totalTurns + 1

    // Nested winner check
    if (totalTurns >= 5) {
      for (let i = 0; i < winningCombos.length; i++) {
        const currentCombo = winningCombos[i]
        const a = currentCombo[0]
        const b = currentCombo[1]
        const c = currentCombo[2]
        if (arrEX.includes(a) === true && arrEX.includes(b) === true && arrEX.includes(c) === true) {
          $(`#emptyMessage`).html(``)
          const winningMessage = (`<p>EX wins!</p>`)
          $(`#emptyMessage`).append(winningMessage)
          winner = `EX`
          gameOn = false
          // onReset()
        } else if (arrOH.includes(a) === true && arrOH.includes(b) === true && arrOH.includes(c) === true) {
          $(`#emptyMessage`).html(``)
          const winningMessage = (`<p>OH wins!</p>`)
          $(`#emptyMessage`).append(winningMessage)
          winner = `OH`
          gameOn = false
          // onReset()
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
    if (currentUserValue === `EX`) {
      currentUserValue = `OH`
    } else if (currentUserValue === 'OH') {
      currentUserValue = `EX`
    }
  }
}

const onReset = function () {
  arrEX = []
  arrOH = []
  winner = undefined
  currentUserValue = `EX`
  totalTurns = 0
  gameOn = true
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
