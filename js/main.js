$(document).ready(function(){

    AOS.init();

    var lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        prevent: (node) => node.id === 'mNavScroll',
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

lenis.on('scroll', (e) => {

    var scrollPos = e.scroll;
    var allHeight = e.limit;
    var nowScroll = allHeight - scrollPos;
    var ftHeight = $('#footer').outerHeight();
    var ftPos = ftHeight + 40;

    // console.log(nowScroll, allHeight, ftPos);

    if($(window).outerWidth() < 1024){
        $('.go_top').css('bottom', 40 + 'px');
    }

    if($(window).outerWidth() >= 1024 && nowScroll < ftHeight){
        $('.go_top').addClass('pos_abs');
        $('.go_top').css('bottom', ftPos + 'px');
    }

    else{
        $('.go_top').removeClass('pos_abs');
        $('.go_top').css('bottom', 40 + 'px');
    }

    $('window').on('resize', function(){

        if($(window).outerWidth() < 1024){
            $('.go_top').css('bottom', 40 + 'px');
        }

        if($(window).outerWidth() >= 1024 && nowScroll < ftHeight){
            $('.go_top').addClass('pos_abs');
            $('.go_top').css('bottom', ftPos + 'px');
        }
    });
});

$('.mobile_nav_btn a').on('click', function(e){
    e.preventDefault();
    $('.mobile_nav_btn, .mobile_nav_box').toggleClass('active');
    $('body').toggleClass('mobileNavActive');
    // if($('body').hasClass('mobileNavActive')){
    //     lenis.stop();
    // }
    // else{
    //     lenis.start();
    // }
});

$(window).on('resize', function(){
    if($(window).outerWidth() > 1024){
        $('.mobile_nav_btn, .mobile_nav_box').removeClass('active');
        $('body').removeClass('mobileNavActive');
    }
});

    $('.go_top a').on('click', function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 600);
    });

    $('.nav_floor1 > li').on('mouseenter focusin', function(){
        $(this).children('.nav_floor2').stop().slideDown(300);
    });

    $('.nav_floor1 > li').on('mouseleave focusout', function(){
        $(this).children('.nav_floor2').stop().slideUp(300);
    });

    const swiper1 = new Swiper('.main_slide', {
        direction: 'horizontal',
        loop: true,
        speed: 1500,
        autoplay: {
            duration: 2500,
            disableOnInteration: false,
        },

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

    var aboutListAll = document.querySelectorAll('.hideEffectBox');

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

    var lineUpEffectBox = document.querySelector('.mal_txt');
    var lineUpEffectTxt = lineUpEffectBox.querySelectorAll('.lineUpTxt');

        gsap.to(lineUpEffectTxt, {
            y: 0,
            duration: 0.9, 
            stagger: {
                amount: 0.8,
            },
            ease: "power2.out",
            scrollTrigger: {
                trigger: lineUpEffectBox,
                start: '120% bottom', 
                invalidateOnRefresh: true,
            }
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

$(window).on('scroll', function(){
        
      if($(window).scrollTop() > 0){
        $('.go_top').addClass('active');
      }

      else{
        $('.go_top').removeClass('active');
      }

    });

    function activeLineAniMargin(){

        var lineUpHeight = $('.mal_txt').height();

        if($(window).width() <= 1024){
            $('.main_about_list').css({
                'margin-bottom' : lineUpHeight + 50 + 'px',
            });
        }

        else{
            $('.main_about_list').css({
                'margin-bottom' : 0,
            });
        }
    }

    activeLineAniMargin();

    $(window).on('resize', function(){
        activeLineAniMargin();
    });

    window.addEventListener("resize", ScrollTrigger.refresh());

});