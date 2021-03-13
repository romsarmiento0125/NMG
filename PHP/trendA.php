<?php
  include('conn.php');

  if(isset($_POST['key'])){
    $condition = $conn->real_escape_string($_POST['key']);
    $nameofplace = $conn->real_escape_string($_POST['nop']);
    $advert = $conn->real_escape_string($_POST['adv']);
    $descrip = $conn->real_escape_string($_POST['desc']);

    if($_POST['key'] == !null){
      $conn->query("UPDATE trending SET trendname = '$nameofplace', trendsub = '$advert', trenddescript = '$descrip' WHERE trending.id = $condition");
      exit('Data has been updated');
    }
    else{
      exit('Update failed');
    }
  }
?>