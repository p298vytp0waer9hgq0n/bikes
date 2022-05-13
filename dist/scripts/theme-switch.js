const page = document.querySelector('.page');
const switches = document.querySelectorAll('.theme-switcher__switch');

function switchTheme () {
    page.classList.toggle('page_dark-theme');
}

for (const switchThing of switches) {
    switchThing.addEventListener('click', () => {
        for (const s of switches) {
            s.classList.toggle('theme-switcher__switch_dark');
        }
        switchTheme();
    });
}