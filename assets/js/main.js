/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *  "use strict" mode on                            *
 *****************************************************
 */
$(window).on('load', function() {
    "use strict";
    var mainSlider = $('#sliderSec');
    var businessSlider = $('#businessSlider');
    var staffSlider = $('#staffSlider');
    var clientSlider = $('#clientSlider');
    var partnerSlider = $('#partnerslider');
    //var partnerSlider = $('#partnerslider');
    var newsSlider = $('#slidernews');
    var blogSlider = $('.blogslider');
    var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
    var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
    var preloader = $('.cssload-box-loading');
    var fancyboxImg = $('.fancybox');
    var MixItUp1 = $('#MixItUp1');
    var accordionFAQ = $("#accordion");
    var anchorTab = $('a[href="#search"]');
    var searchArea = $('#search');
    var searchFields = $('#search > form > input[type="search"]');
    var searchClose = $('#search, #search button.close');
    var comingSoon = $('#demo');
    var gmap_canvas = $('#gmap_canvas');
    /*
    ========================================
     Slider Setting
    ========================================
    */
    // Slider-1
    if (mainSlider.length) {
        mainSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }

    // Slider-2	
    if (businessSlider.length) {
        businessSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }

    // Slider-3
    if (staffSlider.length) {
        staffSlider.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        })
    }

    // Slider-4
    if (clientSlider.length) {
        clientSlider.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        })
    }

    // Slider-5	
    if (partnerSlider.length) {
        partnerSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        })
    }

    // Slider-6
    if (newsSlider.length) {
        newsSlider.owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            center: true,
            nav: true,
            dots: false,
            autoplay: true,
            navText: [prevNav, nextNav],
            onInitialized: customdiv,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 4
                }
            }
        });
    }


    // Slider-7
    if (blogSlider.length) {
        blogSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            autoplay: true,
            navText: [prevNav, nextNav],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }


    /*
    ========================================
     Preloder Setting
    ========================================
    */
    if (preloader.length) {
        preloader.fadeOut();
    }

    /*
    ========================================
     Fancybox Setting
    ========================================
    */

    if (fancyboxImg.length) {
        fancyboxImg.fancybox();
    }

    /*
    ========================================
     MixItUp Setting
    ========================================
    */

    if (MixItUp1.length) {
        MixItUp1.mixItUp({
            selectors: {
                filter: '.filter-1'
            }
        });
    }
    /*
    ========================================
     Accordion Setting
    ========================================
    */

    if (accordionFAQ.length) {
        accordionFAQ.accordion();
    }

    /*
    ========================================
     Search Setting
    ========================================
    */


    anchorTab.on('click', function(event) {
        searchArea.addClass('open');
        searchFields.focus();
    });
    searchClose.on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    /*
    ========================================
     Map Setting
    ========================================
    */
    if (gmap_canvas.length) {
        // Map initialization function Calling 
        initMap();
    }
    if (comingSoon.length) {
        comingSoonTimer();
    }
});

function customdiv() {

    var slidernewsNav = $('#slidernews.owl-theme .owl-nav');
    slidernewsNav.wrap('<div class="custom-nav"></div>');
}


// Contact Map function
function initMap() {
    "use strict";

    var mapDiv = $('#gmap_canvas');

    if (mapDiv.length) {
        var myOptions = {
            zoom: 10,
            scrollwheel: false,
            center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(-37.81614570000001, 144.95570680000003)
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<strong>Envato</strong><br>Envato, King Street, Melbourne, Victoria<br>'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

        infowindow.open(map, marker);
    }
}


/*
========================================
 Timer Setting
========================================
*/
function comingSoonTimer() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2020 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = "<div class='col-md-3 col-sm-3 col-xs-6'><div class='timer'>" + days + "</div><span>days</span></div><div class='col-md-3 col-sm-3 col-xs-6'><div class='timer'>" + hours + "</div><span>hours</span></div><div class='col-md-3 col-sm-3 col-xs-6'><div class='timer'> " + minutes + "</div><span>minutes </span></div> <div class='col-md-3 col-sm-3 col-xs-6'><div class='timer'>" + seconds + "</div><span>seconds </span></div> ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}
/*
 *****************************************************
 *	END OF THE JS DOCUMENT	*
 *****************************************************
 */