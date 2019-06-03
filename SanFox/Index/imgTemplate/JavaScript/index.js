$(document).ready(function () {
    // console.log('aaa');
    $('.menu .phai li a').click(function (e) { 
        e.preventDefault();
        $('.menuChild').toggleClass('hienra');
    });
});

$(document).ready(function () {
    $('.cacanh').isotope({
        itemSelector: 'li'
    });
});