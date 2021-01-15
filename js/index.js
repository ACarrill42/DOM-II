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