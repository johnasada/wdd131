// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById('last-modified-date').textContent = lastModifiedDate;

document.addEventListener("DOMContentLoaded", function() {
    const temperature = 25; // Temperature in Celsius
    const windSpeed = 10; // Wind speed in km/h
    const windChillElement = document.getElementById("wind-chill"); // Select the Wind Chill element by ID

    // Windchill calculation function
    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    // Check if conditions for windchill are met
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)}°C`; // Update wind chill dynamically
    } else {
        windChillElement.textContent = "N/A"; // Set wind chill to N/A if conditions aren't met
    }
});
// Retrieve approved businesses from local storage
const approvedBusinesses = JSON.parse(localStorage.getItem('approvedBusinesses')) || [];

// Function to render approved businesses
function renderApprovedBusinesses() {
    const directoryList = document.getElementById('directory-list');
    directoryList.innerHTML = '';
    approvedBusinesses.forEach((business) => {
        const businessHTML = `
            <div class="directory-item">
                <img src="${business.businessPhoto}" alt="Business Photo">
                <h3>${business.businessName}</h3>
                <p>${business.name}</p>
                <p>${business.email}</p>
                <p>${business.phone}</p>
            </div>
        `;
        directoryList.insertAdjacentHTML('beforeend', businessHTML);
    });
}

renderApprovedBusinesses();


// Select elements
const directoryList = document.querySelector('.directory-list');
const eventList = document.querySelector('.event-list');
const membershipButton = document.querySelector('.membership button');
const footerYear = document.getElementById('current-year');
const footerModifiedDate = document.getElementById('last-modified-date');

// Data storage
const businesses = [
  { name: 'Business 1', category: 'Retail', image: 'image/business1.jpg' },
  { name: 'Business 2', category: 'Food Service', image: 'image/business2.jpg' },
  { name: 'Business 3', category: 'Technology', image: 'image/business3.jpg' },
  { name: 'Business 4', category: 'Super Market', image: 'image/business4.jpg' },
];

const events = [
  { name: 'Event 1', date: '2024-10-25', time: '10:00 AM', location: 'City Hall' },
  { name: 'Event 2', date: '2024-11-01', time: '2:00 PM', location: 'Conference Center' },
  { name: 'Event 3', date: '2024-11-15', time: '9:00 AM', location: 'Hotel Ballroom' },
];

// Functions
function renderBusinesses() {
  businesses.forEach((business) => {
    const businessHTML = `
      <div class="directory-item">
        <img src="${business.image}" alt="Business Image">
        <h3>${business.name}</h3>
        <p>${business.category}</p>
      </div>
    `;
    directoryList.insertAdjacentHTML('beforeend', businessHTML);
  });
}

function renderEvents() {
  events.forEach((event) => {
    const eventHTML = `
      <div class="event-item">
        <h3>${event.name}</h3>
        <p>${event.date}</p>
        <p>${event.time}</p>
        <p>${event.location}</p>
      </div>
    `;
    eventList.insertAdjacentHTML('beforeend', eventHTML);
  });
}

function updateFooter() {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
  const lastModifiedDate = document.lastModified;
  footerModifiedDate.textContent = lastModifiedDate;
}

function handleMembershipClick() {
  alert('Thank you for your interest in joining our chamber!');
}

// Event listeners
membershipButton.addEventListener('click', handleMembershipClick);

// Initialize
renderBusinesses();
renderEvents();
updateFooter();

// LocalStorage example
const storageData = {
  viewedPages: 0,
};

function updateStorage() {
  storageData.viewedPages++;
  localStorage.setItem('chamberData', JSON.stringify(storageData));
}

// Function to render approved businesses
function renderApprovedBusinesses() {
    const directoryList = document.getElementById('directory-list');
    directoryList.innerHTML = '';
    approvedBusinesses.forEach((business, index) => {
        const businessHTML = `
            <div class="directory-item">
                <img src="${business.businessPhoto}" alt="Business Photo">
                <h3>${business.businessName}</h3>
                <p>${business.name}</p>
                <p>${business.email}</p>
                <p>${business.phone}</p>
                <button class="delete-button" data-index="${index}">Delete</button>
            </div>
        `;
        directoryList.insertAdjacentHTML('beforeend', businessHTML);
    });
}
renderApprovedBusinesses();

// Event listener for delete button clicks
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        const index = event.target.dataset.index;
        approvedBusinesses.splice(index, 1);
        localStorage.setItem('approvedBusinesses', JSON.stringify(approvedBusinesses));
        renderApprovedBusinesses();
    }
});

