// Get the current year and update the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').innerText = currentYear;

// Get the last modified date and update the footer's second paragraph
document.getElementById('lastModified').innerText = document.lastModified;