[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Sean Donnellan Tic Tac Toe Game

## The Assignment
Create a Tic Tac Toe game. The game must be a single page application, feature account creation and user authentication, and provide user-facing success and error messages for user authentication, game turns, and game-api calls.

## Technologies Used
- Expo Marker and White Board
- Pencil and Paper
- Git
- Github
- Grunt
- HTML
- Bootstrap
- SASS
- JavaScript
- jQuery
- AJAX
- JSON
- Issue Cue

## Prepwork
- I completed the game scope study (https://git.generalassemb.ly/ga-wdi-boston/game-project/issues/1423)
- After building the basic structure of my gameboard in HTML, Bootstrap, and a few SASS styles, I then detailed my game logic on a whiteboard first (I should have taken a picture of this, I was very happy with it), and then rewrote those notes into my notebook as a way to doublecheck my logic. This provided an easy-to-follow framework which I began building in my code as engine.js.

### Wireframes
- https://imgur.com/gallery/B4JQRsq

### User Stories
- As a user, I want to play tic-tac-toe so I can have fun.
- As two children, we want to play a game so we can determine who is the tic-tac-toe champion.
- As a bored businessperson, I want to slack off at work so I can make the day go by faster.
- As feuding roommates, we want to compete so we can determine who will take out the trash.
- As a Tic-Tac-Toe scout, I want to access the leaderboard so I can recruit them.

## Development Process
- Wireframes
- Basic HTML/SCSS game board
- User Authentication
- Game Engine
- Game API
- View States

## Obstacles
- Retrieving the total number of games
- Understanding the game-api and understanding how apis work
- Checking if a space is empty or not
- Checking for a win


## Accomplishments
- Utilizing store to grab global variables
- Providing descriptive ID's for each square on the gameboard yet utilizing these IDs to grab unique numbers for each square (all in one line too! I'm proud)
- Checking for a win and telling the appropriate user if they won.


## Unsolved Problems
- This README needs some work - I rushed most of the content here just to make sure my thoughts were written down. Next is to turn each section into more of a story and less of a list, keeping technical terms consistent throughout and providing code snippets and console.log outputs when relevant
- Refactor engine.js, try to make a bunch of smaller callback functions rather than a bunch of functions nested within an umbrella function.
- Clean up theme.scss, order it, organize it, and turn reusable values into SASS variables
- Github gives me the following vulnerability warning:
```text
  Potential security vulnerability found in the hoek dependency
```
cont: this warning appeared before I ever wrote any code (from the browser-template) and I did not ask about it yet. I will do further investigation by reviewing the closed issue cue and asking the teacher pointed questions.
- I wrote some styles (https://github.com/seandonn-boston/tic-tac-toe-client/commit/aeafac79727797116cd98663a5ab9db5a4d3b689) That did not merge with master or have been overwritten. Try to get these back
- Answer the question: Does sign up also count as login? If so, provide all sign in functionality (reveal/hide view states) on sign up AND store the token!

## Next Steps and Nice-to-Have's
- Style the entire SPA - revist wireframes
- Add all user authentication forms into dropdown forms in a top-navbar
- Create a scoreboard
- Add the following to theme.scss:
```css
* {
  background-image: image-of-kanye-wests-face.jpg;
}
```
