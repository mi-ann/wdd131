// Function to update footer with current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check conditions for viable wind chill calculations
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Wind chill formula for Celsius
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

// Static values for temperature and wind speed
const temperature = 30; // in °C
const windSpeed = 15; // in km/h

// Display wind chill factor in the weather section
function displayWindChill() {
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill-value').textContent = windChillFactor;
}

// Execute functions on page load
window.onload = function() {
    updateFooter();
    displayWindChill();
};
