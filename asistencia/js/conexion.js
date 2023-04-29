var tbl_contratos_inactivos;
function listado_contratos_inactivos(){
  tbl_contratos_inactivos = $("#tabla_contratos_inactivos").DataTable({
    "ordering":false,
    //dom: 'Bfrtip',
    "lengthChange": false,
    "pageLength": 10,
    "destroy":true,
    "bProcessing": true,
    "bDeferRender": true,
    "bServerSide": true,
    "sAjaxSource":"../controller/conexion/serverside/serversideContratosSuspendidos.php",
    "columns":[
      {"data":0},
      {"data":1},
      {"data":4},
      {"data":5},
      {"data":6},
      
      {"data":7},
      {"data":8},
      {"data":9},
      {"data":null,
        render: function (data, type, row ) {
          return "<button class='generar btn btn-warning btn-sm' title='Generar Orden Reconexi&oacute;n' type='button' ><i class='fa fa-refresh fa-spin fa-1x fa-fw'></i><b></b></button>";
        }
      },
    ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $($(nRow).find("td")[0]).css('text-align', 'center' );
        $($(nRow).find("td")[1]).css('text-align', 'left' );
        $($(nRow).find("td")[2]).css('text-align', 'left' );
        $($(nRow).find("td")[3]).css('text-align', 'center' );
        $($(nRow).find("td")[4]).css('text-align', 'center' );
        $($(nRow).find("td")[5]).css('text-align', 'center' );
        $($(nRow).find("td")[6]).css('text-align', 'left' );
        $($(nRow).find("td")[7]).css('text-align', 'center' );
        $($(nRow).find("td")[8]).css('text-align', 'center' );
        $($(nRow).find("td")[9]).css('text-align', 'center' );
        $($(nRow).find("td")[10]).css('text-align', 'center' );
        $($(nRow).find("td")[11]).css('text-align', 'center' );

        $($(nRow).find("td")[0]).css('font-weight', 'bold' );
        //$($(nRow).find("td")[1]).css('font-weight', 'bold' );
        $($(nRow).find("td")[1]).css('width', '160' );
        $($(nRow).find("td")[2]).css('width', '160' );


        $($(nRow).find("td")[6]).css('width', '100' );
        $($(nRow).find("td")[8]).css('width', '100' );
        //$($(nRow).find("td")[1]).css('width', '80' );
        $($(nRow).find("td")[0]).css('width', '90' );
        //$($(nRow).find("td")[5]).css('font-weight', 'bold' );
        //$($(nRow).find("td")[5]).css('color', '#9B0000' );
        //$($(nRow).find("td")[6]).css('font-weight', 'bold' );
    },
    "language":idioma_espanol,
    select: true
  });
}
$('#tabla_contratos_inactivos').on('click','.generar',function(){
  var data = tbl_contratos_inactivos.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
  if(tbl_contratos_inactivos.row(this).child.isShown()){//Cuando esta en tama«Ðo responsivo
      var data = tbl_contratos_inactivos.row(this).data();
  }
  $.ajax({
    url:'../controller/conexion/controlador_verificar_conexion_pendiente_ciudadano.php',
    type:'POST',
    data:{
      idciudadano:data[10]
    }
  })
  .done(function(resp) {
    let data_resp = JSON.parse(resp);
    if(data_resp[0][0]>0){
      Swal.fire("Mensaje de Advertencia","<b>El ciudadano con contrato: <label style='color:#9B0000'>"+data[0]+"</label> ya cuenta con una orden de reconexi&oacute;n pendiente<br><label style='font-size:13px;color:#9B0000'>Para volver a generar otra orden de reconexi&oacute;n deber&aacute; cancelar la anterior<label></b>","warning");
    }else{
      $("#modal_registro_solicitud").modal({backdrop:'static',keyboard:false})
      $("#modal_registro_solicitud").modal('show');
      //document.getElementById('txt_nombre').value="";
      $('.form-control').removeClass("is-invalid").removeClass("is-valid");    
      limpiar_campos();
      $("#txt_idsolicitante").val(data[10]);
      $("#txt_codcontrato").val(data[0]);
      $("#lb_cod_contrato_solicitud").html(data[0]);

      $("#txt_nrodocumento").val(data[3]);
      $("#txt_nombre").val(data[2]);
      $("#txt_direccion").val(data[4]);
    }
  })
})
function limpiar_campos() {
  $("#txt_idsolicitante").val("");
  $("#combo_tiposolicitud").val("Hoja de atencion").trigger("change");
  $("#txt_nrodocumento").val("");
  $("#txt_nombre").val("");
  $("#txt_direccion").val("");

  $("#txt_referencia").val("");
  $("#txt_responsable").val("");
  $("#txt_fechaprogramada").val("");
  $("#txt_fechainicio").val("");
  $("#txt_fechafinal").val("");
  $("#txt_nrocomprobante").val("");
  $("#txt_descripcion").val("");
}
function ValidacionInput(txt_responsable,txt_fechaprogramada,txt_fechainicio,txt_fechafinal,txt_nrodocumento,txt_nombre,txt_direccion){
  Boolean($("#"+txt_responsable).val().length>0) ? $("#"+txt_responsable).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_responsable).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_fechaprogramada).val().length>0) ? $("#"+txt_fechaprogramada).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_fechaprogramada).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_fechainicio).val().length>0) ? $("#"+txt_fechainicio).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_fechainicio).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_fechafinal).val().length>0) ? $("#"+txt_fechafinal).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_fechafinal).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_nrodocumento).val().length>0) ? $("#"+txt_nrodocumento).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_nrodocumento).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_nombre).val().length>0) ? $("#"+txt_nombre).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_nombre).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_direccion).val().length>0) ? $("#"+txt_direccion).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_direccion).removeClass('is-valid').addClass("is-invalid"); 
}
function Registrar_solicitud_reconexion(){
    let txt_idsolicitante   = $("#txt_idsolicitante").val();
    let txt_codcontrato     = $("#txt_codcontrato").val();
    let combo_tiposolicitud = $("#combo_tiposolicitud").val();

    let txt_referencia      = $("#txt_referencia").val();
    let txt_responsable     = $("#txt_responsable").val();
    let txt_fechaprogramada = $("#txt_fechaprogramada").val();
    let fechapro        = txt_fechaprogramada.split('/');
    let fechaprogramada = fechapro[2] + '-' + fechapro[1] + '-' + fechapro[0];

    let txt_fechainicio = $("#txt_fechainicio").val();
    let fechaini        = txt_fechainicio.split('/');
    let fechainicio     = fechaini[2] + '-' + fechaini[1] + '-' + fechaini[0];

    let txt_fechafinal  = $("#txt_fechafinal").val();
    let fechafin        = txt_fechafinal.split('/');
    let fechafinal      = fechafin[2] + '-' + fechafin[1] + '-' + fechafin[0];

    let txt_nrocomprobante  = $("#txt_nrocomprobante").val();
    let txt_descripcion     = $("#txt_descripcion").val();

    let combo_tiposervicio  = $("#combo_tiposervicio").val();
    if(txt_responsable.length==0 || txt_fechaprogramada.length==0 ||  txt_idsolicitante.length==0){
      ValidacionInput('txt_responsable','txt_fechaprogramada','txt_fechaprogramada','txt_fechaprogramada','txt_nrodocumento','txt_nombre','txt_direccion');
      return Swal.fire("Mensaje de Advertencia","Llene los campos vac&iacute;os","warning");
    }
    $.ajax({
      "url":"../controller/solicitud/controlador_registrar_solicitud.php",
      type:'POST',
      data:{
        txt_idsolicitante:txt_idsolicitante,
        combo_tiposolicitud:combo_tiposolicitud,
        txt_referencia:txt_referencia,
        txt_responsable:txt_responsable,
        fechaprogramada:fechaprogramada,
        fechainicio:fechainicio,
        fechafinal:fechafinal,
        txt_nrocomprobante:txt_nrocomprobante,
        txt_descripcion:txt_descripcion,
        combo_tiposervicio:combo_tiposervicio
      }
    })
    .done(function(resp){
      if(resp!=0){
        if (resp > 0 ) {
          Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente registrados, <b>nueva orden de reconexi&oacute;n registrada</b>","success")
          .then ( ( value ) =>  {
            $("#modal_registro_solicitud").modal('hide');
            window.open("../MPDF/generar_solicitud.php?codigo="+parseInt(resp));
            tbl_contratos_inactivos.ajax.reload();
            tbl_reconexionpendiente.ajax.reload();
            tbl_reconexioncanceladas.ajax.reload();
            tbl_reconexionesrealizadas.ajax.reload();
          });  
        }else{
          if (resp=="C") {
            Swal.fire("Mensaje de Advertencia","<b>El ciudadano con contrato: <label style='color:#9B0000'>"+txt_codcontrato+"</label> ya cuenta con una orden de corte pendiente<br><label style='font-size:13px;color:#9B0000'>Para volver a generar otra orden de corte deber&aacute; cancelar la anterior<label></b>","warning");
          }
          if (resp=="RE") {
            Swal.fire("Mensaje de Advertencia","<b>El ciudadano con contrato: <label style='color:#9B0000'>"+txt_codcontrato+"</label> ya cuenta con una orden de reconexi&oacute;n pendiente<br><label style='font-size:13px;color:#9B0000'>Para volver a generar otra orden de reconexi&oacute;n deber&aacute; cancelar la anterior<label></b>","warning");
          }
        }
      }else{
        Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar el registro","error");
      }
    })
}
function imprimir_contratos_suspendidos_corte() {
  window.open("excel/generar_excel_contratos_suspendidos.php"); 
}

