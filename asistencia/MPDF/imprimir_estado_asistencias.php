<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once 'r_conexion.php';
date_default_timezone_set('America/Lima');



    //var_dump($resultado);
    //die();
$html = '';
$txt_finicio= $_GET['txt_finicio'];
$txt_ffin = $_GET['txt_ffin'];

   
    $ruc   = "1022196507";

        $html.='<html lang="es"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style>
            @page {
                size: auto;
                odd-header-name: html_myHeader1;
                odd-footer-name: html_myFooter1;
                margin-footer: 0mm;
            }
        </style>
    </head>
    <style>
    input.largerCheckbox {
        width: 40px;
        height: 40px;
    }
    </style>



 <br>&nbsp;
   



         <table border="0" style="width:100%; font-size:14px; border-collapse:collapse">
            <thead>


                <th style="width:20%">
                    <img src="logo_servicio.jpg" style="width:25%;height:20%">
                </th>

                 <img src="logo_servicio.jpg" style="width:25%;height:20%">


                 <div style="width:700px;text-align:center"><br>
                    <h2 style="background-color:#052d96; color:#FFFFFF;"><u>ESTADO DE ASISTENCIAS</u></h2>
                </div>

         
               
                <tr>


        <th colspan="2" width="50%">FECHA DE INICIO: '.$txt_finicio.'</th>
        <th width="50%" colspan="2">FECHA FINAL: '.$txt_ffin.'</th>
                </tr>
                 <br>&nbsp;&nbsp;&nbsp;&nbsp;






            </thead>
         </table>
       

        <div style="width:700px;text-align:center"><br>
            <h2 style="background-color:#052d96; color:#FFFFFF;"><u>ASISTENCIAS</u></h2>
        </div>';


        $html .='
        <table style="width:100%; font-size:12px; border-collapse:collapse" border="1">
            <thead>
                <tr bgcolor="#C0C0C0">
                    <th>#</th>
                    <th>NOMBRES</th>
                    <th>FECHA</th>
                    <th>HORA</th>
                    <th>ESTADO</th>
                </tr>
            </thead>


            <tbody>



            ';


            

/*
    segunda consulta
 */

 /*   
$consultamedicamento = "SELECT
id,employee_id,date,time_in from attendance WHERE employee_id = $grado";

*/
$consulta2 = "SELECT
attendance.ID,
attendance.STUDENTID,
attendance.TIMEIN,
attendance.TIMEOUT,
attendance.LOGDATE,
attendance.STATUS,
attendance.YEAR,
attendance.fecha,
attendance.condicion,
student.ID,
student.STUDENTID,
student.FIRSTNAME,
student.MNAME,
student.LASTNAME,
CONCAT_WS(' ',FIRSTNAME,MNAME,LASTNAME) as personal,
student.AGE,
student.GENDER
FROM
attendance
LEFT JOIN student ON attendance.STUDENTID = student.STUDENTID 
where (date(attendance.fecha) BETWEEN '".$_GET['txt_finicio']."' AND '".$_GET['txt_ffin']."')"; 


$resultado2 = $mysqli->query($consulta2);
$cont = 0;
    while($row2 = $resultado2->fetch_assoc()){
        $cont++;
$html.='<tr>
    <td style="text-align:center">'.$cont.'</td>
    <td style="text-align:center">'.html_entity_decode($row2['personal']).'</td>

     
    <td style="text-align:center">'.html_entity_decode($row2['LOGDATE']).'</td>

     <td style="text-align:center">'.html_entity_decode($row2['TIMEIN']).'</td>
      <td style="text-align:center">'.html_entity_decode($row2['condicion']).'</td>
          
                </tr>';
            }
            if ($cont == 0) {
                $html.='<tr>
                    <td style="text-align:center" colspan="5">No se encontraron registros</td>
                </tr>';
            }
            $html.='
            </tbody>
               
      
      
    </table></html>
        <htmlpagefooter name="myFooter1" style="display:none">
            <table width="100%" style="text-align:center;">
                <tr>
                    <td width="100%" style="text-align:right;background-color:white;font-style: italic;">
                    <hr><br>
                       <b style="font-size:10px"> P&aacute;gina: {PAGENO}/{nbpg}</b>
                    </td>
                </tr>
            </table>
        </htmlpagefooter>
    ';
    

$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4']);
//$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => [180,130]]);
$mpdf->WriteHTML($html);
$mpdf->setFooter('Pagina: {PAGENO}');
$mpdf->setHeader('Fecha: {DATE j-m-Y}');
$mpdf->Output();
//$mpdf->Output('contrato','D');




