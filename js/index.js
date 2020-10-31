// Your code goes here
const logoClick = document.querySelector('.logo-heading');
logoClick.addEventListener('click', event => {
    event.target.style.color = 'green'
});

const navBack = document.querySelector('.nav');
navBack.addEventListener('mouseenter', event => {
    event.target.style.background = 'pink'
});

const navReturn = document.querySelector('.nav');
navReturn.addEventListener('mouseleave', event => {
    event.target.style.background = 'white'
});

function logReset(event) {
    log.textContent = `Enter new Destination!`;
}
const form = document.querySelector('#form');
const log = document.querySelector('#log');
form.addEventListener('reset',logReset);

