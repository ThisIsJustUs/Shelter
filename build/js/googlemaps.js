// All Google Maps Adjustments are made here
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.4912, lng: -0.2237},
    zoom: 14,
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
    featureType: "poi",
    elementType: "labels",
    stylers: [
      { "visibility": "off" }
    ]
  }
]
