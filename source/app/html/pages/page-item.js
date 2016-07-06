$(document).ready(function() {

    // слайдер на главной
    if ($('.item-accessory').length){
        $('.item-accessory').owlCarousel({
            margin: 0,
            loop: true,
            nav: true,
            dots:false,
            autoplay: false,
            items: 4,
            autoHeight:true,
            navText: [ , ]
        })
    }

});
