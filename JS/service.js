$(document).ready(function () {
  
});

function consto(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  var childid2 = document.getElementById("rowid2");
  var childid3 = document.getElementById("rowid3");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //remove the rowid2
  while (childid2.hasChildNodes()){
    childid2.removeChild(childid2.firstChild);
  }

  //remove the rowid3
  while (childid3.hasChildNodes()){
    childid3.removeChild(childid3.firstChild);
  }

  //append in rowid1
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/CovenienceStore/1.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Alfamart</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/CovenienceStore/2.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Alfamart</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/CovenienceStore/3.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">7 Eleven</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );

  alert("Convenience Store");
}

function pharma(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  var childid2 = document.getElementById("rowid2");
  var childid3 = document.getElementById("rowid3");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //remove the rowid2
  while (childid2.hasChildNodes()){
    childid2.removeChild(childid2.firstChild);
  }

  //remove the rowid3
  while (childid3.hasChildNodes()){
    childid3.removeChild(childid3.firstChild);
  }

  //append in rowid1
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/Pharmacy/1.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Cymbelyn Pharmacy</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/Pharmacy/2.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Farmacia Garay</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/Pharmacy/3.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Generic Medecines</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );

  //append in rowid2
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/Pharmacy/4.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Jess-Nor Pharmacy</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/Pharmacy/5.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">The Generics Pharmacy</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  alert("Pharmacy");
}

function bank(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  var childid2 = document.getElementById("rowid2");
  var childid3 = document.getElementById("rowid3");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //remove the rowid2
  while (childid2.hasChildNodes()){
    childid2.removeChild(childid2.firstChild);
  }

  //remove the rowid3
  while (childid3.hasChildNodes()){
    childid3.removeChild(childid3.firstChild);
  }

  //append in rowid1
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/Bank/1.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">BPI</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/Bank/2.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">BDO</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  alert("Bank");
}

function gasStation(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  var childid2 = document.getElementById("rowid2");
  var childid3 = document.getElementById("rowid3");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //remove the rowid2
  while (childid2.hasChildNodes()){
    childid2.removeChild(childid2.firstChild);
  }

  //remove the rowid3
  while (childid3.hasChildNodes()){
    childid3.removeChild(childid3.firstChild);
  }

  //append in rowid1
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/GasStation/1.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Iras Gas Station</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/GasStation/2.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Phoenix</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/GasStation/3.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Texas</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );

  //append in rowid2
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/GasStation/4.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Petron</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  alert("Gas Station");
}

function policeStation(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  var childid2 = document.getElementById("rowid2");
  var childid3 = document.getElementById("rowid3");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //remove the rowid2
  while (childid2.hasChildNodes()){
    childid2.removeChild(childid2.firstChild);
  }

  //remove the rowid3
  while (childid3.hasChildNodes()){
    childid3.removeChild(childid3.firstChild);
  }

  //append in rowid1
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/NoPic.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Police Station</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  alert("Police Station");
}

function hospi(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  var childid2 = document.getElementById("rowid2");
  var childid3 = document.getElementById("rowid3");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //remove the rowid2
  while (childid2.hasChildNodes()){
    childid2.removeChild(childid2.firstChild);
  }

  //remove the rowid3
  while (childid3.hasChildNodes()){
    childid3.removeChild(childid3.firstChild);
  }

  //append in rowid1
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/NoPic.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">General Hospital</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  alert("Hospital");
}

function publicMarket(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  var childid2 = document.getElementById("rowid2");
  var childid3 = document.getElementById("rowid3");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //remove the rowid2
  while (childid2.hasChildNodes()){
    childid2.removeChild(childid2.firstChild);
  }

  //remove the rowid3
  while (childid3.hasChildNodes()){
    childid3.removeChild(childid3.firstChild);
  }

  //append in rowid1
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/PublicMarket/1.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Bigte Public Market</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Services/PublicMarket/2.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">New Public Market</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  alert("Public Market");
}

function snacks(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  var childid2 = document.getElementById("rowid2");
  var childid3 = document.getElementById("rowid3");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //remove the rowid2
  while (childid2.hasChildNodes()){
    childid2.removeChild(childid2.firstChild);
  }

  //remove the rowid3
  while (childid3.hasChildNodes()){
    childid3.removeChild(childid3.firstChild);
  }

  //append in rowid1
  $(".serrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/NoPic.png); background-repeat: no-repeat;"><div class="card-body"><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Snacks</h5></div><span>Poblacion</span><form action="Explore.html" method="GET"><button class="btn btn-primary" type="submit" name="aval" value="">Go There</button></form></div></div>'
  );
  alert("Snacks");
}