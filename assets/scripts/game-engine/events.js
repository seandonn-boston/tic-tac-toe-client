// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
const userEX = {arrayOfSpaces: []}
const userOH = {arrayOfSpaces: []}
let currentUserValue = `EX`
let totalTurns = 0
const onPlay = function () {
  // Get currentSpaceValue as a single number by retrieving the space ID and "boiling it down" to the unique number at the end of the ID
  const currentSpaceValue = event.target.id.replace(`moveSpace`, ``)
  console.log(`The currentSpaceValue is `, currentSpaceValue)

  // Check if the clicked space already contains an EX or OH. If the space does contain an EX or OH, tell the user it cannot be played. If the space does not contain EX or OH, play the users symbol in that selected space
  console.log(`The currentUserValue is `, currentUserValue)
  const data = $(event.target).html()
  if (data === `EX` || data === `OH`) {
    console.log(`User cannot play in this space!`)
  } else {
    $(`#moveSpace` + currentSpaceValue).html(``)
    const symbol = currentUserValue
    $(`#moveSpace` + currentSpaceValue).append(symbol)
    console.log(symbol, `has been played!`)
    // ADD THE currentSpaceValue TO THE arrayOfSpaces ACCORDING TO WHICH USER PLAYED THIS TURN

    // Nested turn rotation, so not to accidentally skip turns if
    if (currentUserValue === `EX`) {
      currentUserValue = `OH`
    } else if (currentUserValue === 'OH') {
      currentUserValue = `EX`
    }
    console.log(`The symbol of next turn will be`, currentUserValue)

    // Nested totalTurn reevaluation
    totalTurns = totalTurns + 1
    console.log(`The totalTurns is `, totalTurns)

    // Nested winner check
    if (totalTurns < 5) {
      console.log(`We need to keep playing, there won't be a winner yet`)
    } else if (totalTurns >= 5) {
      console.log(`We need to check for a winner`)
      for (let i = 0; i < winningCombos.length; i++) {
        if (userEX.arrayOfSpaces === winningCombos[i]) {
          console.log(`We got a winner`)
        }
      }
    }

    // Nested tie check (to be combined with winner check)
    if (totalTurns === 9) {
      console.log(`We need to check for a tie, which means we need to check for a winner first. If there was a winner, there is no tie, if there was no winner, there is a tie.`)
    }
  }
  console.log(userEX)
  console.log(userOH)
}

module.exports = {
  onPlay
}
