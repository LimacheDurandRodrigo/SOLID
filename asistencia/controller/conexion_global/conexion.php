<?php 
$mysqli = new mysqli('localhost','root','','registrar_datos');
if(mysqli_connect_errno()){
  echo 'Conexion Fallida : ', mysqli_connect_error();
  exit();
}

function conexion(){
	return mysqli_connect("localhost","root","","asistencia_qr21"); 	
}
?>