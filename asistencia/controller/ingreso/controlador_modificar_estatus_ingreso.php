<?php
session_start();
if(isset($_SESSION['S_SEGURIDAD_ROL'])){    
    require_once '../../model/modelo_ingreso.php';
    $MC = new Modelo_Ingreso();
    $id     = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');
    $idusuario     = htmlspecialchars($_POST['idusuario'],ENT_QUOTES,'UTF-8');
    $estatus     = htmlspecialchars($_POST['estatus'],ENT_QUOTES,'UTF-8');
    $consulta = $MC->modificar_estatus_ingreso($id,$idusuario,$estatus);
    echo $consulta;
}else{
    header('Location: ../../index.php');
}
?>