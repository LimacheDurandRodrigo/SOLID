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
";


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
    $razon = "ONESYSTEMAS";
    $ruc   = "1022196507";
    
    //$empleado = $row['cliente'];
  //  $empleado = $row['cli_nombre']." ". $row['cli_apepat']." ".$row['cli_apemat'];

    $dni      = $row['STUDENTID'];
$html.='<style>
@page {
    margin: 2mm;
    margin-header: 10mm;
    margin-footer: 10mm;
    odd-footer-name: html_myFooter1;
   
}
.bg-black-gradient {
    background: #111 !important;
    background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #111), color-stop(1, #2b2b2b)) !important;
    background: -ms-linear-gradient(bottom, #111, #2b2b2b) !important;
    background: -moz-linear-gradient(center bottom, #111 0, #2b2b2b 100%) !important;
    background: -o-linear-gradient(#2b2b2b, #111) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2b2b2b", endColorstr="#111111", GradientType=0) !important;
    color: #fff;
}
.btn-danger,.bg-danger {
    background: #dc3545 linear-gradient(180deg,#e15361,#dc3545) repeat-x;
}
.bg-gradient-purple {
    background: #6f42c1 linear-gradient(180deg, #855eca, #6f42c1) repeat-x !important;
}

.table {
    margin: 15px;
    padding: 15px;
  }



.btn-success,.bg-success,.badge-success{
    background: #04048c ;
    background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #00a65a), color-stop(1, #00ca6d)) ;
    background: -ms-linear-gradient(bottom, #00a65a, #00ca6d) ;
    background: -moz-linear-gradient(center bottom, #00a65a 0, #00ca6d 100%) ;
    background: -o-linear-gradient(#00ca6d, #00a65a) ;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ca6d", endColorstr="#00a65a", GradientType=0) ;
    color: #fff;
}
.border_inferior{
    border-left:2px solid black;border-right:2px solid black;border-bottom:2px solid black
}
.border_superior{
    border-left:2px solid black;border-right:2px solid black;border-top:2px solid black
}
</style>

            <table col span="5" style="background: red; color:#00ca6d;" class="border_superior" width="40%" border="0">
            <tr> 

            <td align="center" style="font-weight:bold;font-size:12px;white-space: pre-line;">
            <br>'.strtoupper(utf8_encode($razon)).'
             
         </td>
            </tr>

            </table>  


            <table colspan="2" class="border_superior" width="40%" border="0">
            <tr>

                    <td colspan="2" style="width:40%;font-size:14px;text-align: center">
                    <h3>Nombres y Apellidos</h3><br>
                    '.$row['studen'].'<br>
                    '.$row['cli_apepat'].' '.$row['cli_apemat'].'<br>
                    </td>
            </tr>

            </table>  





            <table colspan="2" class="border_superior" width="40%" border="0">
                <tr>

                    <td colspan="2" class="barcodecell" rowspan="1" align="center" style="width:90%;text-align:center">
                    <barcode code="'.$QR.'" type="QR" class="barcode" size="0.9" error="M" disableborder="1"/>
                    </td>
                </tr>

            </table>  

            

    

    <table colspan="2" class="items border_inferior" width="40%" border="0" cellpadding="8" cellspacing="0" style="">
        <thead>
            <tr>        
            btn btn-primary
            </tr>
            <tr>
                <td colspan="2" style="width:60%;height:10px" class="btn-info">
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

$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4']);

$mpdf->WriteHTML($html);
$mpdf -> Output('carnet_'.$dni.'.pdf', 'D');
$mPDF->SetColumns(3);
$mpdf->setFooter('Pagina: {PAGENO}');
$mpdf->setHeader('Fecha: {DATE j-m-Y}');


