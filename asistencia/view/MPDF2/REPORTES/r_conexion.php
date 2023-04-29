<?php
    $mysqli = new mysqli('localhost','root','','crudqr');
    if(mysqli_connect_errno()){
        echo 'La conexion fallida: ',mysqli_connect_error();
        exit();
    }

?>