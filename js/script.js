function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.95535438394767, lng: -87.72210225143667 },
    zoom: 12,
  });

  var marker = new google.maps.Marker({
    position: { lat: 41.95535438394767, lng: -87.72210225143667 },
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content: "This is where I go to school!",
  });






  
google.maps.event.addDomListener(window, 'load', initMap);
