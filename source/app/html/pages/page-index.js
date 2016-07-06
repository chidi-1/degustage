$(document).ready(function() {

    // слайдер на главной
    if ($('.taste-slider').length){
        $('.taste-slider').owlCarousel({
            margin: 0,
            loop: true,
            nav: false,
            dots:true,
            autoplay: false,
            items: 1,
            autoHeight:true
        })
    }

});
