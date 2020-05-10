$(function () {

    $('.sleq').slick({
        infinite: false,
        dots: true,
        arrows: false,
        dotsClass: 'sldotq',
    });
    $('.main-slide').slick({  
        speed: 200,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        dotsClass: 'nav-main_slide',
    })
})