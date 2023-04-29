<?php
    require '../../model/modelo_usuario.php';
    $MU = new Modelo_Usuario();//Instanciamos
    $consulta = $MU->listar_select_empleado();
    echo json_encode($consulta);
?>