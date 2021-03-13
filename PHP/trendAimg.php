<?php
  include("conn.php");

  $condition = ($_POST['imgid']);
  $timgname = $_FILES['image']['name'];
  if($timgname == null){
    exit("Change photo failed");
  }
  else{
    $n = "a";
    while(file_exists("../Assets/Photos/Trending/".$timgname)){
      $timgname = $n.$timgname;
    }
    move_uploaded_file($_FILES['image']['tmp_name'], '../Assets/Photos/Trending/'.$timgname);
    $conn->query("UPDATE `trending` SET `trendpic` = 'Assets/Photos/Trending/$timgname' WHERE `trending`.`id` = $condition;");
    exit("Change photo success");
  }
?>