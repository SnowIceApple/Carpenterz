$(document).ready(function(){

    const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

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

    gsap.registerPlugin(ScrollTrigger);
    

    gsap.to('.visual_deco',{
        opacity: 0.6,
        scrollTrigger: {
            trigger: '#visual',
            start: 'top top', 
            end: 'bottom top',
            toggleActions: "play reverse none reverse",
            invalidateOnRefresh: true,
            scrub: true,
        }

    });

    var aboutListAll = document.querySelectorAll('.main_about_list ul li');

    aboutListAll.forEach((aboutList) => {
        var aboutListTxt = aboutList.querySelectorAll('.hideUpEffect');

        gsap.to(aboutListTxt, {
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: aboutList,
                start: '120% bottom',
                invalidateOnRefresh: true,
            }
        });
    });

    var parallaxEffectBox = document.querySelectorAll('.parallax_img');

    parallaxEffectBox.forEach((parallaxBox) => {
        var parallaxEffectImg = parallaxBox.querySelector('img');

        gsap.to(parallaxEffectImg, {
            yPercent: 7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: parallaxBox,
                start: '0% bottom',
                end: '100% top',
                scrub: true,
                invalidateOnRefresh: true,
            }
        });
    });

    var aniLineDeco = document.querySelectorAll('.aniLineDeco');

    aniLineDeco.forEach((aniLineDecoEff) => {

        gsap.to(aniLineDecoEff, {
            scrollTrigger: {
                trigger: aniLineDecoEff,
                start: '25px bottom',
                toggleClass: 'active', 
                once: true,
            }
        });
    });

});