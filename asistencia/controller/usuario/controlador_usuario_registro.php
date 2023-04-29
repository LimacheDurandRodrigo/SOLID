<?php
    require '../../model/modelo_usuario.php';
    $ruta ="";
    $MU = new Modelo_Usuario();//Instanciamos
    $usuario = htmlspecialchars($_POST['usuario'],ENT_QUOTES,'UTF-8');
    $contra = password_hash($_POST['contra'],PASSWORD_DEFAULT,['cost'=>12]);
    $rol = htmlspecialchars($_POST['rol'],ENT_QUOTES,'UTF-8');
    $empleado = htmlspecialchars($_POST['empleado'],ENT_QUOTES,'UTF-8');
    $consulta = $MU->Registrar_Usuario($usuario,$contra,$rol,$empleado);
    echo $consulta;
?>