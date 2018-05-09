// All Google Maps Adjustments are made here
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2093},
    zoom: 15,
    default: null,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_TOP},
    clickableIcons: false,
    styles: styles
  });
}

// Style for Map
var styles = [
  {
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { "visibility": "off" }
    ]
  }
]
