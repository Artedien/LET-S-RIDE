window.$ = window.jQuery = require('jquery');

function headerDropdown() {
    $('.header__nav-item--dropdown').on('click', function () {
        $('.header__nav-dropdown-box').slideToggle();
    });
}

export default headerDropdown;
