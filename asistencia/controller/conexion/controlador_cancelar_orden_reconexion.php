<?php
    require '../../model/modelo_reconexion.php';
    $MU = new Modelo_reconexion();//Instanciamos
    $id       = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');
    $consulta = $MU->cancelar_orden_reconexion($id);
    echo $consulta;
?>