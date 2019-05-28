$(document).ready(function () {
    $('.nutmenu').click(function (e) { 
        e.preventDefault();
        $('.menu').toggleClass('leftMove');
    });
    $(window).scroll(function(){
        if($('html, body').scrollTop()>430){
            $('.nutlentren').addClass('hienra');
            $('.menu .logo img').addClass('nholai');
            $('._1').addClass('nholai2');
        }
        else if ($('html, body').scrollTop()<=150){
           $('.nutlentren').removeClass('hienra');
           $('.menu .logo img').removeClass('nholai');
           $('._1').removeClass('nholai2');
        }
    });
    $('.nutlentren').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({'scrollTop':0}, 1000);
    });
    $('.menu ul li:nth-child(1) a').click(function (e) { 
        e.preventDefault();        
        $(this).toggleClass('biendoi');
        $('html, body').animate({'scrollTop':0}, 1000);
    });
    $('.menu ul li:nth-child(2) a').click(function (e) { 
        e.preventDefault();        
        $(this).toggleClass('biendoi');
        $('html, body').animate({
            scrollTop: $('.gioithieu').offset().top - 80
        }, 1000);
    });
    $('.menu ul li:nth-child(3) a').click(function (e) { 
        e.preventDefault();        
        $(this).toggleClass('biendoi');
        $('html, body').animate({
            scrollTop: $('.dichvu').offset().top - 80
        }, 1000);
    });
    $('.menu ul li:nth-child(4) a').click(function (e) { 
        e.preventDefault();        
        $(this).toggleClass('biendoi');
        $('html, body').animate({
            scrollTop: $('.banggia').offset().top - 80
        }, 1000);
    });
    $('.menu ul li:nth-child(5) a').click(function (e) { 
        e.preventDefault();        
        $(this).toggleClass('biendoi');
        $('html, body').animate({
            scrollTop: $('.tintuc').offset().top - 80
        }, 1000);
    });
    $('.menu ul li:nth-child(6) a').click(function (e) { 
        e.preventDefault();        
        $(this).toggleClass('biendoi');
        $('html, body').animate({
            scrollTop: $('.lienhe').offset().top - 80
        }, 1000);
    });
});