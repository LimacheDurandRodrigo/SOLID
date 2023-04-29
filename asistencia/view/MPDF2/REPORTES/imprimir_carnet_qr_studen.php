<?php
require_once 'r_conexion.php';
$codigo=htmlspecialchars($_GET['txt_codigo'],ENT_QUOTES,'UTF-8');


$query = "SELECT
student.ID,
student.STUDENTID,
CONCAT_WS(' ',FIRSTNAME,MNAME,LASTNAME) as studen,
student.AGE,
student.GENDER,
DATE_FORMAT(cli_fechanacimiento,'%m/%d/%Y') AS fnacimiento, 
student.cli_movil,
student.cli_email,
student.cli_direccion,
student.cli_estatus
FROM
student
where student.STUDENTID= '".$codigo."'";


  date_default_timezone_set('America/Lima');
$resultado = $mysqli->query($query);
//$("#lb_telefono_footer").html($cadena_telefono+$cadena_telefono1+$cadena_telefono2+$cadena_telefono3);
$QR    = "";
$razon = "";
$ruc   = "";
$empleado = "";
$dni  = "";
$html = "";
while($row = $resultado->fetch_assoc()){
    
    $QR    = $row['STUDENTID'];
    $razon = "RYM";
    $ruc   = "1022196507";
    
    //$empleado = $row['cliente'];
  //  $empleado = $row['cli_nombre']." ". $row['cli_apepat']." ".$row['cli_apemat'];

    $dni      = $row['STUDENTID'];
$html.='<style>
@page {
    margin: 2mm;
    margin-header: 0mm;
    margin-footer: 0mm;
    odd-footer-name: html_myFooter1;
    background: url("fondo2.jpg") no-repeat 0 0;
    background-image-resize: 6;
}



.bg-black-gradient {
    
}
.btn-danger,.bg-danger {
    background: #dc3545 linear-gradient(180deg,#e15361,#dc3545) repeat-x;
}
.bg-gradient-purple {
    background: #6f42c1 linear-gradient(180deg, #855eca, #6f42c1) repeat-x !important;
}

.border_inferior{
    border-left:0px solid black;border-right:0px solid black;border-bottom:0px solid black
}
.border_superior{
    border-left:0px solid black;border-right:0px solid black; border-top:0px solid black
}

</style>

            <table class="border_superior" width="100%" border="0">
            <tr>

            <td align="center" style="font-weight:bold;font-size:12px;white-space: pre-line;">
            <br>'.strtoupper(utf8_encode($razon)).'
             
         </td>
            </tr>

            </table>  


            <table class="border_superior" width="100%" border="0">
            <tr>

                    <td style="width:100%;font-size:14px;text-align: center">
                    <h3>Nombres y Apellidos</h3><br>
                    '.$row['studen'].'<br>
                    '.$row['cli_apepat'].' '.$row['cli_apemat'].'<br>
                    </td>
            </tr>

            </table>  





            <table class="border_superior" width="100%" border="0">
                <tr>

                    <td class="barcodecell" rowspan="1" align="center" style="width:90%;text-align:center">
                    <barcode code="'.$QR.'" type="QR" class="barcode" size="0.9" error="M" disableborder="1"/>
                    </td>
                </tr>

            </table>  

            

    

    <table class="items border_inferior" width="100%" border="0" cellpadding="8" cellspacing="0" style="">
        <thead>
            <tr>        
            btn btn-primary
            </tr>
            <tr>
                <td style="width:60%;height:10px" class="btn-info">
                </td>
            </tr>
            <tr>
                <td style="width:60%;height:1px" colspan="2">
                </td>
            </tr>
        </thead>
    </table>

<htmlpagefooter name="myFooter1" style="display:none;">
    <table width="100%" border="0" style="text-align:center;">
        <tr>
            <td width="50%" style="text-align:right;font-size:12px;">
              <b> CARNET</b>
            </td>
        </tr>
    </table>
</htmlpagefooter>
';
}
require_once __DIR__ . '/../vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf(
['mode' => 'UTF-8', 'format' => [65,92]]
);

$mpdf->WriteHTML($html);
$mpdf -> Output('carnet_'.$dni.'.pdf', 'D');

