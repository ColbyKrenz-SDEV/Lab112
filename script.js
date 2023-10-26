// Your solution goes here 

function playGuessingGame(numToGuess,totalGuesses) {
  let guessCounter = 0;

  if(!totalGuesses){
    totalGuesses = 10
  }

  var textPrompt = "Enter a number between 1 and 100.";

  while (totalGuesses > 0) {
    totalGuesses--;
    guessCounter++;

    var guess = prompt(textPrompt, guess);

    if(guess < numToGuess) {
      textPrompt = guess + " is too small. Guess a larger number.";
    }

    else if(guess > numToGuess) {
      textPrompt = guess + " is too large. Guess a smaller number.";
    }
    
    else if(isNaN(guess) || guess == "") {
      textPrompt = "Please enter a number.";
      return 0;
    }

    else if(guess == null) {
      return 0;
    }

    else if(guess == numToGuess) {
      console.log("You guessed the number!");
      return guessCounter;
    }
    
  }

  if(totalGuesses == 0) {
    console.log("You ran out of guesses.");
    return 0;
  }
}