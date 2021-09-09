$(document).ready(function() {
    $('#slider-slick-home').owlCarousel({
        items: 5,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 5
            }
        }
    });

    $('.htp-tabcontent .owl-carousel ').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });

    $('.htp-tabcontent-inv .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
    $('#owl-news').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
    $('#owl-brand-logo').owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1024: {
                items: 6
            }
        }
    });

    function tab_custom(link, content) {
        $(link).on('click', function() {
            var id = $(this).data('id');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(content + '[data-id=' + id + ']').siblings().removeClass('active');
            $(content + '[data-id=' + id + ']').addClass('active');
        });
    }

    if ($('.htp-tablink').length) {
        tab_custom('.htp-tablink', '.htp-tabcontent');
    }
    /*88 */

    if ($('.htp-tablink-inv').length) {
        tab_custom('.htp-tablink-inv', '.htp-tabcontent-inv');
    }

    $("#menu-open-mob").click(function(){
		$(".sub-head").toggleClass("active");
        $("#menu-open-mob").toggleClass("active");
	})
    /* */
    $('#formbaogia').submit(function(e){
        e.preventDefault();
        //var self = $(this);
        $.ajax({
            type: "POST",
                url: 'https://script.google.com/macros/s/AKfycbzytlR5WP4jSZpRAVy4kw817QftJhRZ_sX_UU9Rx9AIpu7i1T_L/exec',
                data: $('#formbaogia').serialize(),
            }).always(function(data) {
            alert('Thông báo thành công');
        })
    });
    /* scroll top */
    
})
//Click event to scroll to top
jQuery(document).on("click", ".back-to-top", function(){
    jQuery('html, body').animate({
        scrollTop: 0			
    }, 800);
});

