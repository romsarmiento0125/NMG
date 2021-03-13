<?php
  include('conn.php');
  
  $query = "SELECT * FROM trending";
  $result = @mysqli_query($conn, $query);
  $rows = $result->fetch_all(MYSQLI_ASSOC);
  printf(json_encode($rows));
    
?>