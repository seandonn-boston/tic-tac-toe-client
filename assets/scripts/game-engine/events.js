// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
const arrEX = []
const arrOH = []
let currentUserValue = `EX`
let totalTurns = 0
const onPlay = function () {
  // Get currentSpaceValue as a single number by retrieving the space ID and "boiling it down" to the unique number at the end of the ID
  const currentSpaceValue = Number(event.target.id.replace(`moveSpace`, ``))
  // console.log(`The currentSpaceValue is `, typeof currentSpaceValue)

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
        console.log(`inside the double for loop, AAA`, winningCombos[i])
        winningCombos[i].every(
          // winningCombos[i] gives each inidividual array found in the winningCombos array. Take arrEX and check if arrEX has every number in winningCombos[i]. If arrEX does contain every number from winningCombos[i], then user X has won the game. If arrEX does not contain every number from winningCombos[i], then the for loop will move onto the next iteration of winningCombos[i]. If arrEX does not contain any winningCombos arrays, then recheck all combos again against arrOH. if arrOH has all three numbers of any given winningCombo[i], then user O has won the game. If arrOH has no winningCombos, then user X and user O have not won the game. BEFORE CONTINUEING TO PLAY, if totalTurns === 9, then the game is a tie! otherwise, neither player X nor O has won, nor is it a tie, therefore continue playing the game and exit all the loops
        )
      }
    }

    // Nested tie check (to be combined with winner check)
    if (totalTurns === 9) {
      console.log(`We need to check for a tie, which means we need to check for a winner first. If there was a winner, there is no tie, if there was no winner, there is a tie.`)
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

module.exports = {
  onPlay
}
