const input = document.querySelector('#theme-changer');
const light = document.querySelector('.header__toggle-icon_light');
const dark = document.querySelector('.header__toggle-icon_dark');

input.addEventListener('change', function() {
    if (input.checked) {
        light.classList.remove('header__toggle-icon_light-active')
        dark.classList.add('header__toggle-icon_dark-active');
    } else {
        light.classList.add('header__toggle-icon_light-active')
        dark.classList.remove('header__toggle-icon_dark-active');
    }
});
