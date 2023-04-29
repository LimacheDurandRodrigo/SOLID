<?php
    require '../../model/modelo_reconexion.php';
    $MU = new Modelo_reconexion();//Instanciamos
	$txt_idsolicitud    = htmlspecialchars($_POST['txt_idsolicitud'],ENT_QUOTES,'UTF-8');
	$txt_monto          = htmlspecialchars($_POST['txt_monto'],ENT_QUOTES,'UTF-8');
    $txt_descripcion 	= htmlspecialchars($_POST['txt_descripcion'],ENT_QUOTES,'UTF-8');
    $formato            = htmlspecialchars($_POST['txtformato'],ENT_QUOTES,'UTF-8');
    $idusuario          = htmlspecialchars($_POST['txtidusuario'],ENT_QUOTES,'UTF-8');
	if (!empty($_FILES["txt_archivo"]["name"])) {
		$total_imagenes = count(glob('../../view/orden_conexion/archivo/{*.pdf,*.PDF}',GLOB_BRACE));
		$archivo  = "archivo/".($total_imagenes+1).".".$formato;
		$nombre   = "../../view/orden_conexion/archivo/".($total_imagenes+1).".".$formato;
		$ruta1    = $_FILES['txt_archivo']['tmp_name'];
		move_uploaded_file($ruta1, $nombre); 
	}else{
		$archivo  = ""; 
	}
	$consulta = $MU->registrar_reconexion($txt_idsolicitud,$txt_descripcion,$archivo,$idusuario,$txt_monto);
	if (!empty($_FILES["txt_archivo"]["name"])) {
		if ($consulta) {
			move_uploaded_file($ruta1, $nombre); 
		}
	}
	echo $consulta;
?>

