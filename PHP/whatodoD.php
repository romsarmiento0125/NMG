<?php
  include('conn.php');

  if(isset($_POST['wtddelkey'])){
    $condition = $conn->real_escape_string($_POST['wtddelkey']);
    $filter = $conn->real_escape_string($_POST['wtddelfilter']);
    echo($filter);

    if($_POST['wtddelkey'] == !null){
      if($filter == "Swimming"){
        $conn->query("DELETE FROM wtdswimming WHERE wtdswimming.swimid = $condition");
        echo("delete swim success");
      }
      elseif($filter == "Sightseeing"){
        $conn->query("DELETE FROM wtdsightseeing WHERE wtdsightseeing.sightid = $condition");
        echo("delete sight success");
      }
    }
    else{
      exit('Update failed');
    }
  }
?>