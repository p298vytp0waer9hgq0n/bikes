// const surfSlides = document.querySelectorAll('.surface__slide');
// const slideWidth = surfSlides[0].getBoundingClientRect().width;
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