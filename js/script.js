function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: 41.69030, lng: -87.71769}, 
    center: {lat: 41.6902, lng: -87.7176},
    zoom: 15
  });
const icons = {
    ChicagoAg: {
      icon: "media/5b4e0fe274509.image.jpg"
    },
    Midway: {
      icon: "media/38caab_eddba0af63cb4e5b8610cc76f57b735c~mv2.jpg"
    }
  }

  
const features = [
    {
      position: new google.maps.LatLng( 41.69030, -87.71769),
      type: "ChicagoAg",
    },
{
      position: new google.maps.LatLng( 41.78699, -87.75224),
      type: "Midway",
    }
  ]

 for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

initMap();
