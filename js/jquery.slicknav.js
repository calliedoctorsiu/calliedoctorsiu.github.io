
$(document).ready(function(){
    $('#navbarSupportedContent ul').slicknav({
        prependTo: '.custom_nav-container',
        label: '',
        duplicate: false // Set duplicate to false
    });
});
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var main_section_top = $(".main-content").offset().top;
    var area_height = $(".main-area-section").outerHeight();
    $(".main-content").css({ "margin-top": area_height });
    $(".main-area").css({ height: area_height - scroll_top });
}
parallax_height();
    $(window).scroll(function() {
    parallax_height();
});
$(window).resize(function() {
  parallax_height();
});