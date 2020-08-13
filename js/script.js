// sliders
$('.slider-estudio').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});
$('.slider-estudio-tablet').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
});
$('.slider-estudio-responsive').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.slider-menu-por').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});

// sliderportafolio

$('.galerias-port').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
});

// navbar
$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-inverse");
    } else {
        $("#menu").removeClass("bg-inverse");
    }
});
AOS.init();

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    offset: 0,
});
$(function() {

    var $body = $(HTMLAllCollection);
    $body.bind('scroll', function() {
        // "Desactivar" el scroll horizontal
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

}); 