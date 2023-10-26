// Your solution goes here 

//initialize the function
function playGuessingGame(numToGuess,totalGuesses) {
  let guessCounter = 0;

  if(!totalGuesses) {
    totalGuesses = 10
  }

  //first user prompt
  let textPrompt = "Enter a number between 1 and 100.";

  //while loop to prompt user until correct number is guessed
  while (totalGuesses > 0) {
    totalGuesses--;
    guessCounter++;

    //prompt user for number
    var guess = prompt(textPrompt, guess);

    //if user hits cancel, end the prompts
    if(guess == null) {
      console.log("Canceled");
      return 0;
    }
      
    //if user guess is not a number or is an empty string, prompt user to guess again
    else if(isNaN(guess) || guess === "") {
      textPrompt = "Please enter a number.";
      totalGuesses++;
      guessCounter--;
    }
      
    //if user guess is smaller than the number, prompt user to guess higher
    else if(guess < numToGuess) {
      textPrompt = guess + " is too small. Guess a larger number.";
    }

    //if user guess is larger than the number, prompt user to guess lower
    else if(guess > numToGuess) {
      textPrompt = guess + " is too large. Guess a smaller number.";
    }

    //if user guess is correct, tell user how many guesses it took
    else if(guess == numToGuess) {
      console.log("You guessed the number!");
      return guessCounter;
    }
  }

  //if totalGuesses gets to zero, tell user they ran out of guesses
  if(totalGuesses == 0) {
    console.log("You ran out of guesses.");
    return 0;
  }
}