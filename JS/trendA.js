$(document).ready(function () {
});

function edittrenddata(){
  var ekey = $('#rankid').text();
  var nameofplace = $('#name').val();
  var advert = $('#advertisement').val();
  var descrip = $('#description').val();
  alert(ekey);

  if(nameofplace == "" || advert == "" || descrip == ""){
    alert('complete the input');
  }
  else{
    $.ajax({
      type: "POST",
      url: "PHP/trendA.php",
      data: {
        key: ekey,
        nop: nameofplace,
        adv: advert,
        desc: descrip
      },
      success: function (response) {
        alert(response);
        location.reload();
      }
    });
  }
}

function edittrendimg(){
  var form = document.getElementById('formimg');
  var timg = new FormData(form);
  var imgid = $('#rankidimg').text();
  timg.append('imgid', imgid);
  alert(imgid);
  alert(timg);
  $.ajax({
    type: "POST",
    url: "PHP/trendAimg.php",
    data: timg,
    contentType: false,
    processData: false,
    success: function (response) {
      alert(response);
      location.reload();
    }
  });  
}
