<?php
  include('conn.php');
  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $condition = ($_POST["placeid"]);
    $pname = $_POST['wtdnamenm'];
    $des = $_POST['wtddescripnm'];
    $longti = $_POST['wtdlatnm'];
    $lati = $_POST['wtdlatnm'];
    $sphoto = $_FILES['wtdphotonm']['name'];

    if($pname == null || $des == null || $longti == null || $lati == null || $sphoto == null){
      exit("kumpletuhin ang input");
    }
    else{
      if($condition == "Swimming"){
        $n = "a";
        while(file_exists("../Assets/Photos/Home/WhatToDo/Swimming/".$sphoto)){
          $sphoto = $n.$sphoto;
        }
        move_uploaded_file($_FILES['wtdphotonm']['tmp_name'], '../Assets/Photos/Home/WhatToDo/Swimming/'.$sphoto);
        
        $conn->query("INSERT INTO wtdswimming (swimid, wtdswim, swimdesc, swimlong, swimlat, swimphoto) VALUES (NULL, '$pname', '$des', '$longti', '$lati', 'Assets/Photos/Home/WhatToDo/Swimming/$sphoto')");
        echo($sphoto);
      }
      elseif($condition == "Sightseeing"){
        $n = "a";
        while(file_exists("../Assets/Photos/Home/WhatToDo/Sightseeing/".$sphoto)){
          $sphoto = $n.$sphoto;
        }
        move_uploaded_file($_FILES['wtdphotonm']['tmp_name'], '../Assets/Photos/Home/WhatToDo/Sightseeing/'.$sphoto);
        
        $conn->query("INSERT INTO wtdsightseeing (sightid, wtdsight, sightdesc, sightlong, sightlat, sightphoto) VALUES (NULL, '$pname', '$des', '$longti', '$lati', 'Assets/Photos/Home/WhatToDo/Sightseeing/$sphoto')");
        echo($sphoto);
      }
    }
  }
  

  // if(isset($_POST['cat'])){
  //   $condition = $conn->real_escape_string($_POST['cat']);
  //   $nameofplace = $conn->real_escape_string($_POST['np']);
  //   $description = $conn->real_escape_string($_POST['des']);
  //   $longtitude = $conn->real_escape_string($_POST['long']);
  //   $latitude = $conn->real_escape_string($_POST['lat']);

  //   if($condition == "Swimming"){
  //     $conn->query("INSERT INTO wtdswimming (swimid, wtdswim, swimdesc, swimlong, swimlat) VALUES (NULL, '$nameofplace', '$description', '$longtitude', '$latitude');");
  //     exit("Data has been added successfully");  
  //   }
  //   else{
  //     exit("Data has been added failed");
  //   }
    
  // }
?>