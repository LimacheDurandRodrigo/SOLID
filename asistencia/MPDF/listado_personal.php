<?php
require_once __DIR__ . '/vendor/autoload.php';
date_default_timezone_set('America/Lima');
require_once '../conexion_global/r_conexion.php';

/*
$mysqli=mysqli_connect('onesystemas.com','teone102_userm','userm20');
mysqli_select_db($mysqli,'teone102_asistenciam');
*/



$consulta = "
SELECT
student.ID,
student.STUDENTID,
student.FIRSTNAME,
student.MNAME,
student.LASTNAME,
CONCAT_WS(' ',FIRSTNAME,MNAME,LASTNAME) as studen,
student.AGE,
student.GENDER,
student.cli_fechanacimiento,
student.cli_movil,
student.cli_email,
student.cli_direccion,
student.cli_estatus
FROM
student
ORDER BY studen
";



/*

$consulta = "SELECT id, employee_id, firstname, lastname, address from employees WHERE id = $grado";
 */

    $resultado = $mysqli->query($consulta);
    while($row = $resultado->fetch_assoc()){
        $html='<html lang="es"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


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


            .sobre {
            position:absolute;
            top:10px;
            left:10px;
            border:none;
            }


            table{
                background-color: white;
                text-align: left;
                border-collapse: collapse;
                width: 100%;
            }
            
            th, td{
                padding: 5px;
            }
            
            thead{
                background-color: #0e2e8f;
                border-bottom: solid 5px #0F362D;
                color: #FF0000;
                
            }
            
            tr:nth-child(even){
                background-color: #F2F3F4;
            }

        </style>








    </head>
    <style>
    input.largerCheckbox {
        width: 40px;
        height: 40px;
    }
    </style>




        
        


       
        <div style="font-size:11px;text-align:center"><h1><u>LISTADO DE PERSONAL</u></h1></div>
      

        


        <table style="width:100%; font-size:11px; border-collapse:collapse" border="1">
            <thead>
                <tr style="background: #033da8; color: #FF0000;">
                    <th style="color: #FFFFFF;">#</th>
                    <th style="color: #FFFFFF;">CODIGO</th>
                    <th style="color: #FFFFFF;">APELLIDOS Y NOMBRES</th>
                    <th style="color: #FFFFFF;">MOVIL</th>
                     <th style="color: #FFFFFF;">EMAIL</th>
                      <th style="color: #FFFFFF;">DIRECCION</th>
                     <th style="color: #FFFFFF;">F. NACIMIENTO</th>
                    
                </tr>
            </thead>';



/*
    segunda consulta
 */

 
$consultamedicamento = "
SELECT
student.ID,
student.STUDENTID,
student.FIRSTNAME,
student.MNAME,
student.LASTNAME,
CONCAT_WS(' ',FIRSTNAME,MNAME,LASTNAME) as studen,
student.AGE,
student.GENDER,
student.cli_fechanacimiento,
student.cli_movil,
student.cli_email,
student.cli_direccion,
student.cli_estatus
FROM
student
ORDER BY studen
";




$resultadomedicamento = $mysqli->query($consultamedicamento);
$contadormedicamento=0;
while($rowmedicamento = $resultadomedicamento->fetch_assoc()){
$contadormedicamento++;
$html.='<tr>
    <td style="text-align:center">'.$contadormedicamento.'</td>
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['STUDENTID']).'</td>
    
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['studen']).'</td>
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['cli_movil']).'</td>
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['cli_email']).'</td>
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['cli_direccion']).'</td>

    <td style="text-align:center">'.utf8_encode($rowmedicamento['cli_fechanacimiento']).'</td>

   
    

                           





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
            }
            $html.='</tr><tbody>
            </tbody>
               
      
      
    </table></html>';
    }

$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4-L']);
$mpdf->WriteHTML($html);
$mpdf->setFooter('Pagina: {PAGENO}');
$mpdf->setHeader('Fecha: {DATE j-m-Y}');
$mpdf->Output();




