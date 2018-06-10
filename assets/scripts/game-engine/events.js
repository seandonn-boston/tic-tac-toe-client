// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due
let currentUserValue = `X`

// User Rotation
const onPlay = function () {
  console.log(`currentUserValue is `, currentUserValue)
  if (currentUserValue === `X`) {
    currentUserValue = `O`
  } else if (currentUserValue === 'O') {
    currentUserValue = `X`
  }
  return currentUserValue
}

module.exports = {
  onPlay
}
