const bikesDDButton = document.querySelector('.bikes__dropdown-button');
const bikesListArrow = document.querySelector('.bikes__dropdown-icon');
const bikesButtonText = document.querySelector('.bikes__dropdown-text');
const bikesDDList = document.querySelector('.bikes__dropdown-list');
const bikesDDElements = Array.from(document.querySelectorAll('.bikes__ddlist-element'));
const bikesSliders = Array.from(document.querySelectorAll('.bikes__card-container'));
const bikesSlides = document.querySelectorAll('.bikes__card');
const bikesNavs = Array.from(document.querySelectorAll('.bikes__nav-element'));

let bikesActiveSlider = bikesSliders[0];

bikesDDButton.addEventListener('click', () => {
    if (bikesDDList.style.display === 'flex') {
        bikesDDList.style.display = '';
        bikesListArrow.style.transform = 'none'
    } else {
        bikesDDList.style.display = 'flex';
        bikesListArrow.style.transform = 'scale(-1)';
    }
});

for (const bindex in bikesDDElements) {
    bikesDDElements[bindex].addEventListener('click', (evt) => {
        bikesDDButton.firstChild.textContent = bikesDDElements[bindex].textContent;
        if (window.innerWidth < 1030) bikesDDList.style.display = '';
        bikesListArrow.style.transform = 'none';
        for (const slindex in bikesSliders) {
            if (slindex === bindex) {
                bikesSliders[slindex].classList.remove('hidden');
                bikesActiveSlider = bikesSliders[slindex];
                bikesDDElements[slindex].classList.add('bikes__ddlist-element_active');
            } else {
                bikesSliders[slindex].classList.add('hidden');
                bikesDDElements[slindex].classList.remove('bikes__ddlist-element_active');
            }
        }
    })
}

let initial = 0;
let start;
let edge;
let slidin = false;
let position;
let cardWidth;

for (const slide of bikesSliders) {
    console.log(slide);
    slide.addEventListener('mousedown', (evt) => {
        bikesActiveSlider.style.transition = 'none';
        evt.preventDefault();
        if (window.innerWidth >= 1030) return;
        start = evt.clientX; 
        edge = window.innerWidth - bikesActiveSlider.clientWidth;
        cardWidth = bikesActiveSlider.clientWidth / 3;
        let position = bikesActiveSlider.style.transform || '0';
        initial = parseInt(position.match(/-*\d+/)[0], 10);
        document.onmouseup = calcSlide;
        document.onmousemove = trackSlide;
    });
};

function trackSlide (evt) {
    slidin = true;
    position = initial + evt.clientX - start;
    if (position > 0) position = 0;
    if (position < edge) position = edge;
    bikesActiveSlider.style.transform = `translateX(${position}px)`;
};

function calcSlide (evt) {
    bikesActiveSlider.style.transition = '';
    document.onmousemove = null;
    document.onmouseup = null;
    let shift = Math.round(position / cardWidth);
    bikesActiveSlider.style.transform = `translateX(${cardWidth * shift}px)`;
    for (const i in bikesNavs) {
        if (parseInt(i, 10) + shift === 0) {
            bikesNavs[i].classList.add('bikes__nav-element_active');
        } else {
            bikesNavs[i].classList.remove('bikes__nav-element_active');
        }
    }
    
}

for (const slide of bikesSlides) {
    slide.addEventListener('click', (evt) => {
        if (slidin) {
            evt.preventDefault();
            slidin = false
        }
    });
}