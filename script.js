// have global variables here and variables that use querySelector

// Arrays used to create blanks and letters on screen


// Array of words the user will guess

// The init function is called when the page loads that tallies total wins and losses
function init() {
}

// The startGame function is called when the start button is clicked
function startGame() {

}

// The winGame function is called when the win condition is met
function winGame() {
  
}

// The loseGame function is called when timer reaches 0
function loseGame() {

}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  
}

// Creates blanks on screen
function renderBlanks() {

}

// Updates win count on screen and sets win count to client storage
function setWins() {

}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {

}

// These functions are used by init
function getWins() {

}

function getlosses() {

}

function checkWin() {

}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  
}

// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
