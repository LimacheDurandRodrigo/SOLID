<?php
	$buscar = htmlspecialchars($_POST['buscar'],ENT_QUOTES,'UTF-8');
    require '../../model/modelo_usuario.php';
	$MC = new Modelo_Usuario();
	$consulta = $MC->buscar_administrador($buscar);
	echo json_encode($consulta);
?>