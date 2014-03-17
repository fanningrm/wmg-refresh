$(window).resize(function(){
    var w = $(window).width();
    if(w > 767) {
        $('#main-menu ul').show();
    }
    else {
        $('#main-menu ul').hide();
    }
});

$('.hamburger').on('click', function() {
    $('#main-menu ul').slideToggle();
});