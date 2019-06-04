$(document).ready(function () {
    $('.nutmenu i.fas.fa-bars.d-none').click(function (e) { 
        e.preventDefault();
        $('.ndmenu').toggleClass('rightMove');
    });
    $(window).scroll(function(){
        if($('html, body').scrollTop()>430){
            $('.menu').addClass('bg-lightaaa');
            $('.menu ul li a').addClass('chuDen');
            $('.menu .logo img').addClass('nhoLai');
            $('.nutlentren').addClass('backToTop');
        }
        else if($('html, body').scrollTop()<= 100){
            $('.menu').removeClass('bg-lightaaa');
            $('.menu ul li a').removeClass('chuDen');
            $('.menu .logo img').removeClass('nhoLai');
            $('.nutlentren').removeClass('backToTop');
        } 
    });
    $('.nutlentren').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({'scrollTop': 0}, 1000);
    });
});

// Animate Scroll Function Here
$(document).ready(function () {
    $('.menu ul li:nth-child(1) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('.menu ul li:nth-child(2) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.gioithieu').offset().top - 60
        }, 1000);
    });
    $('.menu ul li:nth-child(3) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('._5').offset().top - 60
        }, 1000);
    });
    $('.menu ul li:nth-child(4) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('._7').offset().top - 60
        }, 1000);
    });
    $('.menu ul li:nth-child(5) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('._8').offset().top - 60
        }, 1000);
    });
    $('.menu ul li:nth-child(6) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('._9').offset().top - 60
        }, 1000);
    });
});