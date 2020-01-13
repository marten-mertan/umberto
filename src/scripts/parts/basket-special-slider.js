function initBasketSpecialSlider(){
    $('.js-basket-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        useTransform: false,
        prevArrow: '<a class="arrows back"><img src="assets/img/arrow-left.svg" alt="arrow-left"></img></a>',
        nextArrow: '<a class="arrows next"><img src="assets/img/arrow-right.svg" alt="arrow-right"></img></a>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });
}

export default initBasketSpecialSlider;