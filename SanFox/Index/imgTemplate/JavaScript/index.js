$(document).ready(function () {
    new WOW().init();
});
$(document).ready(function () {
    // console.log('aaa');
    $('.menu .phai li a').click(function (e) { 
        e.preventDefault();
        $('.menuChild').toggleClass('hienra');
    });
    $('.backToTop').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});

$(document).ready(function () {
    $('.cacanh').isotope({
        itemSelector: 'li'
    });
});

$(document).ready(function () {
    $(window).scroll(function () { 
        if($('html, body').scrollTop()>430){
            $('i.fas.fa-long-arrow-alt-up').addClass('hienra');
        } else if ($('html, body').scrollTop()<=100){
            $('i.fas.fa-long-arrow-alt-up').removeClass('hienra');
        }
    });
});