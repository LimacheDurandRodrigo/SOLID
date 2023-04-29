function reporte_asistencias2() {
    var txt_finicio = document.getElementById('txt_finicio').value;
    var txt_ffin  = document.getElementById('txt_ffin').value;

    //alert(txt_idciudadano_original+" - "+txt_idcontrato_original);
    window.open("../MPDF/imprimir_estado_asistencias.php?txt_finicio="+parseInt(txt_finicio)+"&txt_ffin="+txt_ffin);
    //Swal.fire("Mensaje de Advertencia","Opci&oacute;n en mantemiento"+txt_idciudadano_original,"warning");
}




function impresion_carnet() {
        let txt_codigo = $("#txt_codigo").val();

   // window.open("../MPDF/listado_clientes.php?txt_finicio="+txt_finicio+"&txt_ffin="+txt_ffin);
  //   window.open("../MPDF/imprimir_estado_asistencias.php?txt_codigo="+txt_codigo);
     window.open("MPDF2/REPORTES/imprimir_carnet_qr_studen.php?txt_codigo="+txt_codigo);
}



function reporte_asistencias1() {
    let txt_finicio = $("#txt_finicio").val();
    let txt_ffin = $("#txt_ffin").val();
 

  //window.open("../MPDF/listado_prueba.php?txt_finicio="+txt_finicio+"&txt_ffin="+txt_ffin);
    window.open("../MPDF/imprimir_estado_asistencias.php?txt_finicio="+txt_finicio+"&txt_ffin="+txt_ffin);
}




function imprimir_deudores_excel() {
    window.open("excel/generar_excel_deudores.php"); 
}
