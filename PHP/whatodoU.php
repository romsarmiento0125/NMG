<?php
  include('conn.php');

  if(isset($_POST['key'])){
    $condition = $conn->real_escape_string($_POST['key']);
    $filter = $conn->real_escape_string($_POST['wtdfilter']);
    $nameofplace = $conn->real_escape_string($_POST['nop']);
    $descrip = $conn->real_escape_string($_POST['desc']);
    $longtitude = $conn->real_escape_string($_POST['wtdlong']);
    $latitude = $conn->real_escape_string($_POST['wtdlat']);
    echo($filter);

    if($_POST['key'] == !null){
      if($filter == "Swimming"){
        $conn->query("UPDATE wtdswimming SET wtdswim = '$nameofplace', swimdesc = '$descrip', swimlong = '$longtitude', swimlat = '$latitude' WHERE wtdswimming.swimid = $condition");
        echo("update swim success");
      }
      elseif($filter == "Sightseeing"){
        $conn->query("UPDATE wtdsightseeing SET wtdsight = '$nameofplace', sightdesc = '$descrip', sightlong = '$longtitude', sightlat = '$latitude' WHERE wtdsightseeing.sightid = $condition");
        echo("update sight success");
      }
    }
    else{
      exit('Update failed');
    }
  }
?>