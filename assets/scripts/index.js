// HEY SEAN!!! Sean, you may edit this file. Don't edit files that don't have this comment at the top. Delete this comment before deliverables are due

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require(`./auth/events`)
const gameEngine = require(`./game-engine/engine`)
// const gameApi = require(`./game-engine/events`)

// use require without a reference to ensure a file is bundled
// require('./example')

// User Authentication event listeners
$(() => {
  // $(`#someIDofTheThing`).on(`action`, function (event) {event.preventDefault()})
  $(`#signUpForm`).on(`submit`, authEvents.onSignUp)
  $(`#signInForm`).on(`submit`, authEvents.onSignIn)
  $(`#changePasswordForm`).on(`submit`, authEvents.onChangePassword)
  $(`#signOutForm`).on(`submit`, authEvents.onSignOut)
})

// Game Engine listeners
$(() => {
  // $(`#someIDofTheThing`).on(`action`, function (event) {event.preventDefault()})
  $(`#gameReset`).on(`click`, gameEngine.onReset) // top left
  $(`#box0`).on(`click`, gameEngine.onPlay) // top left
  $(`#box1`).on(`click`, gameEngine.onPlay) // top mid
  $(`#box2`).on(`click`, gameEngine.onPlay) // top right
  $(`#box3`).on(`click`, gameEngine.onPlay) // middle left
  $(`#box4`).on(`click`, gameEngine.onPlay) // middle mid
  $(`#box5`).on(`click`, gameEngine.onPlay) // middle right
  $(`#box6`).on(`click`, gameEngine.onPlay) // bottom left
  $(`#box7`).on(`click`, gameEngine.onPlay) // bottom mid
  $(`#box8`).on(`click`, gameEngine.onPlay) // bottom right
})
