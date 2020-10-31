// Your code goes here

//click
const logoClick = document.querySelector('.logo-heading');
logoClick.addEventListener('click', event => {
    event.target.style.color = 'green'
});

//mouseenter
const navBack = document.querySelector('.nav');
navBack.addEventListener('mouseenter', event => {
    event.target.style.background = 'pink'
});

//mouseleave
const navReturn = document.querySelector('.nav');
navReturn.addEventListener('mouseleave', event => {
    event.target.style.background = 'white'
});

//reset
function logReset(event) {
    log.textContent = `Enter new Destination!`;
}
const form = document.querySelector('#form');
const log = document.querySelector('#log');
form.addEventListener('reset',logReset);

//submit
function logSubmit(event) {
    log2.textContent = `Destination Entered! Time Entered: ${event.timeStamp}`;
    event.preventDefault();
}
const formTwo = document.querySelector('#form2');
const log2 = document.querySelector('#log2');
formTwo.addEventListener('submit',logSubmit);