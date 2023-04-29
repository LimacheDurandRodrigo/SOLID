<?php
    require '../../model/modelo_studen.php';
    $ME = new Modelo_studen();
    $consulta = $ME->listar_studen();
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
