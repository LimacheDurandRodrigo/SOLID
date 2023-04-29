<?php
    require '../../model/modelo_asistencias.php';
    $ME = new Modelo_Asistencias();
    $consulta = $ME->listar_asistencias();
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
