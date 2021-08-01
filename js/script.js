var i = 0
$("#btn-menu").click(function() {
    if (i == 0){
        i = 1
        $("#menu-izq").addClass("ocultar");
        $(".body").css("padding-left", "0%");
    }else{

    }
});
$("#mostrar").click(function() {
    if (i == 1){
        i = 0
        $("#menu-izq").removeClass("ocultar");
        $(".body").css("margin-top", "-100vh");
        $(".body").css("padding-left", "20%");
    }else{

    }
});
// galerias

$('.gal-estudio').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    speed: 1000,
    responsive:[
        {
            breakpoint: 900,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
            }
        }
    ]
});


// contador
function contador() {
    const counters = document.querySelectorAll('.counter');
    const speed = 10;
    counters.forEach(counter => {
    const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
    counter.innerText = count + inc;
    setTimeout(updateCount, 1);
    } else {
    counter.innerText = target;}};
    updateCount();});}