<?php
	require '../../model/modelo_studen.php';
    $id             = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');
    $nrodocumento   = htmlspecialchars(strtoupper($_POST['nrodocumento']),ENT_QUOTES,'UTF-8');
    $nombre         = htmlspecialchars(strtoupper($_POST['nombre']),ENT_QUOTES,'UTF-8');
	$apepat         = htmlspecialchars(strtoupper($_POST['apepat']),ENT_QUOTES,'UTF-8');
    $apemat         = htmlspecialchars(strtoupper($_POST['apemat']),ENT_QUOTES,'UTF-8');
    $fechanacimiento  = htmlspecialchars($_POST['fechanacimiento'],ENT_QUOTES,'UTF-8');
    $movil        = htmlspecialchars($_POST['movil'],ENT_QUOTES,'UTF-8');
    $email          = htmlspecialchars(strtoupper($_POST['email']),ENT_QUOTES,'UTF-8');
    $direccion      = htmlspecialchars(strtoupper($_POST['direccion']),ENT_QUOTES,'UTF-8');  
    $estado         = htmlspecialchars($_POST['estado'],ENT_QUOTES,'UTF-8');    
    
    $MC = new Modelo_studen();
   
	$consulta = $MC->Modificar_Studen($id,$nombre,$apepat,$apemat,$fechanacimiento,$nrodocumento,$movil,$direccion,$email,$estado);
	echo $consulta;
?>