$(document).ready(function () {
  myID = document.getElementById("shrtct");

  var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 1500) {
      myID.className = "shrtop show container-fluid"
    } else {
      myID.className = "shrtop hide"
    }
  };

  window.addEventListener("scroll", myScrollFunc);
});