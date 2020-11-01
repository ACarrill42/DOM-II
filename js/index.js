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

//context menu
const noSteal = document.querySelector('#steal');
noSteal.addEventListener('contextmenu', event => {
    event.preventDefault();
})

//select
function logSelect(event) {
    const logs = document.querySelector('#log3');
    const selection = event.target.value.substring(event.target.selectStart, event.target.selectEnd);
    logs.textContent = `You have selected ${selection} as your destination!`;
}
const input = document.querySelector('input');
input.addEventListener('select', logSelect);

//key down
document.addEventListener('keydown', logKey);

function logKey(e) {
  text.textContent += ` ${e.code}`;
}

//focus
const password = document.querySelector('input[type = "password"]');
password.addEventListener('focus', event => {
    event.target.style.background = 'skyblue';
});
password.addEventListener('blur', event => {
    event.target.style.background = '';
});

//change 
const selectEl = document.querySelector('.vacation');
selectEl.addEventListener('change', event => {
    const result = document.querySelector('.result');
    result.textContent = `You chose ${event.target.value}!`;
})