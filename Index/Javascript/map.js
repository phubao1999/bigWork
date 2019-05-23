function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(16.048767, 108.241488),
        zoom: 16,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}