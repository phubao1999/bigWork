function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(16.048767, 108.241488),
        zoom: 16,
    };
    var uluru = {lat: 16.048767, lng: 108.241488};
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    })
}