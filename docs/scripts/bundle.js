/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/scripts/parts/slider-main.js
function initSliderMain(){
    $('.js-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<a class="arrows back"><img src="assets/img/index/back.svg" alt="arrow-left"></img></a>',
        nextArrow: '<a class="arrows next"><img src="assets/img/index/next.svg" alt="arrow-right"></img></a>',
    });
}

/* harmony default export */ var slider_main = (initSliderMain);
// CONCATENATED MODULE: ./src/scripts/parts/basket-special-slider.js
function initBasketSpecialSlider(){
    $('.js-basket-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        infinite: false,
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

/* harmony default export */ var basket_special_slider = (initBasketSpecialSlider);
// CONCATENATED MODULE: ./src/scripts/parts/slider-catalog.js
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

/* harmony default export */ var slider_catalog = (initSliderCatalog);
// CONCATENATED MODULE: ./src/scripts/index.js




window.onload = function() {
    slider_main();
    basket_special_slider();
    slider_catalog();
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

/***/ })
/******/ ]);