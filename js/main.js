$(document).ready(function(){

    $('.nav_floor1 > li').on('mouseenter focusin', function(){
        $(this).children('.nav_floor2').stop().slideDown(300);
    });

    $('.nav_floor1 > li').on('mouseleave', function(){
        $(this).children('.nav_floor2').stop().slideUp(300);
    });

    const swiper1 = new Swiper('.main_slide', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,

    pagination: {
        el: '.main-slide-pagination',
        clickable: true,
    },
    });
});