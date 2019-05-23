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
    // console.log($('.aboutUs').offset().top); //512.390625
    // console.log($('.dichvu').offset().top); //1790.390625
    // console.log($('.ourProject').offset().top); //2590.390625
    // console.log($('.bangGia').offset().top);    //3728.265625
    // console.log($('.lienHe').offset().top); // 4879.9375
    $('.menutren ul li:nth-child(1) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
    $('.menutren ul li:nth-child(2) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 735
        }, 1000);
    })
    $('.menutren ul li:nth-child(3) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 2060
        }, 1000);
    })
    $('.menutren ul li:nth-child(4) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 2870
        }, 1000);
    })
    $('.menutren ul li:nth-child(5) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 3815
        }, 1000);
    })
    $('.menutren ul li:nth-child(6) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 5150
        }, 1000);
    })
    $('.nutlentren').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
});