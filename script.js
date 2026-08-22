const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const languageSelector = document.querySelector('.language-selector');
const languageButton = document.querySelector('.language-button');
const selectedFlag = document.querySelector('.selected-flag');
const languageOptions = document.querySelectorAll('.language-menu button');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

languageButton.addEventListener('click', (event) => {
    event.stopPropagation();

    const isOpen = languageSelector.classList.toggle('open');
    languageButton.classList.toggle('active', isOpen);
    languageButton.setAttribute('aria-expanded', isOpen);
});

languageOptions.forEach((option) => {
    option.addEventListener('click', () => {
        selectedFlag.textContent = option.querySelector('span').textContent;
        languageSelector.classList.remove('open');
        languageButton.classList.remove('active');
        languageButton.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('click', (event) => {
    if (!languageSelector.contains(event.target)) {
        languageSelector.classList.remove('open');
        languageButton.classList.remove('active');
        languageButton.setAttribute('aria-expanded', 'false');
    }
});