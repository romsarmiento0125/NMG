<?php
  include('conn.php');
  //get data in table wtdswimming 
  if($_POST["key"] == "swim"){
    $query = "SELECT * FROM wtdswimming";
    $result = @mysqli_query($conn, $query);
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    printf(json_encode($rows));
  }
  //get data in table wtdsightseeing
  elseif($_POST["key"] == "sight"){
    $query = "SELECT * FROM wtdsightseeing";
    $result = @mysqli_query($conn, $query);
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    printf(json_encode($rows));
  }
  
    
?>