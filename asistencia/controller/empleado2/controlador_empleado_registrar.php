<?php
session_start();
if(isset($_SESSION['S_SEGURIDAD_ROL'])){
	require_once '../../model/modelo_empleado.php';
    $nrodocumento   = htmlspecialchars($_POST['nrodocumento'],ENT_QUOTES,'UTF-8');
    $nombre         = htmlspecialchars($_POST['nombre'],ENT_QUOTES,'UTF-8');
	$apepat         = htmlspecialchars($_POST['apepat'],ENT_QUOTES,'UTF-8');
    $apemat         = htmlspecialchars($_POST['apemat'],ENT_QUOTES,'UTF-8');
    $fecnacimiento  = htmlspecialchars($_POST['fecnacimiento'],ENT_QUOTES,'UTF-8');
    $celular        = htmlspecialchars($_POST['celular'],ENT_QUOTES,'UTF-8');
    $email          = htmlspecialchars($_POST['email'],ENT_QUOTES,'UTF-8');
    $direccion      = htmlspecialchars($_POST['direccion'],ENT_QUOTES,'UTF-8');  
    $tipo           = htmlspecialchars($_POST['tipo'],ENT_QUOTES,'UTF-8');  
    $idempresa      = htmlspecialchars($_POST['idempresa'],ENT_QUOTES,'UTF-8');  
    $nombrefoto     = htmlspecialchars($_POST['nombrefoto'],ENT_QUOTES,'UTF-8');
    $archivo        = "";

    if (!empty($_FILES["foto"]["name"])) {
        $archivo  = 'Fotos/'.$nombrefoto;
    }else{
        $archivo  = ""; 
    }

    $MC = new Modelo_empleado();
	$consulta = $MC->Registrar_empleado($nrodocumento,$nombre,$apepat,$apemat,$fecnacimiento,$celular,$email,$direccion,$archivo,$tipo,$idempresa);
	echo $consulta;
    if (!empty($_FILES["foto"]["name"])) {
        if($consulta==1){
            if(!empty($nombrefoto)){
                if(move_uploaded_file($_FILES['foto']['tmp_name'],"../../Vista/empleado/Fotos/".$nombrefoto));
                //unlink('../../Vista/empleado/'.$txt_ruta);
            }
        }
    }
}else{
    header('Location: ../../index.php');
}
?>