//=============================================================================
//===========================RECONEXION PENDIENTE==============================
//=============================================================================

var tbl_reconexionpendiente;
function listar_reconexion_pendientes(){
  tbl_reconexionpendiente = $("#tabla_reconexion_pendientes").DataTable({
    "ordering":false,
    //dom: 'Bfrtip',
    "lengthChange": false,
    "pageLength": 10,
    "destroy":true,
    "bProcessing": true,
    "bDeferRender": true,
    "bServerSide": true,
    "sAjaxSource":"../controller/conexion/serverside/serversideReconexionPendientes.php",
    "columns":[
      {"data":0},
      {"data":2},
      {"data":20},
      {"data":6},
      {"data":7},
      {"data":8},
      {"data":16},
      {"data":9,
        render: function (data, type, row ) {
          if (data=='PENDIENTE') {
            return "<button class='reconexion btn btn-warning btn-sm' title='Registrar Reconexi&oacute;n' type='button' ><i class='fa fa-save'></i></button>&nbsp;<button class='cancelar btn btn-danger btn-sm' title='Cancelar orden reconexi&oacute;n' type='button' ><i class='fa fa-times'></i></button>&nbsp;<button title='Actualizar Orden reconexi&oacute;n' class='editar btn btn-primary  btn-sm' type='button' ><i class='fa fa-edit'></i></button>"+
                   "&nbsp;<button class='imprimir btn btn-danger btn-sm' title='Imprimir orden reconexi&oacute;n' type='button' ><i class='fa fa-print'></i><b></b></button>";
          }
        }
      }
    ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $($(nRow).find("td")[0]).css('text-align', 'center' );
        $($(nRow).find("td")[1]).css('text-align', 'center' );
        $($(nRow).find("td")[2]).css('text-align', 'left' );
        $($(nRow).find("td")[3]).css('text-align', 'left' );
        $($(nRow).find("td")[4]).css('text-align', 'center' );
        $($(nRow).find("td")[5]).css('text-align', 'center' );
        $($(nRow).find("td")[6]).css('text-align', 'center' );
        $($(nRow).find("td")[7]).css('text-align', 'center' );
        $($(nRow).find("td")[8]).css('text-align', 'center' );
        $($(nRow).find("td")[9]).css('text-align', 'center' );
        $($(nRow).find("td")[10]).css('text-align', 'center' );
        $($(nRow).find("td")[11]).css('text-align', 'center' );

        $($(nRow).find("td")[0]).css('font-weight', 'bold' );
        $($(nRow).find("td")[1]).css('font-weight', 'bold' );
        $($(nRow).find("td")[2]).css('width', '160' );
        $($(nRow).find("td")[3]).css('width', '160' );
        $($(nRow).find("td")[7]).css('width', '110' );
        $($(nRow).find("td")[1]).css('width', '80' );
        $($(nRow).find("td")[0]).css('width', '90' );
        //$($(nRow).find("td")[5]).css('font-weight', 'bold' );
        //$($(nRow).find("td")[5]).css('color', '#9B0000' );
        $($(nRow).find("td")[6]).css('font-weight', 'bold' );
    },
    "language":idioma_espanol,
    select: true
  });
}
$('#tabla_reconexion_pendientes').on('click','.reconexion',function(){
    var data = tbl_reconexionpendiente.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
    if(tbl_reconexionpendiente.row(this).child.isShown()){//Cuando esta en tama単o responsivo
        var data = tbl_reconexionpendiente.row(this).data();
    }
    
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
    //$("#modal_editar_solicitud").modal('show');
    //$("#txt_idciudadano").val(data[0]);
    //DATOS DEL CIUDADANO
    $("#modal_reconexion").modal({backdrop:'static',keyboard:false})
    $("#modal_reconexion").modal('show');
    $("#txt_idsolicitud_reconexion").val(data[0]);
    $("#lb_cod_orden_reconexion").html(data[0]);
    $("#lb_cod_contrato_reconexion").html(data[2]);
    $("#lb_fecha_programada_reconexion").html(data[16]);
    $("#txt_referencia_reconexion").val("");
    $("#txt_nrocomprobante_reconexion").val("");
    $("#txt_descripcion_reconexion").val("");
    var combo_estado = data[9];
    var estado = "";

    $("#txt_referencia_reconexion").val(data[10]);
    $("#txt_responsable_reconexion").val(data[13]);
    if (data[16]!="00/00/0000") {
      //$("#txt_fechaprogramada_reconexion").datepicker("setDate",data[16]);
    }

    $("#txt_nrodocumento_reconexion").val(data[4]);
    $("#txt_nombre_reconexion").val(data[5]);
    $("#txt_direccion_reconexion").val(data[6]);
    $("#txt_descripcion_reconexion").val(data[12]);
    $("#txt_descripcion_reconexion_registro").val("");
    $("#txtformato").val("");
    $("#txt_archivo").val("");
    $("#lb_archivo").html("Seleccionar Archivo");
    $('.form-control').removeClass("is-invalid").removeClass("is-valid"); 
})
$('#tabla_reconexion_pendientes').on('click','.editar',function(){
    var data = tbl_reconexionpendiente.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
    if(tbl_reconexionpendiente.row(this).child.isShown()){//Cuando esta en tama単o responsivo
        var data = tbl_reconexionpendiente.row(this).data();
    }
    
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
    //$("#modal_editar_solicitud").modal('show');
    //$("#txt_idciudadano").val(data[0]);
    //DATOS DEL CIUDADANO
    $("#modal_editar_solicitud").modal({backdrop:'static',keyboard:false})
    $("#modal_editar_solicitud").modal('show');
    //document.getElementById('txt_nombre').value="";
    $("#combo_tiposolicitud_editar").val(data[11]).trigger("change");
    $("#txt_referencia_editar").val("");
    $("#txt_nrocomprobante_editar").val("");
    $("#txt_descripcion_editar").val("");
    var combo_estado = data[9];
    var estado = "";
    if (combo_estado == "ATENDIDO" || combo_estado == "CANCELADO" ) {
      estado = "<option>ATENDIDO</option><option>CANCELADO</option>";
      $("#combo_estado").html(estado);
      $("#combo_estado").val(combo_estado).trigger("change");
      //$("#combo_estado").prop('disabled',true);
      $("#btn_actualizar").prop('disabled',true);
      $(".bloquear").prop('disabled',true);
    }else{
      estado = "<option>PENDIENTE</option><option>CANCELADO</option>";
      $("#combo_estado").html(estado);
      $("#combo_estado").val(combo_estado).trigger("change");
      //$("#combo_estado").prop('disabled',false);
      $("#btn_actualizar").prop('disabled',false);
      $(".bloquear").prop('disabled',false);
    }
    $("#txt_idsolicitud").val(data[0]);
    $("#txt_referencia_editar").val(data[10]);
    $("#txt_responsable_editar").val(data[13]);
    if (data[16]!="00/00/0000") {
      $("#txt_fechaprogramada_editar").datepicker("setDate",data[16]);
    }
    if (data[17]!="00/00/0000") {
      $("#txt_fechainicio_editar").datepicker("setDate",data[17]);
    }
    if (data[18]!="00/00/0000") {
      $("#txt_fechafinal_editar").datepicker("setDate",data[18]);
    }
    $("#txt_nrocomprobante_editar").val(data[19]);
    $("#txt_descripcion_editar").val(data[12]);

    $("#txt_nrodocumento_editar").val(data[4]);
    $("#txt_nombre_editar").val(data[5]);
    $("#txt_direccion_editar").val(data[6]);
    $('.form-control').removeClass("is-invalid").removeClass("is-valid"); 
    
    //$("#txt_descripcion_editar").val(data.ciu_descripcion);
    let cadena = "";
    if (data[3]=="Hoja de campo") {
      cadena += "<option value='CONEXION'>CONEXI&Oacute;N</option>";
    }else{
      cadena += "<option value='ATENCION'>ATENCI&Oacute;N</option>";
      cadena += "<option value='CORTE'>CORTE</option>";
      cadena += "<option value='RECONEXION'>RECONEXI&Oacute;N</option>";
    }
    $("#combo_tiposervicio_editar").html(cadena);
    $("#combo_tiposervicio_editar").val(data[3]).trigger("change");
    $("#modal_ciudadanos_solicitud").addClass("paddin");
})
$('#tabla_reconexion_pendientes').on('click','.imprimir',function(){
  var data = tbl_reconexionpendiente.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
  if(tbl_reconexionpendiente.row(this).child.isShown()){//Cuando esta en tamaño responsivo
      var data = tbl_reconexionpendiente.row(this).data();
  }
  window.open("../MPDF/generar_solicitud.php?codigo="+parseInt(data[0]));
})
$('#tabla_reconexion_pendientes').on('click','.cancelar',function(){
  var data = tbl_reconexionpendiente.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
  if(tbl_reconexionpendiente.row(this).child.isShown()){//Cuando esta en tamaño responsivo
      var data = tbl_reconexionpendiente.row(this).data();
  }
  Swal.fire({
    title: "Mensaje de advertencia",
    html: "¿Seguro que deseas <label style='color:#9B0000;'>cancelar</label> la orden de reconexi&oacute;n nro <label style='color:#9B0000;'>"+data[0]+"</label> ?",
    //text: "Una vez realizado esto el usuario tendra acceso al sistema!",
    type: 'warning',
    showCancelButton: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    focusConfirm: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: "<b>SI</b>",
    cancelButtonText: "<b>NO</b>"
  })
  .then((willDelete) => {
    if (willDelete.value) {
      cancelar_orden_reconexion(data[0]);
    }
  })
})
function Actualizar_solicitud(){
    let txt_idsolicitud     = $("#txt_idsolicitud").val();
    let combo_tiposolicitud = $("#combo_tiposolicitud_editar").val();

    let txt_referencia      = $("#txt_referencia_editar").val();
    let txt_responsable     = $("#txt_responsable_editar").val();
    let txt_fechaprogramada = $("#txt_fechaprogramada_editar").val();
    let fechapro        = txt_fechaprogramada.split('/');
    let fechaprogramada = fechapro[2] + '-' + fechapro[1] + '-' + fechapro[0];

    let txt_fechainicio = $("#txt_fechainicio_editar").val();
    let fechaini        = txt_fechainicio.split('/');
    let fechainicio     = fechaini[2] + '-' + fechaini[1] + '-' + fechaini[0];

    let txt_fechafinal  = $("#txt_fechafinal_editar").val();
    let fechafin        = txt_fechafinal.split('/');
    let fechafinal      = fechafin[2] + '-' + fechafin[1] + '-' + fechafin[0];

    let txt_nrocomprobante  = $("#txt_nrocomprobante_editar").val();
    let txt_descripcion     = $("#txt_descripcion_editar").val();
    let combo_estado        = $("#combo_estado").val();
    if(txt_responsable.length==0 || txt_fechaprogramada.length==0 || txt_idsolicitud.length==0){
      ValidacionInput('txt_responsable_editar','txt_fechaprogramada_editar','txt_fechaprogramada_editar','txt_fechaprogramada_editar','txt_nrodocumento_editar','txt_nombre_editar','txt_direccion_editar');
      return Swal.fire("Mensaje de Advertencia","Llene los campos vac&iacute;os","warning");
    }
    $.ajax({
      "url":"../controller/solicitud/controlador_actualizar_solicitud.php",
      type:'POST',
      data:{
          txt_idsolicitud:txt_idsolicitud,
          combo_tiposolicitud:combo_tiposolicitud,
          txt_referencia:txt_referencia,
          txt_responsable:txt_responsable,
          fechaprogramada:fechaprogramada,
          fechainicio:fechainicio,
          fechafinal:fechafinal,
          txt_nrocomprobante:txt_nrocomprobante,
          txt_descripcion:txt_descripcion,
          combo_estado:combo_estado
      }
    })
    .done(function(resp){
      if(resp>0){   
          if(resp==1){
              
              //document.getElementById('txt_nombre').value="";
              Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente actualizados, <b>datos de la orden modificados</b>","success")
              .then ( ( value ) =>  {
                $("#modal_editar_solicitud").modal('hide');
                tbl_contratos_inactivos.ajax.reload();
                tbl_reconexionpendiente.ajax.reload();
                tbl_reconexioncanceladas.ajax.reload();
                tbl_reconexionesrealizadas.ajax.reload();
              }); 
          }else{
              return Swal.fire("Mensaje de Advertencia","Lo sentimos, el nombre de la solicitud ya se encuentra asignada a la zona seleccionada en nuestra base de datos","warning");
          }
      }else{
          Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar la actualizaci\u00F3n","error");
      }
    })
}
function cancelar_orden_reconexion(id){
    $.ajax({
      url:'../controller/conexion/controlador_cancelar_orden_reconexion.php',
      type:'POST',
      data:{
        id:id
      }
  
    }).done(function(resp){
        if(resp>0){
          Swal.fire("Mensaje de Confirmaci\u00F3n","Orden de reconexi&oacute;n nro <label style='color:#9B0000;'>"+id+"</label> cancelada con &eacute;xito!","success").then((value)=>{
            tbl_contratos_inactivos.ajax.reload();
            tbl_reconexionpendiente.ajax.reload();
            tbl_reconexioncanceladas.ajax.reload();
            tbl_reconexionesrealizadas.ajax.reload();
          });
        }else{
          Swal.fire("Mensaje de Error","No se pudo cancelar la orden de reconexi&oacute;n","error");
        }   
    })
}
function registrar_reconexion() {
    document.getElementById('div_progress').style.display = 'block';

    let txt_idsolicitud = $("#txt_idsolicitud_reconexion").val();
    let txt_monto       = $("#txt_monto").val();
    let txt_descripcion = $("#txt_descripcion_reconexion_registro").val();
    let txtformato      = $("#txtformato").val();
    let idusuario       = $("#txt_codigo_principal").val();

    if (txtformato.length==0 ) {
      Boolean($("#txt_archivo").val().length>0) ? $("#txt_archivo").removeClass('is-invalid').addClass("is-valid") : $("#txt_archivo").removeClass('is-valid').addClass("is-invalid"); 
      return Swal.fire("Mensaje de Advertencia","<b>Anexa el documento necesario de la orden de reconexi&oacute;n en la secci&oacute;n </b><b style='color:#9B0000'>DATOS DE RECONEXI&Oacute;N</b>","warning");
    }
    if (txt_descripcion.length==0 ) {
      //$("#txt_descripcion_reconexion_registro").removeClass('is-valid').addClass("is-invalid"); 
      //return Swal.fire("Mensaje de Advertencia","<b>Falta llenar la descripci&oacute;n en la secci&oacute;n</b><b style='color:#9B0000'>DATOS DE reconexion DE CONEXI&Oacute;N</b>","warning");
    }
    $('#modal_procesar_datos').modal({backdrop: 'static', keyboard: false})
    $("#modal_procesar_datos").modal('show');
    var cadena = "";
        cadena+='<div class="progress"  style="height: 17px;">'+
                    '<div class="progress-bar bg-primary progress-bar-striped" id="myBar_2" style="width: 0%;font-weight: bold;font-size: 15px" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >'+
                      '<span class="sr-only">40% Complete (success)</span>'+
                      '<div class="progress-bar progress-bar-primary progress-bar-striped" id="">'+
                      '</div>'+
                   '</div>'+
                '</div>  ';
    $("#div_cadena_progress").html(cadena);
    var elem = document.getElementById("myBar_2");   
    var width = 0;
    var id = setInterval(frame, 200);
    function frame() {
        if (width >= 100) {
            clearInterval(id);                   
            $("#modal_procesar_datos").modal('hide');
        } else {
            if (width<99) {
                width++;
            }
            //elem.style.width = width + '%';
            //elem.innerHTML = "Procesando datos... ";
        }
    } 
    //return ;
    var form_data = new FormData();
    form_data.append("txt_archivo", $('#txt_archivo')[0].files[0]);
    form_data.append("txt_idsolicitud", txt_idsolicitud);
    form_data.append("txt_monto", txt_monto);
    form_data.append("txt_descripcion", txt_descripcion);
    form_data.append("txtidusuario", idusuario);
    form_data.append("txtformato", txtformato);
    $("#btn_subir").addClass("disabled");
    $.ajax({
        url: '../controller/conexion/controlador_reconexion_registro.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: form_data,
        xhr: function() {
          var xhr = new window.XMLHttpRequest();

          xhr.upload.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total;
              percentComplete = parseInt(percentComplete * 100);
              console.log(percentComplete);
              var elem = document.getElementById("myBar_2"); 
              //elem.style.width = percentComplete + '%';
              //elem.innerHTML = ""+ percentComplete +"%";
              if (percentComplete<100) {
                elem.style.width = percentComplete + '%';
                elem.innerHTML = ""+ percentComplete +"%";
              }
              //$("#xprogress").html("Progreso: "+ percentComplete +"%");
              if (percentComplete === 100) {
              }
            }
          }, false);

          return xhr;
        }
        //beforeSend: function() {$('#ads_txt_add_loading').html('Procesando anuncio...')}
    }).always(function (){
        //$("#ads_txt_add_loading").html('')
    }).done(function (resp) {
      //alert(resp);
        $("#btn_subir").removeClass("disabled");
        if (resp!=10) {
            $('body').removeClass('modal-open');
            document.querySelector('body').classList.remove('modal-open');
            $(".modal-backdrop").remove();
            document.getElementById('div_progress').style.display = 'none';
            $("#modal_procesar_datos").modal('hide');
            $('body').css('padding-right','0');
            if(resp!=0){
                Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente registrados,<b> nueva reconexi&oacute;n registrada</b><br><b>Cod. Reconexi&oacute;n: </b><b style='color:#9B0000'>"+resp+"</b>","success")
                .then ( ( value ) =>  {
                    //window.open("../MPDF/generar_contrato.php?codigo="+resp);
                    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
                    //$('.form-control').val("");
                    $("#modal_reconexion").modal('hide');
                    tbl_contratos_inactivos.ajax.reload();
                    tbl_reconexionpendiente.ajax.reload();
                    tbl_reconexioncanceladas.ajax.reload();
                    tbl_reconexionesrealizadas.ajax.reload();
                });
            }else{
                Swal.fire("Mensaje de Error","Lo sentimos no se pudo completar el registro","error");
            }
        }
    })
}
function imprimir_reconexiones_pendientes_excel() {
  window.open("excel/generar_excel_reconexion_pendientes.php"); 
}
//=============================================================================
//=============================RECONEXION CANCELADA============================
//=============================================================================


