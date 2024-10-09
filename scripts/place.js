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

