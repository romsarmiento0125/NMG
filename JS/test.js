$(document).ready(function () {
  getSampData();
});



function getSampData(){
  $.ajax({
    url: 'PHP/testdata2.php',
    method: 'POST',
    success: function (response) {
      $("#dagdag").append(response);
      var mydata = JSON.parse(response);
      console.log(mydata[0]);
      for(var n = 0; n <= 7; n++){
        $("#tableto").append(mydata[n].fname + "<br>");
      }
    }
  });
}