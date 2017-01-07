function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.93906829, lng: 30.32128086},
    zoom: 17,
    scrollwheel: false,
    styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
  });
  var image = {
    url: 'img/map-marker1.png',
    // size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(-60, 0),
    // anchor: new google.maps.Point(0, 0)
  };
  var marker = new google.maps.Marker({
    position: {lat: 59.9387942, lng: 30.3230833},
    map: map,
    // title: 'Hello World!'
    icon: image
  });
}
