var swimdata; //variable use in function wtdswimnamechange
var sightdata; // variable use in function wtdsightnamechange
var wtdfilter; // variable use to set the value for condition in editing the data
$(document).ready(function () {
  wtdswimnamechange(false);
});


//change the name and get the data from database
function wtdswimnamechange(x){
  alert("swimadmin");
  //to change the text in add place
  $("#wtdplacename").text("Swimming");
  //to change the text in admin filter
  $("#mwtdplacename").text("Swimming");

  // to set the value for condition in editing the data
  wtdfilter = "Swimming";

  //Get the table id of the part need to remove
  var tablebody = document.getElementById("tableid");

  //remove the child from table
  while (tablebody.hasChildNodes()){
    tablebody.removeChild(tablebody.firstChild);
  }

  //get the data from data base and put it what to do admin
  $.ajax({
    url: "PHP/whatodoR.php",
    type: "POST",
    data:{
      key: "swim"
    },
    success: function (response) {
      swimdata = JSON.parse(response);

      // swimming
      for(var n = 0; n < swimdata.length; n++){
        console.log(swimdata[n].wtdswim);

        var stable = "<tr><td>"+ swimdata[n].swimid + "</td><td>"+ swimdata[n].wtdswim +"</td><td>"+ swimdata[n].swimdesc +"</td><td>"+ swimdata[n].swimlong +"</td><td>"+ swimdata[n].swimlat +"</td><td><img src='"+ swimdata[n].swimphoto +"'style='width: 100px;'></td><td><div class='d-flex'><button type='button' onclick='smodalval("+ n +")' class='btn btn-warning mx-1' data-toggle='modal' data-target='#editwtddata'>Edit</button><button type='button' onclick='smodalimg("+ n +")' class='btn btn-primary mx-1' data-toggle='modal' data-target='#changewtdphoto'>Change Photo</button><button type='button' onclick='smodaldel("+ n +")' class='btn btn-danger mx-1' data-toggle='modal' data-target='#deletedata'>Delete</button></div></td></tr>";

        //place the table in table
        $("tbody").append(stable);
      }
    }
  });

  if(x){
    location.reload();
  }
}


//change the name and get the data from database
function wtdsightnamechange(){
  alert("sight");
  //to change the text in add place
  $("#wtdplacename").text("Sightseeing");
  //to change the text in admin filter
  $("#mwtdplacename").text("Sightseeing");

  // to set the value for condition in editing the data
  wtdfilter = "Sightseeing";

  //Get the table id of the part need to remove
  var tablebody = document.getElementById("tableid");

  //remove the child from table
  while (tablebody.hasChildNodes()){
    tablebody.removeChild(tablebody.firstChild);
  }

  //get the data from data base and put it what to do admin
  $.ajax({
    url: "PHP/whatodoR.php",
    type: "POST",
    data:{
      key: "sight"
    },
    success: function (response) {
      sightdata = JSON.parse(response);

      // sightseeing
      for(var n = 0; n < sightdata.length; n++){
        console.log(sightdata[n].wtdsight);

        var sighttable = "<tr><td>"+ sightdata[n].sightid + "</td><td>"+ sightdata[n].wtdsight +"</td><td>"+ sightdata[n].sightdesc +"</td><td>"+ sightdata[n].sightlong +"</td><td>"+ sightdata[n].sightlat +"</td><td><img src='"+ sightdata[n].sightphoto +"'style='width: 100px;'></td><td><div class='d-flex'><button type='button' onclick='smodalval("+ n +")' class='btn btn-warning mx-1' data-toggle='modal' data-target='#editwtddata'>Edit</button><button type='button' onclick='smodalimg("+ n +")' class='btn btn-primary mx-1' data-toggle='modal' data-target='#changewtdphoto'>Change Photo</button><button type='button' onclick='smodaldel("+ n +")' class='btn btn-danger mx-1' data-toggle='modal' data-target='#deletedata'>Delete</button></div></td></tr>";

        //place the table in table
        $("tbody").append(sighttable);
      }
    }
  });
}


