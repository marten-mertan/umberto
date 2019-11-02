$(function () {

    $('.menu-nav-item').each(function(){
        if($(this).find(".dropdown-item").length > 0){
            $(this).addClass('hasChild');
            $('.hasChild > .category-list__link').addClass('no-link');
            // $(this).find('.category-list__link').attr('onclick', ' ');
        }else{
            // $(this).removeClass('hasClass');
        }
    })

    $(document).on('click', '.no-link', function(e){
        
        // var $this = $(this);
        if ($(window).width() < 480) {
            e.preventDefault();
        }
        $(window).on('resize', function(){
            if ($(window).width() < 480) {
                e.preventDefault();
            }
        });
    });
    


    var HeaderCurrentPos = $(".header-nav-layout").offset().top;
    var windowEl = $(window);
    var main = $(".header-nav-layout");
// var mainHeight = main.height();
// var mainWrap = $(".header-nav-layout");
    windowEl.on('scroll', function () {
        var scrollPos = windowEl.scrollTop();
        if (HeaderCurrentPos <= scrollPos) {

            if ($(window).width() <= 780) {
                main.removeClass("header-nav-fixed");
                $('body').css({
                    'padding-top': 0
                });
                return;
            }

            if (main.hasClass('header-nav-fixed'))
                return;
            main.addClass("header-nav-fixed");
            $('body').css({
                'padding-top': main.height()
            });
        } else {
            main.removeClass("header-nav-fixed");
            // console.log('no');
            $('body').css({
                'padding-top': 0
            });
        }
    });

    $(document).on('click', '[data-toggle="modal"]', function () {
        event.preventDefault();

        $('.modal').each(function(){
            if($('.modal').hasClass('show')){
                // $(this).siblings('.modal').hide();
                $(this).siblings('.modal').removeClass('show');
                // $('.modal-backdrop').removeClass('show');
            }
        });
        
        console.log('click');
    });

    $(document).on('click', '.modal .modal-close', function(){
        $('.modal-backdrop').removeClass('show');
        $('.modal-backdrop').hide();
    });


    /*простые табы*/
    $(document).on('click', '.tabs-menu a', function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $('.tab').find(".tab-content").not(tab).css("display", "none");
        // $(this).parents('.tabs-menu').parent().siblings('.tab').find(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    // $('.c-input, .c-textarea').focus(function () {
    //     $(this).parents('.c-form-card').addClass('is-focus');
    // });
    // $('.c-input, .c-textarea').blur(function () {
    //     if (!$(this).val().trim()) {
    //         $(this).parents('.c-form-card').removeClass('is-focus');
    //     }

    // });

    $('.c-select').SumoSelect();

    $('.header-mobile-menu').on('click', function (e) {
        e.preventDefault();
        $('.header-mobile-popup').toggleClass('is-visible');
        $('.header-mobile-menu').toggleClass('active');
    });

    $('.c-radio-payment__input').on('click', function (e) {
        // e.preventDefault();

        console.log($('#type_delivery_1').is(':checked'))
        if ($('#type_delivery_1').is(':checked')) {
            $('.order-delivery-courier').slideDown(300);
        } else {
            $('.order-delivery-courier').slideUp(300);
        }
    });
    rangeSlider('#slider-price', '#maxbonus');

    $('#bonus-pay').click(function (e) {
        e.preventDefault();
        $('#checkout_form').change();
    })
});

/*range slider*/
function rangeSlider(slide, minValue) {
    $(slide).slider({
        min: 0,
        max: $(minValue).attr('max'),
        range: 'min',
        stop: function (event, ui) {
            $(minValue).val($(slide).slider("values", 0));

        },
        slide: function (event, ui) {
            $(minValue).val($(slide).slider("values", 0));
        }
    });

    $(minValue).on('change', function () {

        var value1 = $(minValue).val();

        // if(parseInt(value1) > parseInt(value2)){
        //     value1 = value2;
        //     $(minValue).val(value1);
        // }
        //console.log('value1: ' + value1);
        $(slide).slider("value", value1);
    });


    // $(maxValue).on('change', function(){
    //
    //     var value1=$(minValue).val();
    //     var value2=$(maxValue).val();
    //
    //     if (value2 > maxDefault) {
    //         value2 = maxDefault;
    //         $(maxValue).val(maxDefault)
    //     }
    //
    //     if(parseInt(value1) > parseInt(value2)){
    //         value2 = value1;
    //         $(maxValue).val(value2);
    //     }
    //     $(slide).slider("values",1,value2);
    // });


// фильтрация ввода в поля
}