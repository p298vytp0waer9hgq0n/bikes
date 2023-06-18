const emailInput = document.querySelector('.footer__input');
const emailSubmit = document.querySelector('.footer__submit');
const emailForm = document.querySelector('.footer__email-container');

emailInput.addEventListener('focus', () => {
    emailSubmit.style.display = 'inline-block';
});

emailSubmit.addEventListener('focusout', (evt) => {
    evt.stopPropagation();
});

emailForm.addEventListener('focusout', (evt) => {
    setTimeout(() => {if (document.activeElement !== emailSubmit) emailSubmit.style.display = '';}, 50);
});

emailForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    emailInput.value = 'Круто!';
    emailInput.setAttribute('disabled', '');
    emailSubmit.style.display = '';
});
