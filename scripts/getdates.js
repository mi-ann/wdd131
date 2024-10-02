
const currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the last modified date in the footer
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;