<?php
  include('conn.php');
  
  $query = "SELECT id, fname FROM test";
  $result = @mysqli_query($conn, $query);
  $rows = $result->fetch_all(MYSQLI_ASSOC);
  printf(json_encode($rows));
    
?>