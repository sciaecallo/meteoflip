var map;
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.SATELLYTE
  };
  map=new google.maps.Map(document.getElementById("map"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var marker=new google.maps.Marker({
              position:latlng
            });
            marker.setMap(map);
            map.setCenter(latlng);

        }, function() {
            alert('Enable Geolocation please.');
        });
    } else {
        alert("La geolocalizzazione non è supportata dal tuo browser. Prova a scaricare una versione più recente ;)");
    }
};

function returnPosition (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
};

$(function() {
    var $button = $('.start-flip'),
        $container = $('.flip-container'),
        $closeFlip = $('.end-flip');

    $button.on('click', function(e) {
        $container.addClass('flip');
        e.stopPropagation();

        $closeFlip.one('click', function(e) {
            e.stopPropagation();
            $container.removeClass('flip');
        });
    });

    getLocation();
    // alert(returnPosition(latitude));

});