

$('.hamburger').on('click', function() {
    $('#main-menu ul').slideToggle();
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 767) {
        $('.hamburger').hide();
        $('#main-menu ul').show();
    }

    else {
        $('#main-menu ul').hide();
        $('.hamburger').show();
    }
});