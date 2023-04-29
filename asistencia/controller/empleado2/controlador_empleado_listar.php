<?php
session_start();
if(isset($_SESSION['S_SEGURIDAD_ROL'])){
    require_once '../../model/modelo_empleado2.php';
    $MC = new Modelo_empleado();
    $idempresa = htmlspecialchars($_POST['idempresa'],ENT_QUOTES,'UTF-8');
    $tipo = htmlspecialchars($_POST['tipo'],ENT_QUOTES,'UTF-8');
    $consulta = $MC->listar_personal($idempresa,$tipo);
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