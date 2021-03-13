var trendingdata;

$(document).ready(function () {
  trenddata();
});

function trenddata(){
  $.ajax({
    url: "PHP/trend.php",
    type: "POST",
    success: function (response) {
      trendingdata = JSON.parse(response);
      for(var n = 10; n > 0; n--){
        var title = "#title" + n;
        var sub = "#sub" + n;
        var image = "#img" + n;
        var descript = "#adline" + n;

        $(title).append(n + " " + trendingdata[n - 1].trendname);
        $(sub).append(trendingdata[n - 1].trendsub);
        $(image).attr("src", trendingdata[n - 1].trendpic);
        $(descript).append(trendingdata[n - 1].trenddescript);
        console.log(trendingdata[n - 1].id);

        var table = "<tr><td>"+ n +"</td><td>"+ trendingdata[n-1].trendname +"</td><td>"+ trendingdata[n-1].trendsub +"</td><td>"+ trendingdata[n-1].trenddescript +"</td><td><img src='"+ trendingdata[n-1].trendpic +"' style='width: 250px;'></td><td><div class='d-flex'><button type='button' onclick='modalval("+ n +")' class='btn btn-warning mx-1' data-toggle='modal' data-target='#edittrend'>Edit</button><button type='button' onclick='modalimg("+ n +")' class='btn btn-primary mx-1' data-toggle='modal' data-target='#changephoto'>Change Photo</button></div></td></tr>";
        $("tbody").append(table);

      } 
    }
  });
}

function modalval(rid){
  $("#rankid").text(rid);
  $("#name").val(trendingdata[rid - 1].trendname);
  $("#advertisement").val(trendingdata[rid - 1].trendsub);
  $("#description").val(trendingdata[rid - 1].trenddescript);
}

function modalimg(rid){
  $("#rankidimg").text(rid);
}