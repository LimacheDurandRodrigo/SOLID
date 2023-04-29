<?php
    require '../../model/modelo_empleado.php';
    $ME = new Modelo_Empleado();
    $idempleado = htmlspecialchars($_POST['idempleado'],ENT_QUOTES,'UTF-8');
    $consulta = $ME->listar_empleado_administrativo($idempleado);
    if ($consulta) {
        echo json_encode($consulta);
    }else{
        echo '{
            "sEcho": 1,
            "iTotalRecords": "0",
            "iTotalDisplayRecords": "0",
            "aaData": []
        }';
    }
?>
