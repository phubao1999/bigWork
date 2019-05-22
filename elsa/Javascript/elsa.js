$(document).ready(function () {
    $(window).scroll(function () { 
        if($('html, body').scrollTop()>430){
            $('.menutren').addClass('abc');
        }
        else if($('html, body').scrollTop()<=100){
            $('.menutren').removeClass('abc');
        }
    });

    function initialize (){
        var mapOptions = {
            center: new google.maps.LatLng(16.048855, 108.241467),
            zoom: 8
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        google.maps.event.addDomListener(window, 'load', initialize);
    }
});