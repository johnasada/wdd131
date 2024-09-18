// Get the current year
const currentYear = document.getElementById('currentYear');
currentYear.textContent = new Date().getFullYear();

// Get the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last modified: ${document.lastModified}`;

