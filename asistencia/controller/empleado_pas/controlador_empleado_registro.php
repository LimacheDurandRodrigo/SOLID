<?php
    require '../../model/modelo_empleado.php';
    $nrodocumento   = htmlspecialchars(strtoupper($_POST['nrodocumento']),ENT_QUOTES,'UTF-8');
    $nombre         = htmlspecialchars(strtoupper($_POST['nombre']),ENT_QUOTES,'UTF-8');
	$apepat         = htmlspecialchars(strtoupper($_POST['apepat']),ENT_QUOTES,'UTF-8');
    $apemat         = htmlspecialchars(strtoupper($_POST['apemat']),ENT_QUOTES,'UTF-8');
    $fechanacimiento  = htmlspecialchars($_POST['fechanacimiento'],ENT_QUOTES,'UTF-8');
    $movil        = htmlspecialchars($_POST['movil'],ENT_QUOTES,'UTF-8');
    $email          = htmlspecialchars(strtoupper($_POST['email']),ENT_QUOTES,'UTF-8');
    $direccion      = htmlspecialchars(strtoupper($_POST['direccion']),ENT_QUOTES,'UTF-8');   
    $formato      = htmlspecialchars(strtoupper($_POST['formato']),ENT_QUOTES,'UTF-8');   

    $tipodocumento        = htmlspecialchars($_POST['tipodocumento'],ENT_QUOTES,'UTF-8');
    $combo_sexo          = htmlspecialchars(strtoupper($_POST['combo_sexo']),ENT_QUOTES,'UTF-8');
    $departamento      = htmlspecialchars(strtoupper($_POST['departamento']),ENT_QUOTES,'UTF-8');   
    $ciudad      = htmlspecialchars(strtoupper($_POST['ciudad']),ENT_QUOTES,'UTF-8');   
    $tipocontrato      = htmlspecialchars(strtoupper($_POST['tipocontrato']),ENT_QUOTES,'UTF-8');   
    $salario      = htmlspecialchars(strtoupper($_POST['salario']),ENT_QUOTES,'UTF-8');   

    

    if (!empty($_FILES["txt_archivo"]["name"])) {
        //$total_imagenes = count(glob('../../Vista/documento/archivo/{*.pdf,*.PDF,*.docx,*.DOCX,*.jpg,*.JPG,*.png,*.PNG,*.jpeg,*.JPEG,*.rar,*.RAR,*.zip,*.ZIP,*.xlsx,*.XLSX,*.xls,*.XLS}',GLOB_BRACE));

        $archivo  = "Fotos/EMPL-".$nrodocumento.".".$formato;
        $nombrea   = "../../view/empleado/Fotos/EMPL-".$nrodocumento.".".$formato;
        $ruta1    = $_FILES['txt_archivo']['tmp_name'];
       // move_uploaded_file($ruta1, $nombre); 
    }else{
        $archivo  = ""; 
    }

    $MC = new Modelo_Empleado();
	$consulta = $MC->Registrar_Empleado($nombre,$apepat,$apemat,$fechanacimiento,$nrodocumento,$movil,$direccion,$email,$archivo,$tipodocumento,$combo_sexo,$departamento,$ciudad,$tipocontrato,$salario);
    if (!empty($_FILES["txt_archivo"]["name"])) {
        if ($consulta>0) {
            move_uploaded_file($ruta1, $nombrea); 
        }
    }
	echo $consulta;

?>