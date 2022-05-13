const bikesDDButton = document.querySelector('.bikes__dropdown-button');
const bikesListArrow = document.querySelector('.bikes__dropdown-icon');
const bikesButtonText = document.querySelector('.bikes__dropdown-text');
const bikesDDList = document.querySelector('.bikes__dropdown-list');
const bikesDDElements = Array.from(document.querySelectorAll('.bikes__ddlist-element'));
const bikesSliders = Array.from(document.querySelectorAll('.bikes__card-container'));

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
        bikesButtonText.textContent = bikesDDElements[bindex].textContent;
        if (window.innerWidth < 1030) bikesDDList.style.display = '';
        bikesListArrow.style.transform = 'none';
        for (const slindex in bikesSliders) {
            if (slindex === bindex) {
                bikesSliders[slindex].classList.remove('hidden');
                bikesDDElements[slindex].classList.add('bikes__ddlist-element_active');
            } else {
                bikesSliders[slindex].classList.add('hidden');
                bikesDDElements[slindex].classList.remove('bikes__ddlist-element_active');
            }
        }
    })
}
