'use strict';

console.log('Funguju');

let kdoJeNaTahu = 'kolecko';

const znak = (event) => {
  if (kdoJeNaTahu === 'kolecko') {
    event.target.classList.add('board__field--circle');
    hracElm.src = 'obrazky_pravidla/cross.svg';
    kdoJeNaTahu = 'krizek';
    event.target.disabled = true;
  } else {
    event.target.classList.add('board__field--cross');
    hracElm.src = 'obrazky_pravidla/circle.svg';
    kdoJeNaTahu = 'kolecko';
    event.target.disabled = true;
  }

  if (isWinningMove(event.target)) {
    window.alert('Vyhráváš');
  }
};

const hracElm = document.querySelector('#hrac');
const polickoElm = document.querySelector('.hraciPole');
polickoElm.addEventListener('click', znak);

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'krizek';
  } else if (field.classList.contains('board__field--circle')) {
    return 'kolecko';
  }
};

const boardSize = 10;
const fields = document.querySelectorAll('.policko');

const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;

  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
