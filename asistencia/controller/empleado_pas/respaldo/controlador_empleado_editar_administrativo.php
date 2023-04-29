<?php
	require '../../model/modelo_empleado.php';
    $id             = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');
    $nrodocumento   = htmlspecialchars($_POST['nrodocumento'],ENT_QUOTES,'UTF-8');
    $nombre         = htmlspecialchars($_POST['nombre'],ENT_QUOTES,'UTF-8');
	$apepat         = htmlspecialchars($_POST['apepat'],ENT_QUOTES,'UTF-8');
    $apemat         = htmlspecialchars($_POST['apemat'],ENT_QUOTES,'UTF-8');
    $fecnacimiento  = htmlspecialchars($_POST['fecnacimiento'],ENT_QUOTES,'UTF-8');
    $celular        = htmlspecialchars($_POST['celular'],ENT_QUOTES,'UTF-8');
    $email          = htmlspecialchars($_POST['email'],ENT_QUOTES,'UTF-8');
    $direccion      = htmlspecialchars($_POST['direccion'],ENT_QUOTES,'UTF-8');  
    $estado         = htmlspecialchars($_POST['estado'],ENT_QUOTES,'UTF-8');  
    $tipodoc        = htmlspecialchars($_POST['tipodoc'],ENT_QUOTES,'UTF-8');
    $sexo         = htmlspecialchars($_POST['sexo'],ENT_QUOTES,'UTF-8');
    $depar      = htmlspecialchars($_POST['depar'],ENT_QUOTES,'UTF-8');  
    $ciudad         = htmlspecialchars($_POST['ciudad'],ENT_QUOTES,'UTF-8');  
    $tcontrato      = htmlspecialchars($_POST['tcontrato'],ENT_QUOTES,'UTF-8');  
    $salario         = htmlspecialchars($_POST['salario'],ENT_QUOTES,'UTF-8');  


    
    $MC = new Modelo_Empleado();
	$consulta = $MC->Editar_Empleado($id,$nrodocumento,$nombre,$apepat,$apemat,$fecnacimiento,$celular,$email,$direccion,$estado,$tipodoc,$sexo,$depar,$ciudad,$tcontrato,$salario);
	echo $consulta;
?>