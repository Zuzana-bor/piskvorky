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
};

const hracElm = document.querySelector('#hrac');
const polickoElm = document.querySelector('.hraciPole');
polickoElm.addEventListener('click', znak);
