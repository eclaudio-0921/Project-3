function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.95535438394767, lng: -87.72210225143667 },
    zoom: 12,
  });









  
google.maps.event.addDomListener(window, 'load', initMap);
