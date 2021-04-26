'use strict';

console.log('Funguju');

let kdoJeNaTahu = 'kolecko';

const znak = (event) => {
  if (kdoJeNaTahu === 'kolecko') {
    event.target.classList.add('board__field--circle');
    hracElm.src = 'obrazky_pravidla/cross.svg';
    kdoJeNaTahu = 'krizek';
  } else {
    event.target.classList.add('board__field--cross');
    hracElm.src = 'obrazky_pravidla/circle.svg';
    kdoJeNaTahu = 'kolecko';
  }
};

const hracElm = document.querySelector('#hrac');
document.querySelector('.hraciPole').addEventListener('click', znak);
