function initSliderCatalog(){
    $('.js-slider-catalog').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<a class="arrows back"><img src="assets/img/index/back.svg" alt="arrow-left"></img></a>',
        nextArrow: '<a class="arrows next"><img src="assets/img/index/next.svg" alt="arrow-right"></img></a>',
    });
}

export default initSliderCatalog;