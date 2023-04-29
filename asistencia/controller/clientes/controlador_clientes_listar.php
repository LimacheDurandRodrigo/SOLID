<?php
    require '../../model/modelo_clientes.php';
    $ME = new Modelo_Clientes();
    $consulta = $ME->listar_clientes();
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
