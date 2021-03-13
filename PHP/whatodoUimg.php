<?php
  include("conn.php");

  $condition = ($_POST['placeid']);
  $wtdfilter = ($_POST['rankidimg']);
  $wtdimgname = $_FILES['image']['name'];

  echo($wtdfilter);
  if($wtdimgname == null){
    exit("Change photo failed");
  }
  else{
    if($wtdfilter == "Swimming"){
      $n = "a";
      while(file_exists("../Assets/Photos/Home/WhatToDo/Swimming/".$wtdimgname)){
        $wtdimgname = $n.$wtdimgname;
      }
      move_uploaded_file($_FILES['image']['tmp_name'], '../Assets/Photos/Home/WhatToDo/Swimming/'.$wtdimgname);
      $conn->query("UPDATE wtdswimming SET swimphoto = 'Assets/Photos/Home/WhatToDo/Swimming/$wtdimgname' WHERE wtdswimming.swimid = $condition;");
      echo("Change photo success");
    }
    elseif($wtdfilter == "Sightseeing"){
      $n = "a";
      while(file_exists("../Assets/Photos/Home/WhatToDo/Sightseeing/".$wtdimgname)){
        $wtdimgname = $n.$wtdimgname;
      }
      move_uploaded_file($_FILES['image']['tmp_name'], '../Assets/Photos/Home/WhatToDo/Sightseeing/'.$wtdimgname);
      $conn->query("UPDATE wtdsightseeing SET sightphoto = 'Assets/Photos/Home/WhatToDo/Sightseeing/$wtdimgname' WHERE wtdsightseeing.sightid = $condition;");
      echo("Change photo success");
    }
    else{
      echo("sablay tanga");
    }
    
  }
?>