$(document).ready(function () {
   $('.menuCon').click(function (e) { 
       e.preventDefault();
       $('.menuResponsiveLeft').addClass('effect1');
       $('.menuResponsive').addClass('effect3');
       $('.content').addClass('effect4');
   });
   $('.searchTool').click(function (e) { 
       e.preventDefault();
       $('.menuResponsiveRight').addClass('effect2');
       $('.menuResponsive').addClass('effect3');
       $('.content').addClass('effect4');
   });
   $('.fas.fa-times').click(function (e) { 
       e.preventDefault();
        $('.menuResponsiveLeft').removeClass('effect1');
        $('.menuResponsiveRight').removeClass('effect2');
        $('.menuResponsive').removeClass('effect3');
        $('.content').removeClass('effect4');
   }); 
   
});