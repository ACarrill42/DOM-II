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