// Mobile Menu Functionality

var mainMenu = $('#main-menu ul li');

$('.menu-icon').on('click', function(e) {
    e.preventDefault();
    mainMenu.toggleClass('show');
});

// End Mobile Menu Functionality


//Smooth ScrollTo
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//End Smooth ScrollTo

//Mobile Safari Hack

$element = $('.home-cover');
function fixMobileSafariViewport() {
  $element.css('height', window.innerHeight * 0.9);
}
// listen to portrait/landscape changes
window.addEventListener('orientationchange', fixMobileSafariViewport, true);
fixMobileSafariViewport();

//End Mobile Safari Hack