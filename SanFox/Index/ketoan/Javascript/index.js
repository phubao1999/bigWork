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
        $('html, body').animate({'scrollTop':0}, 1000);
    });
});
