const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('nav ul');
const logo = document.getElementById('logo');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    logo.classList.toggle('hide');
    const isOpen = navUL.classList.contains('show');
    hamburger.innerHTML = isOpen ? '&#10005;' : '&#9776;';
});
