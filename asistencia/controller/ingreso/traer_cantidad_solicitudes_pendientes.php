<?php
session_start();
if(isset($_SESSION['S_SEGURIDAD_ROL'])){
    include '../../model/modelo_ingreso.php';
    $idemprea = htmlspecialchars($_POST['idemprea'],ENT_QUOTES,'UTF-8');
    $estado   = htmlspecialchars($_POST['estado'],ENT_QUOTES,'UTF-8');
    $MC = new Modelo_Ingreso();
    $consulta  = $MC->traer_cantidad_solicitudes_pendientes($idemprea,$estado); 
    echo json_encode($consulta);
}else{
    header('Location: ../../index.php');
}
?>