'use strict';

// Selected elements
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

let currentScore = 0;

btnRoll.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0Element.textContent = currentScore;
  }
});
