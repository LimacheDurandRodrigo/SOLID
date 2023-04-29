var tbl_empleado;
function listar_empleado(){
  let idempresa = document.getElementById('txtidempresa_principal').value;
  tbl_empleado = $("#tabla_empleado").DataTable({
      "ordering":false,
      "bLengthChange":true,
      "searching": { "regex": false },
      "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
      "pageLength": 10,
      "destroy":true,
      "async": false ,
      "processing": true,
      "ajax":{
          "url":"../controller/empleado2/controlador_empleado_listar.php",
          type:'POST',
          data:{
              idempresa:idempresa,
              tipo:tipo
          }
      },
      "columns":[
        {"data":null},
        {"data":"empl_nrodocumento"},
        {"data":"empleado"},
        {"data":"empl_fechanacimiento2"},
        {"data":"empl_movil"},
        {"data":"empl_email"},
        {"data":"empl_direccion"},
        {"data":"empl_estado",          
          render: function(data,type,row){
            if(data=='ACTIVO'){
            return '<span class="badge bg-success"><b>ACTIVO</b></span>';
            }else{
            return '<span class="badge bg-danger"><b>INACTIVO</b></span>';
            }
          }
        }, 
        {"defaultContent":"<button class='editar btn btn-sm btn_rojo' style='background-color:white;padding: 0px;' title='Editar datos del empleado'><i title='Editar datos del empleado' class='fa fa-edit '></i></button>&nbsp;"
        +"<button class='editar_photo btn btn-sm btn_rojo' style='background-color:white;padding: 0px;' title='Editar datos del empleado'><i title='Editar foto del empleado' class='fa fa-camera '></i></button>"}
      ],
      "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $($(nRow).find("td")[0]).css('text-align', 'center' );
        $($(nRow).find("td")[2]).css('text-align', 'left' );
        $($(nRow).find("td")[3]).css('text-align', 'center' );
        $($(nRow).find("td")[1]).css('text-align', 'center' );
        $($(nRow).find("td")[4]).css('text-align', 'center' );
        $($(nRow).find("td")[8]).css('text-align', 'center' );
        $($(nRow).find("td")[7]).css('text-align', 'center' );
        $($(nRow).find("td")[8]).css('vertical-align', 'middle' );
      },
      "language":idioma_espanol,
      select: true,
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
      ]
  });
  tbl_empleado.on('draw.td',function(){
    var PageInfo = $("#tabla_empleado").DataTable().page.info();
    tbl_empleado.column(0, {page: 'current'}).nodes().each(function(cell, i){
      cell.innerHTML = i + 1 + PageInfo.start;
    });
  });
}
$('#tabla_empleado').on('click','.editar',function(){
  var data = tbl_empleado.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_empleado.row(this).child.isShown()){
      var data = tbl_empleado.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  $('#modal_editar').modal({backdrop: 'static', keyboard: false})
  $("#modal_editar").modal('show');
  document.getElementById('txtidempleado').value   = data.empleado_id;

  $("#txtdni_editar").val(data.empl_nrodocumento);
  $("#txtnombre_editar").val(data.empl_nombre);
  $("#txtapepat_editar").val(data.empl_apepat);
  $("#txtapemat_editar").val(data.empl_apemat);
  $("#txtemail_editar").val(data.empl_email);
  $("#txtcelular_editar").val(data.empl_movil);
  $("#txt_direccion_editar").val(data.empl_direccion);
  $("#txt_fecha_editar").val(data.empl_fechanacimiento);
  $("#combo_estado").select2().val(data.empl_estado).trigger('change.select2');
  $('.form-control').removeClass("is-invalid").removeClass("is-valid");
})
$('#tabla_empleado').on('click','.editar_photo',function(){
  var data = tbl_empleado.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_empleado.row(this).child.isShown()){
      var data = tbl_empleado.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  $('#modal_foto').modal({backdrop: 'static', keyboard: false})
  $("#modal_foto").modal('show');
  $("#txtidempleado_editar").val(data.empleado_id);
  $("#txt_ruta_foto_editar").val(data.empl_foto);
  let cadena = '<img src="empleado/'+data.empl_foto+'" class="kv-preview-data file-preview-image file-zoom-detail" align="center" style="width: 25%;height:auto;text-align:center">';
  $("#div_foto").html(cadena);
  $("#txt_archivo_editar").val("");
  $(".lb_archivo_editar").val("");
  $('.form-control').removeClass("is-invalid").removeClass("is-valid");
})
function ValidacionInputActualizacion_empleado(txtdni_perfil,txtnombre_perfil,txtapepat_perfil,
            txtapemat_perfil,txt_fecha_perfil,txtcelular_perfil,txtemail_perfil
            ,txt_direccion_perfil){
    Boolean($("#"+txtdni_perfil).val().length>0) ? $("#"+txtdni_perfil).removeClass('is-invalid').addClass("is-valid") : $("#"+txtdni_perfil).removeClass('is-valid').addClass("is-invalid"); 
    Boolean($("#"+txtnombre_perfil).val().length>0) ? $("#"+txtnombre_perfil).removeClass('is-invalid').addClass("is-valid") : $("#"+txtnombre_perfil).removeClass('is-valid').addClass("is-invalid"); 
    Boolean($("#"+txtapepat_perfil).val().length>0) ? $("#"+txtapepat_perfil).removeClass('is-invalid').addClass("is-valid") : $("#"+txtapepat_perfil).removeClass('is-valid').addClass("is-invalid"); 
    Boolean($("#"+txtapemat_perfil).val().length>0) ? $("#"+txtapemat_perfil).removeClass('is-invalid').addClass("is-valid") : $("#"+txtapemat_perfil).removeClass('is-valid').addClass("is-invalid"); 
    Boolean($("#"+txt_fecha_perfil).val().length>0) ? $("#"+txt_fecha_perfil).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_fecha_perfil).removeClass('is-valid').addClass("is-invalid"); 
    Boolean($("#"+txtcelular_perfil).val().length>0) ? $("#"+txtcelular_perfil).removeClass('is-invalid').addClass("is-valid") : $("#"+txtcelular_perfil).removeClass('is-valid').addClass("is-invalid"); 
    Boolean($("#"+txtemail_perfil).val().length>0) ? $("#"+txtemail_perfil).removeClass('is-invalid').addClass("is-valid") : $("#"+txtemail_perfil).removeClass('is-valid').addClass("is-invalid"); 
    Boolean($("#"+txt_direccion_perfil).val().length>0) ? $("#"+txt_direccion_perfil).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_direccion_perfil).removeClass('is-valid').addClass("is-invalid"); 
}
function Editar_empleado(){
    let id            = $("#txtidempleado").val();
    let nrodocumento  = $("#txtdni_editar").val();
    let nombre        = $("#txtnombre_editar").val();
    let apepat        = $("#txtapepat_editar").val();
    let apemat        = $("#txtapemat_editar").val();
    let fecnacimiento = $("#txt_fecha_editar").val();     
    let celular       = $("#txtcelular_editar").val();
    let email         = $("#txtemail_editar").val();
    let direccion     = $('#txt_direccion_editar').val();
    let idempresa     = $('#txtidempresa_principal').val();
    let combo_estado  = $('#combo_estado').val();
    if(nombre.length==0 || apepat.length==0 || apemat.length==0 || direccion.length==0 
        || fecnacimiento.length==0 || nrodocumento.length==0){
        ValidacionInputActualizacion_empleado('txtdni_editar','txtnombre_editar','txtapepat_editar',
            'txtapemat_editar','txt_fecha_editar','txt_fecha_editar','txt_fecha_editar'
            ,'txt_direccion_editar');
        return Swal.fire("Mensaje de advertencia","Tiene algunos campos vac&iacute;os","warning");
    }
    let fechaactual = new Date();
    let anio = fechaactual.getFullYear();
    let fecha = fecnacimiento.split('-');
    let edad =  anio - fecha[0];
    if(edad<18){
        $("#txt_fecha_editar").removeClass('is-valid').addClass("is-invalid");
        return   Swal.fire("Mensaje de Advertencia","El empleado debe ser mayor de edad","warning");
    }else{
        $("#txt_fecha_editar").removeClass('is-invalid').addClass("is-valid"); 
    }
    if (email.length!=0) {
        if (validar_email(email)) {
            $("#txtemail_editar").removeClass('is-invalid').addClass("is-valid"); 
        }else{
            $("#txtemail_editar").removeClass('is-valid').addClass("is-invalid");
            return Swal.fire("Lo sentimos, formato de email del empleado no es valido.","", "error");
        }
    }
    $.ajax({
        url:'../controller/empleado/controlador_empleado_editar.php',
        type:'POST',
        data:{
            id:id,
            nrodocumento:nrodocumento,
            nombre:nombre,
            apepat:apepat,
            apemat:apemat,
            fecnacimiento:fecnacimiento,
            celular:celular,
            email:email,
            direccion:direccion,
            estado:combo_estado,
            tipo:'ADMINISTRATIVO',
            idempresa:idempresa
        }
    })
    .done(function(resp){
        if (resp > 0) {
          if (resp==1) {
            traer_administrador();            
            Swal.fire("Mensaje de Confirmaci\u00F3n","<b>Datos del empleado</b> correctamente actualizado","success")
            .then ( ( value ) =>  {
              tbl_empleado.ajax.reload();
              $("#modal_editar").modal('hide');
            });             
          }else {
            Swal.fire("Mensaje de Advertencia","Lo sentimos, el nro de documento ingresado ya esta registrado en nuestra data","warning")               
          }
        }else{
          Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar el registro","error")
        }
    })
}
function editar_fotoempleado() {
    let txt_idempleado   = document.getElementById('txtidempleado_editar').value;
    let archiv           = document.getElementById('txt_archivo_editar').value;
    let txt_ruta         = document.getElementById('txt_ruta_foto_editar').value;

    let extesion = archiv.split('.').pop();//FOTO12321421.JPG
    let nombrefoto ="";
    let f = new Date();
    if(archiv.length>0){
      nombrefoto="EMPL-"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMilliseconds()+"."+extesion;
    }else{
        return Swal.fire("Mensaje de Advertencia","Seleccione una imagen","warning");
    }
    let form_data = new FormData();
    let fotoobject = $("#txt_archivo_editar")[0].files[0];//El objeto de la foto adjuntada
    //form_data.append("txt_archivo", $('#txt_archivo_perfil')[0].files[0]);
    form_data.append("txt_idempleado", txt_idempleado);
    form_data.append("txt_ruta", txt_ruta);
    form_data.append('nombrefoto',nombrefoto);
    form_data.append('foto',fotoobject);
    $("#btn_subirfoto").attr("disabled", true);
    $.ajax({
        url: '../controller/usuario/controlador_actualizar_foto_perfil.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: form_data,
    })
    .done(function (resp) {
        $("#btn_subirfoto").attr("disabled", false);
        if (resp != 0) {
            if (resp == 1) {
                Swal.fire("Mensaje de Confirmaci\u00F3n", "Datos correctamente registrados, <b>nueva foto de perfil registrada con &eacute;xito</b>", "success")
                .then((value) => {
                    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
                    //$("#txtformato_foto").val("");
                    $("#txt_archivo_perfil").val("");
                    $(".lb_archivo_perfil").val("");
                    $("#modal_foto").modal('hide');
                    tbl_empleado.ajax.reload();
                    traer_administrador();
                });
            }
        } else {
            Swal.fire("Mensaje de Error", "Lo sentimos no se pudo completar el registro", "error");
        }
    })
}
function abrirmodalregistro() {
    $('#modal_registrar').modal({backdrop: 'static', keyboard: false})
    $("#modal_registrar").modal('show');
    limpiar_registro();
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
}
function limpiar_registro() {
    $("#txt_archivo_registrar").val("");
    $(".lb_archivo_registrar").val("");
    $("#txtdni_registrar").val();
    $("#txtnombre_registrar").val("");
    $("#txtapepat_registrar").val("");
    $("#txtapemat_registrar").val("");
    $("#txt_fecha_registrar").val("");
    $("#txtcelular_registrar").val("");
    $("#txtemail_registrar").val("");
    $('#txt_direccion_registrar').val("");
}
function Registrar_empleado(){
    let idempresa     = $("#txtidempresa_principal").val();
    let nrodocumento  = $("#txtdni_registrar").val();
    let nombre        = $("#txtnombre_registrar").val();
    let apepat        = $("#txtapepat_registrar").val();
    let apemat        = $("#txtapemat_registrar").val();
    let fecnacimiento = $("#txt_fecha_registrar").val();     
    let celular       = $("#txtcelular_registrar").val();
    let email         = $("#txtemail_registrar").val();
    let direccion     = $('#txt_direccion_registrar').val();
    let archiv        = document.getElementById('txt_archivo_registrar').value;

    if(nombre.length==0 || apepat.length==0 || apemat.length==0 || direccion.length==0 
        || fecnacimiento.length==0 || nrodocumento.length==0 ){
        ValidacionInputActualizacion_empleado('txtdni_registrar','txtnombre_registrar','txtapepat_registrar',
            'txtapemat_registrar','txt_fecha_registrar','txt_fecha_registrar','txt_fecha_registrar'
            ,'txt_direccion_registrar');
        return Swal.fire("Mensaje de advertencia","Tiene algunos campos vac&iacute;os","warning");
    }
    let fechaactual = new Date();
    let anio = fechaactual.getFullYear();
    let fecha = fecnacimiento.split('-');
    let edad =  anio - fecha[0];
    if(edad<18){
        $("#txt_fecha_registrar").removeClass('is-valid').addClass("is-invalid");
        return   Swal.fire("Mensaje de Advertencia","El empleado debe ser mayor de edad","warning");
    }else{
        $("#txt_fecha_registrar").removeClass('is-invalid').addClass("is-valid"); 
    }
    if (email.length!=0) {
        if (validar_email(email)) {
            $("#txtemail_registrar").removeClass('is-invalid').addClass("is-valid"); 
        }else{
            $("#txtemail_registrar").removeClass('is-valid').addClass("is-invalid");
            return Swal.fire("Lo sentimos, formato de email del empleado no es valido.","", "error");
        }
    }
    let extesion = archiv.split('.').pop();//FOTO12321421.JPG
    let nombrefoto ="";
    let f = new Date();
    if(archiv.length>0){
      nombrefoto="EMPL-"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMilliseconds()+"."+extesion;
    }else{
        return Swal.fire("Mensaje de Advertencia","Seleccione una imagen","warning");
    }
    let form_data = new FormData();
    let fotoobject = $("#txt_archivo_registrar")[0].files[0];//El objeto de la foto adjuntada
    let tipo      = "ADMINISTRATIVO";
    form_data.append('nrodocumento',nrodocumento);
    form_data.append('nombre',nombre);
    form_data.append('apepat',apepat);
    form_data.append('apemat',apemat);
    form_data.append('fecnacimiento',fecnacimiento);
    form_data.append('celular',celular);
    form_data.append('email',email);
    form_data.append('direccion',direccion);
    form_data.append('tipo',tipo);
    form_data.append('idempresa',idempresa);
    form_data.append('nombrefoto',nombrefoto);
    form_data.append('foto',fotoobject);

    $.ajax({
        url:'../controller/empleado/controlador_empleado_registrar.php',
        type:'POST',
        contentType: false,
        processData: false,
        data: form_data,
    })
    .done(function(resp){
        if (resp > 0) {
          if (resp==1) {
            traer_administrador();            
            Swal.fire("Mensaje de Confirmaci\u00F3n","<b>Datos del empleado</b> correctamente registrados","success")
            .then ( ( value ) =>  {
              tbl_empleado.ajax.reload();
              $("#modal_registrar").modal('hide');
            });             
          }else {
            Swal.fire("Mensaje de Advertencia","Lo sentimos, el nro de documento ingresado ya esta registrado en nuestra data","warning")               
          }
        }else{
          Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar el registro","error")
        }
    })
}
function validar_email(email) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}