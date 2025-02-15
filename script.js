'use strict';

// Selected elements
let player0Element = document.querySelector('.player--0');
let player1Element = document.querySelector('.player--1');
let score0Element = document.querySelector('#score--0');
let score1Element = document.querySelector('#score--1');
let current0Element = document.getElementById('current--0');
let current1Element = document.getElementById('current--1');
let diceElement = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
});
