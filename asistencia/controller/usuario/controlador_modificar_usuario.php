<?php
    require '../../model/modelo_usuario.php';
    $ruta ="";
    $MU = new Modelo_Usuario();//Instanciamos
    $idusuario = htmlspecialchars($_POST['idusuario'],ENT_QUOTES,'UTF-8');
    $rol = htmlspecialchars($_POST['rol'],ENT_QUOTES,'UTF-8');
    $empleado = htmlspecialchars($_POST['empleado'],ENT_QUOTES,'UTF-8');

    $consulta = $MU->Modificar_Usuario($idusuario,$rol,$empleado);
    echo $consulta;

?>