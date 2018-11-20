// DOM Elements
var $newGame = document.getElementById('newGame');
var $underScores = document.getElementById('underscores');
var $wrong = document.getElementById('wrong');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
var $guessesLeft = document.getElementById('guessesleft')
var $guessedLetters = document.getElementById('Guessed');

// Variables
var words = ['Spongebob', 'Simpsons', 'Pokemon', 'Rugrats']
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var chosenWord = '';
var gameRunning = false;
var wrong = [];
var chosenWordplaceholder = [];
var chosenLetterbank = [];
var wrongLetterbank = [];
var guessedLetters = [];

// This is the function for starting a new game
function newGame() {
        resetGame();
        gameRunning = true;
        guessesleft = 9;
        underScores = [];
        wrong = [];
        chosenWordplaceholder = [];
        console.log('new game')

        chosenWord = words[Math.floor(Math.random() * words.length)];


        for (var i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === ' ') {
                        chosenWordplaceholder.push(' ');
                } else {
                        chosenWordplaceholder.push('_ ');
                }
        }
        $guessesLeft.textContent = guessesLeft;
        $underScores.textContent = chosenWordplaceholder.join('');
        $guessedLetters.textContent = wrongLetterbank;
        guessesLeft.textContent = guessesLeft;
}

// Function for guessed letter 
function guesses(letter) {
        console.log(letter, 'letter');
        if (gameRunning === true && guessedLetters.indexOf(letter) === -1) {
                guessedLetters.push(letter);
                for (var i = 0; i < chosenWord.length; i++) {
                        if (chosenWord[i].toLowerCase() === letter.toLowerCase()) {
                                chosenWordplaceholder[i] = chosenWord[i];
                        }
                }
                $underScores.textContent = chosenWordplaceholder.join('');
                checkIncorrect(letter);
        }
        else {
                if (gameRunning === false) {
                        alert("GAME OVER");
                } else {
                        alert('you tried this letter');
                }
        }
}

// Check incorrect letter
function checkIncorrect(letter) {
       
        if (chosenWordplaceholder.indexOf(letter.toLowerCase()) === -1 && chosenWordplaceholder.indexOf(letter.toUpperCase()) === -1) {
                console.log('wrong letter?')
                //guesses
                guessesLeft--;
                //add wrong letter to wrong letter bank
                wrongLetterbank.push(letter);
                $guessedLetters.textContent = wrongLetterbank.join(' ');
                $guessesLeft.textContent = guessesLeft
        }
        checkLoss();
}

// Onkey event to trigger guess function
document.onkeyup = function (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
                guesses(event.key);
                // console.log(event.keyCode, 'event key')
        }
}
// Loss?
function checkLoss() {
        if (guessesLeft === 0) {
                losses++;
                gameRunning = false;
                $losses.textContent = losses;
                resetGame();
        }
        checkWin();
}

// Win?
function checkWin() {
        if (chosenWord.toLowerCase() === chosenWordplaceholder.join('').toLowerCase()){
                wins++;
                gameRunning = false;
                $wins.textContent = wins;
                alert ("You Win")
                
        }
        

}
// Reset
function resetGame() {
        chosenLetterbank = [];
        wrongLetterbank = [];
        guessedLetters = [];
        guessesLeft = 9;
}



// New game button
$newGame.addEventListener('click', newGame);
 
