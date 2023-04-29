<?php
    require '../../model/modelo_studen.php';
    $nrodocumento   = htmlspecialchars(strtoupper($_POST['nrodocumento']),ENT_QUOTES,'UTF-8');
    $nombre         = htmlspecialchars(strtoupper($_POST['nombre']),ENT_QUOTES,'UTF-8');
	$apepat         = htmlspecialchars(strtoupper($_POST['apepat']),ENT_QUOTES,'UTF-8');
    $apemat         = htmlspecialchars(strtoupper($_POST['apemat']),ENT_QUOTES,'UTF-8');
    $fechanacimiento  = htmlspecialchars($_POST['fechanacimiento'],ENT_QUOTES,'UTF-8');
    $movil        = htmlspecialchars($_POST['movil'],ENT_QUOTES,'UTF-8');
    $email          = htmlspecialchars(strtoupper($_POST['email']),ENT_QUOTES,'UTF-8');
    $direccion      = htmlspecialchars(strtoupper($_POST['direccion']),ENT_QUOTES,'UTF-8');   
    
    

    if (!empty($_FILES["txt_archivo"]["name"])) {
        //$total_imagenes = count(glob('../../Vista/documento/archivo/{*.pdf,*.PDF,*.docx,*.DOCX,*.jpg,*.JPG,*.png,*.PNG,*.jpeg,*.JPEG,*.rar,*.RAR,*.zip,*.ZIP,*.xlsx,*.XLSX,*.xls,*.XLS}',GLOB_BRACE));

        $archivo  = "Fotos/ALU-".$nrodocumento.".".$formato;
        $nombrea   = "../../view/clientes/Fotos/ALU-".$nrodocumento.".".$formato;
        $ruta1    = $_FILES['txt_archivo']['tmp_name'];
       // move_uploaded_file($ruta1, $nombre); 
    }else{
        $archivo  = ""; 
    }

    $MC = new Modelo_studen();
	$consulta = $MC->Registrar_studen($nombre,$apepat,$apemat,$fechanacimiento,$nrodocumento,$movil,$direccion,$email);
    if (!empty($_FILES["txt_archivo"]["name"])) {
        if ($consulta>0) {
            move_uploaded_file($ruta1, $nombrea); 
        }
    }
	echo $consulta;

?>