<?php

		  include 'connect.php';
		
    $sql="delete from goodcat";

    $res=$conn->query($sql);
    if($res){
        echo 'yes';
    }else{
        echo "Error:" . $sql . "<br>" . $conn->error;
    }

    $conn->close();
		

?>