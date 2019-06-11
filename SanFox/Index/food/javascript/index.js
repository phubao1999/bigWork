$(document).ready(function () {
    $('.bar').click(function (e) { 
        e.preventDefault();
        $('.menuRespon').addClass('dirabentrai');
        $('.nutClose').addClass('showUp');
    });
    $('.nutClose').click(function (e) { 
        e.preventDefault();
        $('.menuRespon').removeClass('dirabentrai');
        $(this).removeClass('showUp');
        $(this).removeClass('showup');
        $('.packAge').removeClass('dirabenphai');
    });
    $('.bills').click(function (e) { 
        e.preventDefault();
        $('.packAge').addClass('dirabenphai');
        $('.nutClose').addClass('showup');
    });
    $('.danhMuc').click(function (e) { 
        e.preventDefault();
        $('._4').toggleClass('show');
    });
    // Effect For Menu
    $('.carousel').carousel({
        interval: 2000
    })
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
    });
});

$(document).ready(function () {
    $(window).scroll(function(){
        if($('html, body').scrollTop() >430 ){
            $('.nutBackTop').addClass('move');
        } else if ($('html, body').scrollTop() <100){
            $('.nutBackTop').removeClass('move');
        }
    })
    $('.nutBackTop').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});   // Back To Top Buttton

$(document).ready(function () {
    $(window).scroll(function(){
        if($('html, body').scrollTop() > $('._3').offset().top){
            $('._3 .container-fluid').addClass('fixed-top');
        } else if($('html, body').scrollTop() < $('._3').offset().top){
            $('._3 .container-fluid').removeClass('fixed-top');
        }
    })
});  // Effect Menu

$(document).ready(function () {
    $('._3 .menulv1 li:nth-child(2) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('._3 .menulv1 li:nth-child(3) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.hero-header').offset().top
        }, 1000);
    });
    $('._3 .menulv1 li:nth-child(4) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('._8').offset().top - 105
        }, 1000);
    });
    $('._3 .menulv1 li:nth-child(5) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('._10').offset().top - 105
        }, 1000);
    });
    $('._3 .menulv1 li:nth-child(6) a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('footer').offset().top - 105
        }, 1000);
    });
});   // Animate Effect
