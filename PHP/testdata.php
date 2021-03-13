<?php
  include('conn.php');

  if(isset($_POST['key'])){
    if($_POST['key'] == 'getdata'){

      $sql = $conn->query('SELECT id, fname FROM test');
      if($sql->num_rows > 0){
        $response = '';
        while($data = $sql->fetch_array()){
          $response .= '
            <p>'.$data["id"].'</p>
            <p>'.$data["fname"].'</p>
          ';
        }
        exit($response);
      }
    }
  }
?>