// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`

// Burger code
const ham = document.querySelector('nav');
const list = document.getElementById("navigation");

ham.addEventListener('click', ()=>{
    list.classList.toggle('show');
    ham.classList.toggle('show');
})

// Main header code

const home = document.getElementById("home");
const old = document.getElementById("old");
const newer = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById("small")
const header = document.getElementById("bodyHeader");

home.addEventListener('click', ()=>{
    header.textContent = "Home"
});

old.addEventListener('click', ()=>{
    header.textContent = "Old"
});

newer.addEventListener('click', ()=>{
    header.textContent = "New"
});

large.addEventListener('click', ()=>{
    header.textContent = "Large"
});

small.addEventListener('click', ()=>{
    header.textContent = "Small"
});

