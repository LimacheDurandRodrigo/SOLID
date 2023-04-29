<?php
session_start();
if(isset($_SESSION['S_SEGURIDAD_ROL'])){
    require_once '../../model/modelo_ingreso.php';
    $MC = new Modelo_Ingreso();
    $finicio     = htmlspecialchars($_POST['finicio'],ENT_QUOTES,'UTF-8');
    $ffin     = htmlspecialchars($_POST['ffin'],ENT_QUOTES,'UTF-8');
    $estatus     = htmlspecialchars($_POST['estatus'],ENT_QUOTES,'UTF-8');
    $consulta = $MC->listar_solicitud_ingreso($finicio,$ffin,$estatus);
    if($consulta){
        echo json_encode($consulta);
    }else{
        echo '{
            "sEcho": 1,
            "iTotalRecords": "0",
            "iTotalDisplayRecords": "0",
            "aaData": []
        }';
    }
}else{
    header('Location: ../../index.php');
}
?>