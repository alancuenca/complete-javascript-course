'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // this is faster
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const newGame = function () {
    // Starting conditions
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.remove('hidden');

}

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


newGame();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1 generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2 display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`
        // 3 check for rolled 1: if true, switch player
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1 add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2 check if players score is >= 100
        if (scores[activePlayer] >= 1) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            console.log(document.querySelector(`.player--${activePlayer}`));

        } else {
            // finish game
            //switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', function () {
    console.log(document.querySelector(`.player--${activePlayer}`));
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    newGame();
    //document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    switchPlayer();
    playing = true;

});
