$(document).ready(function(){

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