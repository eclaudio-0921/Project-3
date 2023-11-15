var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: 41.8741, lng: -87.6285}, 
    center: {lat: 41.8784, lng: -87.6283},
    zoom: 15
  });

  var school = new google.maps.Marker({
    position: { lat: 41.8730, lng: -87.6279},
    map: map
  });

  var reckless = new google.maps.Marker({
    position: { lat: 41.882324790101684, lng: -87.62668825420475 },
    map: map
  });

  var distPoints = [
    { lat: 41.8730, lng: -87.6279 },
    { lat: 41.882051955922336, lng: -87.62782201616926 },
    { lat: 41.88206477020562, lng: -87.62670524486201 },
    { lat: 41.882324790101684, lng: -87.62668825420475 },
  ];

  var dist = new google.maps.Polyline({
    path: distPoints,
    geodesic: true,
    strokeColor: "#FE5F55",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  dist.setMap(map);

}

window.initMap = initMap;
