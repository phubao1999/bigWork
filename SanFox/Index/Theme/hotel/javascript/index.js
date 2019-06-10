$(document).ready(function () {
    $('#drop').click(function (e) {
        e.preventDefault();
        $('#drop ul').toggleClass('down');
    });
    $('.barMenu').click(function (e) {
        e.preventDefault();
        $('.dropdown').toggleClass('showUp');
    });
    $(window).scroll(function () {
        if ($('html, body').scrollTop() > 300) {
            $('.backToTop').addClass('show');
        } else if ($('html, body').scrollTop() < 100) {
            $('.backToTop').removeClass('show');
        }
    })

    $('.backToTop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($('html, body').scrollTop() > $('.menu').offset().top) {
            $('.forDesktop').addClass('fixed-top');
            $('.forSmallDevice').addClass('fixed-top');
        } else if ($('html, body').scrollTop() < $('.menu').offset().top) {
            $('.forDesktop').removeClass('fixed-top');
            $('.forSmallDevice').removeClass('fixed-top');
        }
    })

    // Owl Carousel Effect
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    });
});