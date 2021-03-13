$(document).ready(function () {
  wtswim();
});

//function swimming
function wtswim(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }
  
  $.ajax({
    url: "PHP/whatodoR.php",
    type: "POST",
    data:{
      key: "swim"
    },
    success: function (response) {
      var swimdata = JSON.parse(response);

      for(var n = 0; n < swimdata.length; n++){
        console.log(swimdata[n].swimid);

        $(".wtdrow1").append(
          '<div class="card" style="background-image: url('+ swimdata[n].swimphoto +'); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">'+ swimdata[n].wtdswim +'</h5></div><p class="card-text">'+ swimdata[n].swimdesc +'</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="'+ swimdata[n].swimlong + ' ' + swimdata[n].swimlat +'">Go There</button></form></div></div></div>'
        );
      }
    }
  });

  alert("swim");
}

//function Sightseeing
function wtsight(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  $.ajax({
    url: "PHP/whatodoR.php",
    type: "POST",
    data:{
      key: "sight"
    },
    success: function (response) {
      var sightdata = JSON.parse(response);

      for(var n = 0; n < sightdata.length; n++){
        console.log(sightdata[n].sightid);

        $(".wtdrow1").append(
          '<div class="card" style="background-image: url('+ sightdata[n].sightphoto +'); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">'+ sightdata[n].wtdsight +'</h5></div><p class="card-text">'+ sightdata[n].sightdesc +'</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
        );
      }
    }
  });
  alert("sight");
}

//function Camping
function wtcamp(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //append in rowid1
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Camping/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );

  alert("camp");
}

//function diving
function wtdive(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //append in rowid1
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );

  alert("dive");
}

//function ride at floaties
function wtraf(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //append in rowid1
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );

  alert("raf");
}

//function eat
function wtdeat(){
  var childid1 = document.getElementById("rowid1");
  

  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }
  
  //append in rowid1
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );

  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  
  alert("eat");
}

//function hiking
function wthiking(){
  //Get the row id of the part need to remove
  var childid1 = document.getElementById("rowid1");
  

  //remove the rowid1
  while (childid1.hasChildNodes()){
    childid1.removeChild(childid1.firstChild);
  }

  //append in rowid1
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );
  $(".wtdrow1").append(
    '<div class="card" style="background-image: url(Assets/Photos/Home/WhatToDo/Swimming/1.png); background-repeat: no-repeat;"><div class="card-body d-flex align-items-end"><div class="cont"><div class="cardimg mt-auto"><img src="Assets/LOGO and ICONS/What to do White/swimming.png" alt=""><img src="Assets/LOGO and ICONS/What to do White/diving.png" alt=""></div><div class="row"><img src="Assets/LOGO and ICONS/Icon for Location/loc white.png" alt=""><h5 class="card-title">Secret Haven</h5></div><p class="card-text">A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.</p><form action="Explore.html" method="GET"><button class="btn btn-primary mt-auto" type="submit" name="aval" value="">Go There</button></form></div></div></div>'
  );

  alert("hiking");
}