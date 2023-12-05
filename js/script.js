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
    title: "Marquette Park",
	      icon: {
    url:"media/marquette.png",
	      scaledSize: new google.maps.Size(86,80),
	},
	animation: google.maps.Animation.DROP
  });

  var Midway = new google.maps.Marker({
    position: { lat: 41.78699, lng: -87.75224 },
    map: map
    title: "Marquette Park",
	      icon: {
    url:"media/marquette.png",
	      scaledSize: new google.maps.Size(86,80),
	},
	animation: google.maps.Animation.DROP
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
