<?php
require_once __DIR__ . '/vendor/autoload.php';
date_default_timezone_set('America/Lima');
require_once '../conexion_global/r_conexion.php';

/*
$mysqli=mysqli_connect('onesystemas.com','teone102_userm','userm20');
mysqli_select_db($mysqli,'teone102_asistenciam');
*/



$consulta = "SELECT
asistencias.asis_id,
asistencias.asis_nombres,
asistencias.asis_dni,
asistencias.asis_fregistro,
asistencias.estado,
asistencias.cliente_id,
asistencias.turno_id,
asistencias.asis_fregistro2,
cliente.cliente_id,
cliente.cli_nombre,
cliente.cli_apepat,
cliente.cli_apemat,
cliente.cli_feccreacion,
cliente.cli_fechanacimiento,
cliente.cli_nrodocumento,
cliente.cli_movil,
cliente.cli_email,
cliente.cli_estatus,
cliente.cli_direccion,
cliente.cli_fotoperfil,
cliente.cli_foto,
turno.turno_id,
turno.tur_nombre,
turno.tur_horae,
turno.tur_horas,
personasqr.per_id,
personasqr.per_nombre,
personasqr.per_dni,
personasqr.per_fregistro,
personasqr.per_status,
personasqr.cliente_id,
personasqr.descripcion,
personasqr.turno_id
FROM
asistencias
INNER JOIN cliente ON asistencias.cliente_id = cliente.cliente_id
INNER JOIN turno ON asistencias.turno_id = turno.turno_id
INNER JOIN personasqr ON personasqr.cliente_id = cliente.cliente_id AND personasqr.turno_id = turno.turno_id AND personasqr.turno_id = turno.turno_id AND personasqr.cliente_id = cliente.cliente_id
where (date(asistencias.asis_fregistro) BETWEEN '".$_GET['txt_finicio']."' AND '".$_GET['txt_ffin']."')";

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
        </style>
    </head>
    <style>
    input.largerCheckbox {
        width: 40px;
        height: 40px;
    }
    </style>




        
        


       
        <div style="font-size:11px;text-align:center"><h1><u>REPORTE DE CLIENTES</u></h1></div>
      

        


        <table style="width:100%; font-size:11px; border-collapse:collapse" border="1">
            <thead>
                <tr bgcolor="#C0C0C0">
                    <th>#</th>
                    <th>CODIGO</th>
                    <th>APELLIDOS Y NOMBRES</th>
                    <th>DIRECCION</th>
                     <th>CONTACTO</th>
                      <th>CELULAR</th>
                     <th>EMAILL</th>
                    
                </tr>
            </thead>';



/*
    segunda consulta
 */

 
$consultamedicamento = "
SELECT
asistencias.asis_id,
asistencias.asis_nombres,
asistencias.asis_dni,
asistencias.asis_fregistro,
asistencias.estado,
asistencias.cliente_id,
asistencias.turno_id,
asistencias.asis_fregistro2,
cliente.cliente_id,
cliente.cli_nombre,
cliente.cli_apepat,
cliente.cli_apemat,
cliente.cli_feccreacion,
cliente.cli_fechanacimiento,
cliente.cli_nrodocumento,
cliente.cli_movil,
cliente.cli_email,
cliente.cli_estatus,
cliente.cli_direccion,
cliente.cli_fotoperfil,
cliente.cli_foto,
turno.turno_id,
turno.tur_nombre,
turno.tur_horae,
turno.tur_horas,
personasqr.per_id,
personasqr.per_nombre,
personasqr.per_dni,
personasqr.per_fregistro,
personasqr.per_status,
personasqr.cliente_id,
personasqr.descripcion,
personasqr.turno_id
FROM
asistencias
INNER JOIN cliente ON asistencias.cliente_id = cliente.cliente_id
INNER JOIN turno ON asistencias.turno_id = turno.turno_id
INNER JOIN personasqr ON personasqr.cliente_id = cliente.cliente_id AND personasqr.turno_id = turno.turno_id AND personasqr.turno_id = turno.turno_id AND personasqr.cliente_id = cliente.cliente_id
where (date(asistencias.asis_fregistro) BETWEEN '".$_GET['txt_finicio']."' AND '".$_GET['txt_ffin']."')";




$resultadomedicamento = $mysqli->query($consultamedicamento);
$contadormedicamento=0;
while($rowmedicamento = $resultadomedicamento->fetch_assoc()){
$contadormedicamento++;
$html.='<tr>
    <td style="text-align:center">'.$contadormedicamento.'</td>
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['asis_id']).'</td>
    
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['cli_nombre']).'</td>
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['asis_fregistro']).'</td>
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['cli_nrodocumento']).'</td>
    <td style="text-align:center">'.html_entity_decode($rowmedicamento['tur_nombre']).'</td>

    <td style="text-align:center">'.utf8_encode($rowmedicamento['tur_nombre']).'</td>

   
    

                           





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

$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4']);
$mpdf->WriteHTML($html);
$mpdf->setFooter('Pagina: {PAGENO}');
$mpdf->setHeader('Fecha: {DATE j-m-Y}');
$mpdf->Output();