var tbl_reconexioncanceladas;
function listar_reconexiones_canceladas(){
  tbl_reconexioncanceladas = $("#tabla_conexiones_canceladas").DataTable({
    "ordering":false,
    //dom: 'Bfrtip',
    "lengthChange": false,
    "pageLength": 10,
    "destroy":true,
    "bProcessing": true,
    "bDeferRender": true,
    "bServerSide": true,
    "sAjaxSource":"../controller/conexion/serverside/serversideReconexionesCanceladas.php",
    "columns":[
      {"data":0},
      {"data":2},
      {"data":20},
      {"data":6},
      {"data":7},
      {"data":8},
      {"data":15},
      {"data":9,
        render: function (data, type, row ) {
          return "<button class='ver_detalle btn btn-warning  btn-sm' type='button' ><i class='fa fa-folder-open'></i><b></b></button>";
        }
      }
    ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $($(nRow).find("td")[0]).css('text-align', 'center' );
        $($(nRow).find("td")[1]).css('text-align', 'center' );
        $($(nRow).find("td")[2]).css('text-align', 'left' );
        $($(nRow).find("td")[3]).css('text-align', 'left' );
        $($(nRow).find("td")[4]).css('text-align', 'center' );
        $($(nRow).find("td")[5]).css('text-align', 'center' );
        $($(nRow).find("td")[6]).css('text-align', 'center' );
        $($(nRow).find("td")[7]).css('text-align', 'center' );
        $($(nRow).find("td")[8]).css('text-align', 'center' );
        $($(nRow).find("td")[9]).css('text-align', 'center' );
        $($(nRow).find("td")[10]).css('text-align', 'center' );
        $($(nRow).find("td")[11]).css('text-align', 'center' );

        $($(nRow).find("td")[0]).css('font-weight', 'bold' );
        $($(nRow).find("td")[1]).css('font-weight', 'bold' );
        $($(nRow).find("td")[2]).css('width', '160' );
        $($(nRow).find("td")[3]).css('width', '160' );
        $($(nRow).find("td")[7]).css('width', '110' );
        $($(nRow).find("td")[1]).css('width', '80' );
        $($(nRow).find("td")[0]).css('width', '90' );
        //$($(nRow).find("td")[5]).css('font-weight', 'bold' );
        //$($(nRow).find("td")[5]).css('color', '#9B0000' );
        $($(nRow).find("td")[6]).css('font-weight', 'bold' );
    },
    "language":idioma_espanol,
    select: true
  });
}
$('#tabla_conexiones_canceladas').on('click','.ver_detalle',function(){
    var data = tbl_reconexioncanceladas.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
    if(tbl_reconexioncanceladas.row(this).child.isShown()){//Cuando esta en tama単o responsivo
        var data = tbl_reconexioncanceladas.row(this).data();
    }
    
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
    $("#modal_detalle").modal({backdrop:'static',keyboard:false})
    $("#modal_detalle").modal('show');
    $("#lb_cod_orden").html(data[0]);
    $("#lb_cod_contrato").html(data[2]);
    $("#lb_tipo_fecha").html("Fecha Cancelado:");
    $("#lb_fecha_cancelado").html(data[15]);
    $("#lb_estado_orden").html(data[9]);
    $("#combo_tiposolicitud_detalle").val(data[11]).trigger("change");
    $("#txt_referencia_detalle").val("");
    $("#txt_nrocomprobante_detalle").val("");
    $("#txt_descripcion_detalle").val("");
    var combo_estado = data[9];
    var estado = "";
    if (combo_estado == "ATENDIDO" || combo_estado == "CANCELADO" ) {
      estado = "<option>ATENDIDO</option><option>CANCELADO</option>";
      $("#combo_estado_detalle").html(estado);
      $("#combo_estado_detalle").val(combo_estado).trigger("change");
      $("#combo_estado_detalle").prop('disabled',true);
      $(".bloquear").prop('disabled',true);
    }else{
      estado = "<option>PENDIENTE</option><option>CANCELADO</option>";
      $("#combo_estado_detalle").html(estado);
      $("#combo_estado_detalle").val(combo_estado).trigger("change");
      $("#combo_estado_detalle").prop('disabled',false);
      $(".bloquear").prop('disabled',false);
    }
    $("#txt_referencia_detalle").val(data[10]);
    $("#txt_responsable_detalle").val(data[13]);
    if (data[16]!="00/00/0000") {
      $("#txt_fechaprogramada_detalle").datepicker("setDate",data[16]);
    }
    if (data[17]!="00/00/0000") {
      $("#txt_fechainicio_detalle").datepicker("setDate",data[17]);
    }
    if (data[18]!="00/00/0000") {
      $("#txt_fechafinal_detalle").datepicker("setDate",data[18]);
    }
    $("#txt_nrocomprobante_detalle").val(data[19]);
    $("#txt_descripcion_detalle").val(data[12]);

    $("#txt_nrodocumento_detalle").val(data[4]);
    $("#txt_nombre_detalle").val(data[5]);
    $("#txt_direccion_detalle").val(data[6]);
    $('.form-control').removeClass("is-invalid").removeClass("is-valid"); 
    
    //$("#txt_descripcion_detalle").val(data.ciu_descripcion);
    let cadena = "";
    if (data[3]=="Hoja de campo") {
      cadena += "<option value='CONEXION'>CONEXI&Oacute;N</option>";
    }else{
      cadena += "<option value='ATENCION'>ATENCI&Oacute;N</option>";
      cadena += "<option value='CORTE'>CORTE</option>";
      cadena += "<option value='RECONEXION'>RECONEXI&Oacute;N</option>";
    }
    $("#combo_tiposervicio_detalle").html(cadena);
    $("#combo_tiposervicio_detalle").val(data[3]).trigger("change");
})
function imprimir_reconexiones_cancelados_excel() {
  window.open("excel/generar_excel_reconexiones_canceladas.php"); 
}
//=============================================================================
//=============================RECONEXION REALIZADA============================
//=============================================================================

