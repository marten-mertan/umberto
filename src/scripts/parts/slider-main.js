function initSliderMain(){
    $('.js-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<a class="arrows back"><img src="assets/img/index/back.svg" alt="arrow-left"></img></a>',
        nextArrow: '<a class="arrows next"><img src="assets/img/index/next.svg" alt="arrow-right"></img></a>',
    });
}

export default initSliderMain;