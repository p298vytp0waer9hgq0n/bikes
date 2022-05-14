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
    toggleButtons('off');
    direction = 1;
    toggleVisibility(surfaceSlider.children[0]);
    toggleVisibility(surfaceSlider.children[1]);
    surfaceSlider.style.transform = 'translate(-33.33%)';
});

surfacePrev.addEventListener('click', (evt) => {
    toggleButtons('off');
    direction = -1;
    toggleVisibility(surfaceSlider.children[0]);
    toggleVisibility(surfaceSlider.lastElementChild);
    surfaceSlider.style.transition = 'none'
    surfaceSlider.prepend(surfaceSlider.lastElementChild);
    surfaceSlider.style.transform = 'translate(-33.33%)';
    setTimeout(() => {surfaceSlider.style.transition = 'all .4s'}, 20);
    setTimeout(() => {surfaceSlider.style.transform = 'translate(0)'}, 20);
});

/* surfaceSlider.addEventListener('transitionstart', (evt) => {
    if (evt.target === surfaceSlider) {
    }
}); */

surfaceSlider.addEventListener('transitionend', (evt) => {
    evt.stopPropagation();
    if (direction === 0) return;
    if (evt.target === surfaceSlider) {
        if (direction === 1) {
            surfaceSlider.style.transition = 'none';
            surfaceSlider.appendChild(surfaceSlider.firstElementChild);
            surfaceSlider.style.transform = 'translate(0)';
            setTimeout(() => {surfaceSlider.style.transition = 'all .4s';}, 1);
        }
        toggleButtons('on');
        direction = 0;
    }
})