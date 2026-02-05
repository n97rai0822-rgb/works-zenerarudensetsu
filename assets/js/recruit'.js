'use strict'
{
    $(function(){
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 0,
            speed: 6000,
            cssEase: "linear",
            slidesToShow: 4,
            swipe: false,
            arrows: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive:[
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    });
}