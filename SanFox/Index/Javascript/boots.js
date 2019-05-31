$(document).ready(function () {
    // console.log('abc');
    $('span.carousel-control-prev-icon').click(function (e) { 
        e.preventDefault();
      
    });
    $('a.carousel-control-next').click(function (e) { 
        e.preventDefault();
        
    });
    //ok
    $('.carousel').carousel({
        interval: 3500
      })

});