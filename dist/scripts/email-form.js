const emailInput = document.querySelector('.footer__input');
const emailSubmit = document.querySelector('.footer__submit');
const emailForm = document.querySelector('.footer__email-container');

emailInput.addEventListener('focus', () => {
    emailSubmit.style.display = 'inline-block';
});

emailForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    emailInput.value = 'Круто!';
    emailInput.setAttribute('disabled', '');
    emailSubmit.style.display = '';
});
