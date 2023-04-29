<?php
    require '../../model/modelo_asistencias.php';
    $MU = new Modelo_Asistencias();
    $idalumno = htmlspecialchars($_POST['idalumno'],ENT_QUOTES,'UTF-8');
    $consulta = $MU->buscar_asistencia_detalle($idalumno);
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

?>