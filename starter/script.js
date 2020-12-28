'use strict';

// TESTED NUMBER
const secretNum = Math.trunc(Math.random() * 20 + 1);

// HTML REQUIRED DATA
let messageResult = document.querySelector('.message').textContent;
let scoreValue = parseInt(document.querySelector('.score').textContent);
let highscoreValue = parseInt(document.querySelector('.highscore').textContent);
let correctNumberOutput = document.querySelector('.number').textContent;

// CHECKER FUNCTION
const checkerFunc = function () {
  // GET USER ENTERED VALUE AND STORE IT AS INTEGER VALUE
  const guessInput = parseInt(document.querySelector('.guess-input').value);
  console.log(guessInput);

  if (!guessInput) {
    document.querySelector('.message').textContent = 'NO NUM TO CHECK';
  } else {
    // CHECK USER CURRENT SCORE
    if (scoreValue > 0) {
      // CORRECT VALUE ACTION
      if (guessInput === secretNum) {
        document.querySelector('.message').textContent = 'Correct You Got it';
        document.querySelector('.number').textContent = guessInput;
        document.querySelector('body').style.backgroundColor = '#34b434';

        // COMPARE THE PREVOUIS SCORE WITH CURRENT ONE THEN SET TEH HIGHSCORE
        if (scoreValue > highscoreValue) {
          document.querySelector('.highscore').textContent = scoreValue;
        }
      } else if (guessInput < 0 || guessInput > 20) {
        // !(1 <= guessInput <= 20)
        // OUT OF SCOPE ACTION
        document.querySelector('.message').textContent =
          'OUT OF SCOPE NUM MUST BE FROM 1 TO 20';
        --scoreValue;
        document.querySelector('.score').textContent = scoreValue;
      } else {
        // INCORRECT ACTION

        document.querySelector('.message').textContent =
          secretNum > guessInput ? 'Go High' : 'Go Low';
        document.querySelector('.score').textContent = --scoreValue;
      }
    } else {
      // USER SCORE IS 0 ACTION

      document.querySelector('.message').textContent =
        'Carried Out\nclick again btn';
    }
  }
};

// RESET FUNCTION
const resetAllData = function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess-input').value = '0';
  document.querySelector('body').style.backgroundColor = '#222';
};

// CHECK BUTTON ACTION
document.querySelector('.check-btn').addEventListener('click', checkerFunc);

//AGAIN BUTTON ACTION
document.querySelector('.again-btn').addEventListener('click', resetAllData);
