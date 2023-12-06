function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: 41.69030, lng: -87.71769}, 
    center: {lat: 41.6902, lng: -87.7176},
    zoom: 15
  });
 
  icon: school {
url:"media/5b4e0fe274509.image.png"
},
  icon: Midway {
url:"media/image.png"
},
 
  var school = new google.maps.Marker({
    position: { lat:  41.69030, lng: -87.71769},
    map: map
  });

  var Midway = new google.maps.Marker({
    position: { lat: 41.78699, lng: -87.75224 },
    map: map
  });

  var distPoints = [
    { lat: 41.69030, lng: -87.71769},
    { lat: 41.691319, lng: -87.717770},
    { lat: 41.690945, lng: -87.739763 },
    { lat: 41.782556, lng: -87.742411 },
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
