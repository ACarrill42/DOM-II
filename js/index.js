// Your code goes here
//click
document.querySelectorAll(".btn").forEach(item => {
    item.addEventListener("click", e => {
        alert("Thank you!")
    })
})

//contextmenu
document.addEventListener('contextmenu', e => {
    e.preventDefault();
})

//input
const input = document.querySelector('input');
const log = document.querySelector('#values');

input.addEventListener('input', e => {
    log.textContent = e.target.value
})

//select

input.addEventListener("select", e => {
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    log.textContent = `You selected: ${selection}`
})

//focus in/out

input.addEventListener('focusin', e => {
    e.target.style.background = "dodgerblue";
})

input.addEventListener('focusout', e => {
    e.target.style.background = "white ";
})

//keydown 
document.addEventListener('keydown', e => {
    console.log(`${e.code}`)
})

//mouseenter
const header = document.querySelector('header');
header.addEventListener('mouseenter', e => {
    e.target.style.background = "grey"
})

//mouseleave
header.addEventListener('mouseleave', e => {
    e.target.style.background = "white"
})

//submit 
const form = document.querySelector('form');
const logs = document.querySelector('#log');

form.addEventListener('submit', e => {
    console.log(logs.textContent = 'Form Submitted!');
    e.preventDefault();
})

//resize 
const height = document.querySelector('#height');
const width = document.querySelector('#width');

function size() {
    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth;
}
window.onresize = size;
