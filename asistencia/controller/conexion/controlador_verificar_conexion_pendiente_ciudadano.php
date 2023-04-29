<?php
    require '../../model/modelo_reconexion.php';
    $MU = new Modelo_reconexion();//Instanciamos
    $idciudadano = htmlspecialchars($_POST['idciudadano'],ENT_QUOTES,'UTF-8');
    $consulta    = $MU->verificar_existencia_reconexion_pendiente($idciudadano);
    echo json_encode($consulta);
?>