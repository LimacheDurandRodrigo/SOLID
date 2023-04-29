<?php
require_once '../../../controller/conexion_global/conexion.php';
$codigo=htmlspecialchars($_GET['codigo'],ENT_QUOTES,'UTF-8');


$query = "SELECT
cliente.cliente_id,
cliente.cli_nombre,
cliente.cli_apepat,
cliente.cli_apemat,
cliente.cli_nrodocumento,
cliente.cli_fotoperfil,
cliente.cli_foto
FROM
cliente
ORDER BY cli_apepat
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
    
    $QR    = $row['cli_nrodocumento'];
    $razon = "ONESYSTEMAS";
    $turno = "TURNO:";
    $ruc   = "1022196507";
    $logo  = $row['cli_foto'];
    //$empleado = $row['cliente'];
    $empleado = $row['cli_nombre']." ". $row['cli_apepat']." ".$row['cli_apemat'];
    $dni      = $row['cli_nrodocumento'];
$html.='<style>
@page {
    margin: 2mm;
    margin-header: 0mm;
    margin-footer: 0mm;
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


    <table class="border_superior" width="100%" border="0">
        <tr>
            <td align="center" style="font-weight:bold;font-size:14px;white-space: pre-line;">
                <span style="border:2px solid black;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </td>
        </tr>
        <tr>
            <td align="center" style="font-weight:bold;font-size:12px;white-space: pre-line;">
         
                <br>'.strtoupper(utf8_encode($razon)).'
            
            </td>
        </tr>
        
        <tr>
            <td align="center">
                <img width="120px" height="120px" style="border:2px solid black" align="center" src="../../clientes/'.$logo.'">
            </td>
        </tr>
    </table>    
    <table class="items border_inferior" width="100%" border="0" cellpadding="8" cellspacing="0" style="">
        <thead>
            <tr>        
                <td class="barcodecell" rowspan="2" align="center" style="width:40%;text-align:center">
                    <barcode code="'.$QR.'" type="QR" class="barcode" size="0.8" error="M" disableborder="1"/>
                </td>
                <td style="width:60%;font-size:12px">
                   
                    '.$row['cli_nombre'].'<br>
                    '.$row['cli_apepat'].' '.$row['cli_apemat'].'<br>
                </td>
            </tr>
            <tr>
                <td style="width:60%;height:10px" class="btn-success">
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
