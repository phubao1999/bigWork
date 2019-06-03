$(document).ready(function () {
    new WOW().init();
});
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    })
});
$(document).ready(function () {
    $(window).scroll(function () { 
        if($('html, body').scrollTop()>430){
            $('.menutren').addClass('abc');
            $('.nutlentren').addClass('hienra');
        }
        else if($('html, body').scrollTop()<=100){
            $('.menutren').removeClass('abc');
            $('.nutlentren').removeClass('hienra');
        }
    });
    $('.menutren ul li:nth-child(1) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
    $('.menutren ul li:nth-child(2) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.aboutUs').offset().top - 95
        }, 1000);
    })
    $('.menutren ul li:nth-child(3) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.dichvu').offset().top - 55
        }, 1000);
    })
    $('.menutren ul li:nth-child(4) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.ourProject').offset().top - 55
        }, 1000);
    })
    $('.menutren ul li:nth-child(5) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.bangGia').offset().top - 75  
        }, 1000);
    })
    $('.menutren ul li:nth-child(6) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.lienHe').offset().top - 55
        }, 1000);
    })
    $('.nutlentren').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
    $('nav h1').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
    
});