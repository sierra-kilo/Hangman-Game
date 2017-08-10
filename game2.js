// list of letters
var letterList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// empty list of incorrectly guessed letters
var incorrectGuesses = [];

// other variables
var secretLetter = null;
var wins = 0;
var losses = 0;
var guessesRemaining = 0;
var myGuess = null;

function getGuess () {
    document.onkeyup = function (event) {
        myGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // for testing
        console.log(myGuess);
        return myGuess
    }
}

getGuess()
