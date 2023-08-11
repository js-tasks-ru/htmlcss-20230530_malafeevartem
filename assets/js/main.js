const showMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('header__mobile-menu_show');
            toggle.classList.toggle('header__mobile-toggle_open');
        })
    }
};

showMenu('mobile-toggle', 'mobile-menu');
