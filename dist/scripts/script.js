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

function toggleVisibility (node) {
    node.children[0].classList.toggle('visible');
    node.children[1].classList.toggle('visible');
    node.children[3].classList.toggle('visible');
}

function toggleButtons (a) {
    if (a === 'off') {
        surfacePrev.setAttribute('disabled', '');
        surfaceNext.setAttribute('disabled', '');
    } else if (a === 'on') {
        surfacePrev.removeAttribute('disabled');
        surfaceNext.removeAttribute('disabled');
    }
}

let direction = 0;

surfaceNext.addEventListener('click', function (evt) {
        direction = 1;
        toggleVisibility(surfaceSlider.children[0]);
        surfaceSlider.style.transform = 'translate(-33.33%)';
    });

surfacePrev.addEventListener('click', (evt) => {
    toggleVisibility(surfaceSlider.children[0]);
    surfaceSlider.style.transition = 'none'
    surfaceSlider.prepend(surfaceSlider.lastElementChild);
    surfaceSlider.style.transform = 'translate(-33.33%)';
    setTimeout(() => {surfaceSlider.style.transition = 'all .4s'}, 10);
    setTimeout(() => {surfaceSlider.style.transform = 'translate(0)'}, 10);
});

surfaceSlider.addEventListener('transitionstart', (evt) => {
    if (evt.target === surfaceSlider) {
         toggleButtons('off');
    }
});

surfaceSlider.addEventListener('transitionend', (evt) => {
    evt.stopPropagation();
    if (evt.target === surfaceSlider) {
        if (direction === 1) {
            surfaceSlider.style.transition = 'none';
            surfaceSlider.appendChild(surfaceSlider.firstElementChild);
            surfaceSlider.style.transform = 'translate(0)';
            setTimeout(() => {surfaceSlider.style.transition = 'all .4s';}, 1);
            direction = 0;
        }
        toggleVisibility(surfaceSlider.children[0]);
        toggleButtons('on');
    }
})

const bikesDDButton = document.querySelector('.bikes__dropdown-button');
const bikesListArrow = document.querySelector('.bikes__dropdown-icon');
const bikesButtonText = document.querySelector('.bikes__dropdown-text');
const bikesDDList = document.querySelector('.bikes__dropdown-list');
const bikesDDElements = Array.from(document.querySelectorAll('.bikes__ddlist-element'));
const bikesSliders = Array.from(document.querySelectorAll('.bikes__card-container'));

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

/* const images = document.querySelectorAll('.surface__image');
for(const image of images) {
    image.addEventListener('mouseenter', (evt) => {
        evt.target.previousSibling.previousSibling.classList.add('visible');
        // evt.target.previousSibling.classList.remove('hidden');
    });
}
for(const image of images) {
    image.addEventListener('mouseleave', (evt) => {
        evt.target.previousSibling.previousSibling.classList.remove('visible');
        // evt.target.previousSibling.classList.remove('hidden');
    });
} */

/* for (const slider of bikesSliders) {
    slider.addEventListener('mousedown', (evt) => {
        console.log(evt.offsetX);
        console.log(window.innerWidth);
    })
} */