<?php
    require '../../model/modelo_empleado.php';
    $idcliente   = htmlspecialchars(strtoupper($_POST['idcliente']),ENT_QUOTES,'UTF-8');  
    $nrodocumento   = htmlspecialchars(strtoupper($_POST['nrodocumento']),ENT_QUOTES,'UTF-8');  
    $formato      = htmlspecialchars(strtoupper($_POST['formato']),ENT_QUOTES,'UTF-8');   
    $txt_ruta      = htmlspecialchars(strtoupper($_POST['txt_ruta']),ENT_QUOTES,'UTF-8');   
    

    if (!empty($_FILES["txt_foto_editar"]["name"])) {
        $total_imagenes = count(glob('../../view/empleado/Fotos/{*.pdf,*.PDF,*.docx,*.DOCX,*.jpg,*.JPG,*.png,*.PNG,*.jpeg,*.JPEG,*.rar,*.RAR,*.zip,*.ZIP,*.xlsx,*.XLSX,*.xls,*.XLS}',GLOB_BRACE));

        $archivo  = "Fotos/EMPL-".$nrodocumento."-".($total_imagenes+1).".".$formato;
        $nombrea   = "../../view/empleado/Fotos/EMPL-".$nrodocumento."-".($total_imagenes+1).".".$formato;
        $ruta1    = $_FILES['txt_foto_editar']['tmp_name'];
       // move_uploaded_file($ruta1, $nombre); 
    }else{
        $archivo  = ""; 
    }

    $MC = new Modelo_empleado();
	$consulta = $MC->editar_foto($idcliente,$archivo);
    if (!empty($_FILES["txt_foto_editar"]["name"])) {
        if ($consulta>0) {
            move_uploaded_file($ruta1, $nombrea); 
            if ($txt_ruta!="") {
                unlink('../../view/empleado/'.$txt_ruta);
            }
            
        }
    }
	echo $consulta;

?>