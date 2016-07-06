$(document).ready(function() {

    // слайдер в рецептах
    if ($('.recipe-slider').length){
        $('.recipe-slider').owlCarousel({
            margin: 0,
            loop: true,
            nav: true,
            dots:false,
            autoplay: false,
            items: 2,
            autoHeight:true,
            navText: [ , ]
        })
    }

    // слайдер в рецепте
    if ($('.recipe-item-slider').length){
        $('.recipe-item-slider').owlCarousel({
            margin: 20,
            loop: true,
            nav: true,
            dots:false,
            autoplay: false,
            items: 4,
            autoHeight:false,
            navText: [ , ]
        })
    }

});
