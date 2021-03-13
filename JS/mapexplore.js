var queryParams = new URLSearchParams(window.location.search);
var aval = queryParams.get('aval');
var zoomval = 13;

if(aval == null){
    aval = "121.03826 14.90541";
}

var coordi = aval.split(" ");
var longval = coordi[0];
var latval = coordi[1];

if(longval != 121.03826 && latval != 14.90541){
    zoomval = 16;
}
else{
    longval = 121.05919;
    latval = 14.90915;
    zoomval = 13;
}

// if(aval == null){
//     longval = 121.03826;
//     latval = 14.90541;
//     alert("asa null");
// }

// else if(aval == "bakas")
// {
//     alert("bakas");
//     longval = 121.06862;
//     latval = 14.91396;
//     zoomval = 16
// }

// else if(aval == "japok")
// {
//     alert("japok")
//     longval = 121.05919;
//     latval = 14.90915;
//     zoomval = 16
// }

// else{
//     longval = 121.03826;
//     latval = 14.90541;
//     alert("asa else");
// }

mapboxgl.accessToken = 'pk.eyJ1IjoianVhbnRvb28zIiwiYSI6ImNrZ3diM2x5azAwenkydG84b2V4bDc2amUifQ.KRvCcNrPyPzESMZlJ8aRTQ';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longval, latval],
      zoom: zoomval
  });

  map.addControl(
      new MapboxDirections({
          accessToken: mapboxgl.accessToken
      }),
      'top-left'
);

