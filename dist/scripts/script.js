// const surfSlides = document.querySelectorAll('.surface__slide');
// const slideWidth = surfSlides[0].getBoundingClientRect().width;
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

const surfaceSection = document.querySelector('.surface');
const surfaceSlider = document.querySelector('.surface__slider');
const surfacePrev = document.querySelector('.surface__navigation').firstElementChild;
const surfaceNext = document.querySelector('.surface__navigation').lastElementChild;

let direction = 0;

surfaceNext.addEventListener('click', function (evt) {
        direction = 1;
        surfaceSlider.style.transform = 'translate(-33.33%)';
    });

surfacePrev.addEventListener('click', (evt) => {
    surfaceSlider.style.transition = 'none'
    surfaceSlider.prepend(surfaceSlider.lastElementChild);
    surfaceSlider.style.transform = 'translate(-33.33%)';
    setTimeout(() => {surfaceSlider.style.transition = 'all .4s'}, 1);
    setTimeout(() => {surfaceSlider.style.transform = 'translate(0)'}, 1);
});

surfaceSlider.addEventListener('transitionend', () => {
        if (direction === 1) {
            surfaceSlider.style.transition = 'none';
            surfaceSlider.appendChild(surfaceSlider.firstElementChild);
            surfaceSlider.style.transform = 'translate(0)';
            setTimeout(() => {surfaceSlider.style.transition = 'all .4s';}, 1);
            direction = 0;
        }
})

const bikesDDButton = document.querySelector('.bykes__dropdown-button');
const bikesListArrow = document.querySelector('.bykes__dropdown-icon');
const bikesButtonText = document.querySelector('.bykes__dropdown-text');
const bikesDDList = document.querySelector('.bykes__dropdown-list');
const bikesDDElements = Array.from(document.querySelectorAll('.bykes__ddlist-element'));
const bikesSliders = Array.from(document.querySelectorAll('.bykes__card-container'));

bikesDDButton.addEventListener('click', () => {
    if (bikesDDList.style.display === 'flex') {
        bikesDDList.style.display = 'none';
        bikesListArrow.style.transform = 'none'
    } else {
        bikesDDList.style.display = 'flex';
        bikesListArrow.style.transform = 'scale(-1) translate(0, 5px)'
    }
});

for (const bindex in bikesDDElements) {
    bikesDDElements[bindex].addEventListener('click', (evt) => {
        bikesButtonText.textContent = bikesDDElements[bindex].textContent;
        bikesDDList.style.display = 'none';
        bikesListArrow.style.transform = 'none';
        for (const slindex in bikesSliders) {
            // console.log(bikesSliders[bindex]);
            if (slindex === bindex) {
                bikesSliders[slindex].classList.remove('hidden');
            } else {
                bikesSliders[slindex].classList.add('hidden');
            }
        }
    })
}

/* for (const slider of bikesSliders) {
    slider.addEventListener('mousedown', (evt) => {
        console.log(evt.offsetX);
        console.log(window.innerWidth);
    })
} */