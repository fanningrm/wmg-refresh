// Mobile Menu Functionality

var mainMenu = $('#main-menu ul li');
var w = $(window).width();

$('.menu-icon').on('click', function(e) {
    e.preventDefault();

    if(mainMenu.hasClass('show')){
        mainMenu.removeClass('show').addClass('hide');
    }
    else {
        mainMenu.removeClass('hide').addClass('show');
    }
});

$(window).resize(function(){
    if(w > 767) {
        mainMenu.removeClass('show hide');
    }
});

// End Mobile Menu Functionality

