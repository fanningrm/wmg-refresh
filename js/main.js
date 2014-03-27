// Mobile Menu Functionality

var mainMenu = $('#main-menu ul li');

$('.menu-icon').on('click', function(e) {
    e.preventDefault();
    mainMenu.toggleClass('show');
});

// End Mobile Menu Functionality

