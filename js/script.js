var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: 41.69030, lng: -87.71769}, 
    center: {lat: 41.6902, lng: -87.7176},
    zoom: 15
  });

  var school = new google.maps.Marker({
    position: { lat:  41.69030, lng: -87.71769},
    map: map
    icon: {url"media/5b4e0fe274509.image.jpg"},
  });

  var Midway = new google.maps.Marker({
    position: { lat: 41.78699, lng: -87.75224 },
    map: map
    icon: {url"media/38caab_eddba0af63cb4e5b8610cc76f57b735c~mv2.jpg"},
  });

  var distPoints = [
    { lat: 41.69030, lng: -87.71769},
    { lat: 41.78699, lng: -87.75224  },
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