// add data in database
function wtdadd(){
  var form = $('#wtdform')[0]; 
  var form_data = new FormData(form);
  // placeid is use as a condition to know which table in the database where to make insert
  var placeid = $('#mwtdplacename').text();
  form_data.append('placeid', placeid);
  alert(form_data);
  $.ajax({
      type: 'POST',
      url: 'PHP/whatodoA.php',
      data: form_data,
      contentType: false,
      processData:false,
      success: function(response){
        alert(response);
        wtdswimnamechange(true);
      }
  });
}

// edit the part of what to do
function wtdupdatedata() {
  alert("updatedata");
  var wtdfil = $("#wtdfilter").text();
  var wtdkey = $("#rankid").text();
  var wtdnop = $("#name").val();
  var wtddesc = $("#description").val();
  var wtdlongti = $("#longti").val();
  var wtdlat = $("#lati").val();

  if(wtdnop == "" || wtddesc == "" || wtdlongti == "" || wtdlat == ""){
    alert('complete the input');
  }
  else{
    $.ajax({
      type: "POST",
      url: "PHP/whatodoU.php",
      data: {
        wtdfilter: wtdfil,
        key: wtdkey,
        nop: wtdnop,
        desc: wtddesc,
        wtdlong: wtdlongti,
        wtdlat: wtdlat
      },
      success: function (response) {
        alert(response);
        location.reload();
      }
    });
  }
}

// update what to do photo in database
function wtdupdatephoto(){
  var form = $('#formimg')[0]; 
  var form_img = new FormData(form);
  // placeid is use as a condition to know which table in the database where to make insert
  var placeid = $('#rankidimg').text();
  var placefilter = $('#wtdimgfilter').text();
  form_img.append('placeid', placeid);
  form_img.append('rankidimg', placefilter);
  alert(form_img);
  $.ajax({
      type: 'POST',
      url: 'PHP/whatodoUimg.php',
      data: form_img,
      contentType: false,
      processData:false,
      success: function(response){
        alert(response);
      }
  });
}

// delete what to do data
function wtddeletedata(){
  alert("delete data");
  var wtddelfilter = $("#wtddelfilter").text();
  var wtddelkey = $("#rankiddel").text();

  $.ajax({
    type: "POST",
    url: "PHP/whatodoD.php",
    data:{
      wtddelfilter: wtddelfilter,
      wtddelkey: wtddelkey
    },
    success: function (response) {
      alert(response);
      location.reload();
    }
  });
}

// this function is the one who insert value when you open the edit text modal
function smodalval(sid){
  if(wtdfilter == "Swimming"){
    $("#wtdfilter").text(wtdfilter);
    $("#rankid").text(swimdata[sid].swimid);
    $("#name").val(swimdata[sid].wtdswim);
    $("#description").val(swimdata[sid].swimdesc);
    $("#longti").val(swimdata[sid].swimlong);
    $("#lati").val(swimdata[sid].swimlat);
  }
  else if(wtdfilter == "Sightseeing"){
    $("#wtdfilter").text(wtdfilter);
    $("#rankid").text(sightdata[sid].sightid);
    $("#name").val(sightdata[sid].wtdsight);
    $("#description").val(sightdata[sid].sightdesc);
    $("#longti").val(sightdata[sid].sightlong);
    $("#lati").val(sightdata[sid].sightlat);
  }
  
}

// this function is the one who insert value when you open the edit img modal
function smodalimg(sid){
  if(wtdfilter == "Swimming"){
    $("#wtdimgfilter").text(wtdfilter);
    $("#rankidimg").text(swimdata[sid].swimid);
  }
  else if(wtdfilter == "Sightseeing"){
    $("#wtdimgfilter").text(wtdfilter);
    $("#rankidimg").text(sightdata[sid].sightid);
  }
}

// this function is the one who insert value when you open the delete modal
function smodaldel(sid){
  if(wtdfilter == "Swimming"){
    $("#wtddelfilter").text(wtdfilter);
    $("#rankiddel").text(swimdata[sid].swimid);
    $("#wtddelnop").text(swimdata[sid].wtdswim);
  }
  else if(wtdfilter == "Sightseeing"){
    $("#wtddelfilter").text(wtdfilter);
    $("#rankiddel").text(sightdata[sid].sightid);
    $("#wtddelnop").text(sightdata[sid].wtdsight);
  }
}