import initSliderMain from './parts/slider-main';
import initBasketSpecialSlider from './parts/basket-special-slider';
import initSliderCatalog from './parts/slider-catalog';

window.onload = function() {
    initSliderMain();
    initBasketSpecialSlider();
    initSliderCatalog();
    $(document).on('click', '.btn-ingredients', function () {
        $('.slick-track').css('transform', 'none');
        $('.slick-list').css('transform', 'none');
    });
    $(document).on('click', '.js-basket-btn', function (e) {
        e.preventDefault();
        if (parseInt($('#all_cart_summ').text()) < 600){
            $('.js-basket-alert').css('opacity', '1').css('top', '80px');
        }
    });
    $(document).on('click', function (e) {
        if ($('.js-basket-alert').css('opacity')==1){
            $('.js-basket-alert').css('opacity', '0').css('top', '100px');
        }
    });
};