var tbl_reconexionesrealizadas;
function listar_reconexiones_realizadas(){
  tbl_reconexionesrealizadas = $("#tabla_reconexiones_realizadas").DataTable({
    "ordering":false,
    //dom: 'Bfrtip',
    "lengthChange": false,
    "pageLength": 10,
    "destroy":true,
    "bProcessing": true,
    "bDeferRender": true,
    "bServerSide": true,
    "sAjaxSource":"../controller/conexion/serverside/serversideReconexionesRealizadas.php",
    "columns":[
      {"data":0},
      {"data":1},
      {"data":15},
      {"data":10},
      {"data":11},
      {"data":12},
      {"data":2},
      {"data":19},
      {"data":null,
        render: function (data, type, row ) {
          return "<button class='ver_descripcion btn btn-warning  btn-sm' type='button' ><i class='fa fa-folder-open'></i><b></b></button>";
        }
      },
      {"data":null,
        render: function (data, type, row ) {
          return "<button class='ver_archivo btn btn-warning  btn-sm' type='button' ><i class='fa fa-folder-open'></i><b></b></button>";
        }
      },
      {"data":7},
    ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $($(nRow).find("td")[0]).css('text-align', 'center' );
        $($(nRow).find("td")[1]).css('text-align', 'center' );
        $($(nRow).find("td")[2]).css('text-align', 'left' );
        $($(nRow).find("td")[3]).css('text-align', 'left' );
        $($(nRow).find("td")[4]).css('text-align', 'center' );
        $($(nRow).find("td")[5]).css('text-align', 'center' );
        $($(nRow).find("td")[6]).css('text-align', 'center' );
        $($(nRow).find("td")[7]).css('text-align', 'center' );
        $($(nRow).find("td")[8]).css('text-align', 'center' );
        $($(nRow).find("td")[9]).css('text-align', 'center' );
        $($(nRow).find("td")[10]).css('text-align', 'center' );
        $($(nRow).find("td")[11]).css('text-align', 'center' );

        $($(nRow).find("td")[0]).css('font-weight', 'bold' );
        $($(nRow).find("td")[1]).css('font-weight', 'bold' );
        $($(nRow).find("td")[2]).css('width', '160' );
        $($(nRow).find("td")[3]).css('width', '160' );
        $($(nRow).find("td")[7]).css('width', '110' );
        $($(nRow).find("td")[1]).css('width', '80' );
        $($(nRow).find("td")[0]).css('width', '90' );
        //$($(nRow).find("td")[5]).css('font-weight', 'bold' );
        //$($(nRow).find("td")[5]).css('color', '#9B0000' );
        $($(nRow).find("td")[6]).css('font-weight', 'bold' );
    },
    "language":idioma_espanol,
    select: true
  });
}
$('#tabla_reconexiones_realizadas').on('click','.ver_detalle',function(){
    var data = tbl_reconexionesrealizadas.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
    if(tbl_reconexionesrealizadas.row(this).child.isShown()){//Cuando esta en tama単o responsivo
        var data = tbl_reconexionesrealizadas.row(this).data();
    }
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
    $("#modal_detalle").modal({backdrop:'static',keyboard:false})
    $("#modal_detalle").modal('show');
    $("#lb_cod_orden").html(data[0]);
    $("#lb_cod_contrato").html(data[2]);
    $("#lb_tipo_fecha").html("Fecha Cancelado:");
    $("#lb_fecha_cancelado").html(data[15]);
    $("#lb_estado_orden").html(data[9]);
    $("#combo_tiposolicitud_detalle").val(data[11]).trigger("change");
    $("#txt_referencia_detalle").val("");
    $("#txt_nrocomprobante_detalle").val("");
    $("#txt_descripcion_detalle").val("");
    var combo_estado = data[9];
    var estado = "";
    if (combo_estado == "ATENDIDO" || combo_estado == "CANCELADO" ) {
      estado = "<option>ATENDIDO</option><option>CANCELADO</option>";
      $("#combo_estado_detalle").html(estado);
      $("#combo_estado_detalle").val(combo_estado).trigger("change");
      $("#combo_estado_detalle").prop('disabled',true);
      $(".bloquear").prop('disabled',true);
    }else{
      estado = "<option>PENDIENTE</option><option>CANCELADO</option>";
      $("#combo_estado_detalle").html(estado);
      $("#combo_estado_detalle").val(combo_estado).trigger("change");
      $("#combo_estado_detalle").prop('disabled',false);
      $(".bloquear").prop('disabled',false);
    }
    $("#txt_referencia_detalle").val(data[10]);
    $("#txt_responsable_detalle").val(data[13]);
    if (data[16]!="00/00/0000") {
      $("#txt_fechaprogramada_detalle").datepicker("setDate",data[16]);
    }
    if (data[17]!="00/00/0000") {
      $("#txt_fechainicio_detalle").datepicker("setDate",data[17]);
    }
    if (data[18]!="00/00/0000") {
      $("#txt_fechafinal_detalle").datepicker("setDate",data[18]);
    }
    $("#txt_nrocomprobante_detalle").val(data[19]);
    $("#txt_descripcion_detalle").val(data[12]);

    $("#txt_nrodocumento_detalle").val(data[4]);
    $("#txt_nombre_detalle").val(data[5]);
    $("#txt_direccion_detalle").val(data[6]);
    $('.form-control').removeClass("is-invalid").removeClass("is-valid"); 
    
    //$("#txt_descripcion_detalle").val(data.ciu_descripcion);
    let cadena = "";
    if (data[3]=="Hoja de campo") {
      cadena += "<option value='CONEXION'>CONEXI&Oacute;N</option>";
    }else{
      cadena += "<option value='ATENCION'>ATENCI&Oacute;N</option>";
      cadena += "<option value='CORTE'>CORTE</option>";
      cadena += "<option value='RECONEXION'>RECONEXI&Oacute;N</option>";
    }
    $("#combo_tiposervicio_detalle").html(cadena);
    $("#combo_tiposervicio_detalle").val(data[3]).trigger("change");
})
$('#tabla_reconexiones_realizadas').on('click','.ver_descripcion',function(){
  var data = tbl_reconexionesrealizadas.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
  if(tbl_reconexionesrealizadas.row(this).child.isShown()){//Cuando esta en tama単o responsivo
      var data = tbl_reconexionesrealizadas.row(this).data();
  }
  $('.form-control').removeClass("is-invalid").removeClass("is-valid");
  $("#modal_ver_descripcion").modal({backdrop:'static',keyboard:false})
  $("#modal_ver_descripcion").modal('show');
  $("#lb_idcorte2").html(data[0]);
  $("#text_descripcion").val(data[4]);
})
$('#tabla_reconexiones_realizadas').on('click','.ver_archivo',function(){
  var data = tbl_reconexionesrealizadas.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
  if(tbl_reconexionesrealizadas.row(this).child.isShown()){//Cuando esta en tama単o responsivo
      var data = tbl_reconexionesrealizadas.row(this).data();
  }
  $('.form-control').removeClass("is-invalid").removeClass("is-valid");
  $("#modal_ver_archivo").modal({backdrop:'static',keyboard:false})
  $("#modal_ver_archivo").modal('show');
  $("#lb_idcorte").html(data[0]);
  let txt_archivo = data[3];
  if (txt_archivo != "") {
      let cadena = "";
      cadena =  '<object data="orden_conexion/'+txt_archivo+'"#zoom=100" type="application/pdf" style="width: 100%; height: 50%; min-height: 350px;">';
      $("#div_archivo").html(cadena);
  }else{
      let cadena =  '<br><br><br><br><br><br><br><br><br><br><label>NO EXISTE ARCHIVO</label><br><br><br><br><br><br><br>';
      $("#div_archivo").html(cadena);
  } 
})
function imprimir_reconexiones_realizadas_excel() {
  window.open("excel/generar_excel_reconexiones_realizadas.php"); 
}
