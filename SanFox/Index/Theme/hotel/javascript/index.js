$(document).ready(function () {
   $('#drop').click(function (e) { 
       e.preventDefault();
       $('#drop ul').toggleClass('down');
   }); 
   $('.barMenu').click(function (e) { 
       e.preventDefault();
       $('.dropdown').toggleClass('showUp');
   });
   $(window).scroll(function(){
       if($('html, body').scrollTop() > 300){
            $('.backToTop').addClass('show');
       } else if($('html, body').scrollTop() < 100){
            $('.backToTop').removeClass('show');
       }
   })

   $('.backToTop').click(function (e) { 
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, 1000);
   });

   $(window).scroll(function(){
       if($('html, body').scrollTop() > $('.menu').offset().top){
            $('.forDesktop').addClass('fixed-top');
       } else if ($('html, body').scrollTop() < $('.menu').offset().top){
             $('.forDesktop').removeClass('fixed-top');
   }
   })
});