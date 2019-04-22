$(document).ready(function () {
    console.log('OK');
    $(window).scroll(function () { 
        if($('html, body').scrollTop()>430){
            $('.menutren').addClass('nentrang');
            $('.logo').addClass('logoden');
            $('.chutrang').addClass('chuden');
        }   else if ($('html, body').scrollTop()<=100){
            $('.menutren').removeClass('nentrang');
            $('.logo').removeClass('logoden');
            $('.chutrang').removeClass('chuden');
        }
    });     //Xong addClass va scrollTop
    // Xử lý hiệu ứng Dịch CHuyển
    $('.menutren ul li:nth-child(1) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: 407}, 1000);
    });
    $('.menutren ul li:nth-child(2) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: 1150}, 1000);
    });
    $('.menutren ul li:nth-child(3) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: 1790}, 1000);
    });
    $('.menutren ul li:nth-child(4) a').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: 2660}, 1000);
    });
    $('.logo').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0}, 1000);
    });

});


