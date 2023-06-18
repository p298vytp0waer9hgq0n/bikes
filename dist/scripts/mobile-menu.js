const mmButton = document.querySelector('.header__mmbutton');
const mobileMenu = document.querySelector('.mobile-menu');
const mmCloseButton = document.querySelector('.mobile-menu__closebtn');
const mmLinks = document.querySelectorAll('.mobile-menu__link');
const mmToggle = () => {
    mobileMenu.classList.toggle('hidden');
}

mmButton.addEventListener('click', mmToggle);
mmCloseButton.addEventListener('click', mmToggle);
for (const link of mmLinks) {
    link.addEventListener('click', mmToggle);
}
