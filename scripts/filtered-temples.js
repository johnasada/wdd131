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
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
      },
      {
        templeName: "Kinshasa, Democratic Republic Of The Congo Temple",
        location: "Kinshasa, Democratic Republic of the Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
      },
      {
        templeName: "Durban South Africa Temple",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
      },
    // Add more temple objects here...
  ];
  
  const oldButton = document.querySelector("#old");
  const newButton = document.querySelector("#new");
  const largeButton = document.querySelector("#large");
  const smallButton = document.querySelector("#small");

  temples.forEach(temple => {
	document.getElementById("card").innerHTML += (card(temple));
  });
  

  oldButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let old = temples.filter(temple => parseInt(temple.dedicated.substring(0,4))<1900);
	old.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  newButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let newones = temples.filter(temple => parseInt(temple.dedicated.substring(0,4))>2000);
	newones.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  largeButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let large = temples.filter(temple => temple.area>90000);
	large.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  smallButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let small = temples.filter(temple => temple.area<10000);
	small.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  function card(temple) {
	var name = `<h3>${temple.templeName}</h3> <br>`;
	var location = `<p>Location: ${temple.location}</p> <br>`;
	var date = `<p>Dedicated: ${temple.dedicated}</p> <br>`;
	var area = `<p>Size: ${temple.area} Square feet</p> <br>`;
	var url = `<img src="${temple.imageUrl}" loading="lazy" alt="picture of the ${temple.templeName} temple." > <br>`;
	var figure = `<figure>${name}${location}${date}${area}${url}</figure>`
	return figure;
  }