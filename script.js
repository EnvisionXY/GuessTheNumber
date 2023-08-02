'use strict';

// Random Number
let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

// Initialize the score and highScore
let score = 20;
let highScore = 0;

// Function to set the message displayed in the UI
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to set the number displayed in the UI
const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Function to set the score displayed in the UI
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Check! Button - Event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input or an invalid input
  if (!guess || guess > 20 || guess < 1) {
    setMessage('⛔ Invalid guess!');
  } else if (guess === secretNumber) {
    // When player wins
    setMessage('🎉 You won!');
    setNumber(secretNumber);

    // Change background color if correct guess
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update the highscore if necessary
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // When guess is incorrect
    if (score > 1) {
      setMessage(
        guess > secretNumber
          ? 'You number is too high!'
          : 'You number is too low!'
      );
      score--;
      setScore(score);
    } else {
      // When player loses
      setMessage('You lost!');
      setScore(0);
    }
  }
});

// Again! Button - Event listener
document.querySelector('.again').addEventListener('click', function () {
  // Generate a new secretNumber
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);

  // Clear the input field
  document.querySelector('.guess').value = '';

  // Reset the message, score, and background color
  setMessage('Start guessing...');
  setScore(20);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // Hide the previous secretNumber
  setNumber('?');
});
