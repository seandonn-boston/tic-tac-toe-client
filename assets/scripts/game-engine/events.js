// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let arrEX = []
let arrOH = []
let winner
let currentUserValue = `EX`
let totalTurns = 0

const onPlay = function () {
  // Get currentSpaceValue as a single number by retrieving the space ID and "boiling it down" to the unique number at the end of the ID
  const currentSpaceValue = Number(event.target.id.replace(`moveSpace`, ``))

  // Check if the clicked space already contains an EX or OH. If the space does contain an EX or OH, tell the user it cannot be played. If the space does not contain EX or OH, play the users symbol in that selected space
  // console.log(`The currentUserValue is `, currentUserValue)
  const data = $(event.target).html()
  if (data === `EX` || data === `OH`) {
    console.log(`User cannot play in this space!`)
  } else {
    $(`#moveSpace` + currentSpaceValue).html(``)
    const symbol = currentUserValue
    $(`#moveSpace` + currentSpaceValue).append(symbol)
    console.log(symbol, `has been played!`)

    // ADD THE currentSpaceValue TO arrEX OR arrOH ACCORDING TO WHICH USER PLAYED THIS TURN
    if (currentUserValue === `EX`) {
      arrEX.push(currentSpaceValue)
    } else if (currentUserValue === `OH`) {
      arrOH.push(currentSpaceValue)
    }

    // Nested totalTurn reevaluation
    totalTurns = totalTurns + 1

    // Nested winner check
    if (totalTurns < 5) {
      console.log(`We need to keep playing, there won't be a winner yet`)
    } else if (totalTurns >= 5) {
      console.log(`Time to check for a winner`)
      for (let i = 0; i < winningCombos.length; i++) {
        const currentCombo = winningCombos[i]
        const a = currentCombo[0]
        const b = currentCombo[1]
        const c = currentCombo[2]
        if (arrEX.includes(a) === true && arrEX.includes(b) === true && arrEX.includes(c) === true) {
          console.log(`EX wins`)
          winner = `EX`
          onReset()
        } else if (arrOH.includes(a) === true && arrOH.includes(b) === true && arrOH.includes(c) === true) {
          console.log(`OH wins`)
          winner = `OH`
          onReset()
        }
      }
      console.log(`winner is`, winner)
    }

    // Nested tie check (to be combined with winner check)
    if (totalTurns === 9 && winner === undefined) {
      console.log(`There is a tie!`)
    }

    // Nested turn rotation, so not to accidentally skip turns if
    if (currentUserValue === `EX`) {
      currentUserValue = `OH`
    } else if (currentUserValue === 'OH') {
      currentUserValue = `EX`
    }
    console.log(`The symbol of next turn will be`, currentUserValue)
  }
  console.log(`arrEX is`, arrEX)
  console.log(`arrOH is`, arrOH)
  console.log(winningCombos)
}

const onReset = function () {
  arrEX = []
  arrOH = []
  winner = undefined
  currentUserValue = `EX`
  totalTurns = 0
  $(`#moveSpace0`).html(``)
  $(`#moveSpace1`).html(``)
  $(`#moveSpace2`).html(``)
  $(`#moveSpace3`).html(``)
  $(`#moveSpace4`).html(``)
  $(`#moveSpace5`).html(``)
  $(`#moveSpace6`).html(``)
  $(`#moveSpace7`).html(``)
  $(`#moveSpace8`).html(``)
}

module.exports = {
  onPlay,
  onReset
}
