var t_ingreso;
function listar_ingreso(){
    traer_solicitudes_pendientes_ingreso();
    var f = new Date();
    var anio = f.getFullYear();
    var mes = f.getMonth()+1;
    var d = f.getDate();
    // 01 02 03 04 05 06 07 08 09
    if(d<10){
        d='0'+d;
    }
    if(mes<10){
        mes='0'+mes;
    }
    document.getElementById('txt_finicio').value=anio+"-"+mes+"-"+d;
    document.getElementById('txt_ffin').value=anio+"-"+mes+"-"+d;
    var finicio = document.getElementById('txt_finicio').value;
    var ffin = document.getElementById('txt_ffin').value;
    var estatus = document.getElementById('combo_estado').value;
    //alert(finicio.length);
    if(finicio.length==0 || ffin.length==0 ){
        return Swal.fire("Mensaje de Advertencia","Seleccione una fecha inicio y fin","warning");
    }
    t_ingreso = $("#tabla_ingreso").DataTable({
		"ordering":false,   
        "pageLength":10,
        "destroy":true,
        "async": false ,
        "responsive": true,
    	"autoWidth": false,
      "ajax":{
        "method":"POST",
        "url":"../controller/ingreso/controlador_ingreso_listar.php",
        data:{
            finicio:finicio,
            ffin:ffin,
            estatus:estatus
        }
      },
      "columns":[
            {"defaultContent":""},
            {"data":"solingreso_fregistro"},
            {"data":"solingreso_estado",
                render: function(data,type,row){
                    if(data=='APROBADO'){
                        return '<span class="badge bg-success"><b style="color:white;">'+data+'</b></span>';
                    }
                    if (data == 'PENDIENTE') {
                        return '<span class="badge bg-gradient-primary"><b style="color:white;">'+data+'</b></span>';
                    }
                    if (data == 'RECHAZADO') {
                        return '<span class="badge bg-danger"><b style="color:white;">'+data+'</b></span>';
                    }
                }
            }, 
            {"data":"emp_razon"},
            {"defaultContent":"<button class='ver_datos btn btn-sm btn_rojo' style='background-color:white;padding: 0px;' title='Ver datos del veh&iacute;culo'><i title='Ver datos del veh&iacute;culo' class='fa fa-folder-open '></i></button>&nbsp;"},
            {"defaultContent":"<button  style='background-color:white;padding-left: 10px;padding-right: 0px;' title='Aceptar Solicitud' class='aceptar btn-sm btn btn-success' type='button'><i class='fa fa-check'></i><b>&nbsp;</b></button>"
            +"&nbsp;&nbsp;&nbsp;<button  style='background-color:white;padding-left: 10px;padding-right: 0px;' title='Rechazar Solicitud' class='rechazar btn-sm btn btn-danger' type='button'><i class='fa fa-times'></i><b>&nbsp;</b></button>"}
        
            //{"defaultContent":"<button class='aceptar btn btn-primary'>&nbsp;<i class='fa fa-check-circle'></i></button>&nbsp;<button class=rechazar btn btn-danger'>&nbsp;<i class='fa fa-times-circle'></i></button>"}
		  
      ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
         $($(nRow).find("td")[0]).css('text-align', 'center' );
         $($(nRow).find("td")[2]).css('text-align', 'center' );
         $($(nRow).find("td")[3]).css('text-align', 'left' );
         $($(nRow).find("td")[1]).css('text-align', 'center' );
         $($(nRow).find("td")[4]).css('text-align', 'center' );
         $($(nRow).find("td")[6]).css('text-align', 'left' );
         $($(nRow).find("td")[7]).css('text-align', 'center' );
         $($(nRow).find("td")[8]).css('text-align', 'center' );
         $($(nRow).find("td")[5]).css('text-align', 'center' );
     },
     "language":idioma_espanol,
     select: true
 });
 t_ingreso.on('draw.td',function(){
     var PageInfo = $("#tabla_ingreso").DataTable().page.info();
     t_ingreso.column(0, {page: 'current'}).nodes().each(function(cell, i){
         cell.innerHTML = i + 1 + PageInfo.start;
     });
 });
}

$('#tabla_ingreso').on('click','.ver_datos',function(){
    var data = t_ingreso.row($(this).parents('tr')).data();//En tamaño escritorio
    if(t_ingreso.row(this).child.isShown()){
        var data = t_ingreso.row(this).data();
    }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $('#modal_ver_datos').modal({backdrop: 'static', keyboard: false})
    $("#modal_ver_datos").modal('show');

    //$("#txt_razonsocial_editar").val(data.emp_razon);
    $("#txt_cedula").val(data.empl_nrodocumento);
    $("#txt_nombre").val(data.motorista);
    $("#txt_direccion").val(data.empl_direccion);
    $("#txt_telefono").val(data.empl_movil);
    $("#txt_email").val(data.empl_email);
    $("#div_img").html('<img width="70%" src="empleado/'+data.empl_foto+'" alt="">');
    $("#txt_nroplaca").val(data.veh_placa_camion);
    $("#txt_nroplaca_contenedor").val(data.veh_placa_contenedor);
    $("#txt_color").val(data.veh_color);
    $("#txt_marca").val(data.veh_marcar);
    $("#txt_peso").val(data.vis_pesomaterial);
    $("#txt_fecha_inicio").val(data.vis_fechainicio);
    $("#txt_fecha_final").val(data.vis_fechafinal);
    if (data.vis_tipomaterial == 'Raquie') {
        $("#rad_tipo_raquie").prop("checked", true);
    }
    if (data.vis_tipomaterial == 'Madera') {
        $("#rad_tipo_madera").prop("checked", true);
    }
    if (data.vis_tipomaterial == 'Collito') {
        $("#rad_tipo_collito").prop("checked", true);
    }
})

$('#tabla_ingreso').on('click','.rechazar',function(){
    var data = t_ingreso.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
    if(t_ingreso.row(this).child.isShown()){//Cuando esta en tamaño responsivo
        var data = t_ingreso.row(this).data();
    }

    Swal.fire({
        title: 'DESEAS RECHAZAR LA SOLICITUD DE INGRESO?',
        text: "Una vez rechazado el estatus de la solicitud cambiara a rechazado",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<b>Rechazar Ingreso</b>',
        cancelButtonText: '<b>Cerrar</b>'
      }).then((result) => {
        if (result.value) {
            Modificar_Estatus(data.solingreso_id,'RECHAZADO');
        }
    })
})

$('#tabla_ingreso').on('click','.aceptar',function(){
    var data = t_ingreso.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
    if(t_ingreso.row(this).child.isShown()){//Cuando esta en tamaño responsivo
        var data = t_ingreso.row(this).data();
    }

    Swal.fire({
        title: 'DESEAS APROBAR LA SOLICITUD DE INGRESO?',
        text: "Una vez aceptado el estatus de la solicitud cambiara a aprobada",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<b>Aceptar Ingreso</b>',
        cancelButtonText: '<b>Cerrar</b>'
      }).then((result) => {
        if (result.value) {
            Modificar_Estatus(data.solingreso_id,'APROBADO');
        }
    })
})

function Modificar_Estatus(id,estatus){
    let idusuario = document.getElementById('txtidusuario_principal_usuario').value;
    $.ajax({
        url:'../controller/ingreso/controlador_modificar_estatus_ingreso.php',
        type:'POST',
        data:{
            id:id,
            idusuario:idusuario,
            estatus:estatus
        }
    }).done(function(resp){
        if(resp>0){
            traer_solicitudes_pendientes_ingreso();
            Swal.fire("Mensaje de Confirmación","La solicitud de ingreso fue "+estatus,"success")
            .then ( ( value ) =>  {
                t_ingreso.ajax.reload();
                traer_solicitudes_pendientes_ingreso();               
            });
        }else{
            Swal.fire("Mensaje De Error","El registro no se pudo completar","error");
        }
    })
}


var t_ingreso_seguridad;
function listar_ingreso_seguridad(){
    var f = new Date();
    var anio = f.getFullYear();
    var mes = f.getMonth()+1;
    var d = f.getDate();
    // 01 02 03 04 05 06 07 08 09
    if(d<10){
        d='0'+d;
    }
    if(mes<10){
        mes='0'+mes;
    }
    document.getElementById('txt_finicio').value=anio+"-"+mes+"-"+d;
    document.getElementById('txt_ffin').value=anio+"-"+mes+"-"+d;
    
    var finicio = document.getElementById('txt_finicio').value;
    var ffin = document.getElementById('txt_ffin').value;
    var estatus = '%';
    if(finicio.length==0 || ffin.length==0 ){
        return Swal.fire("Mensaje de Advertencia","Seleccione una fecha inicio y fin","warning");

    }
    t_ingreso_seguridad = $("#tabla_ingreso_seguridad").DataTable({
		"ordering":false,   
        "pageLength":10,
        "destroy":true,
        "async": false ,
        "responsive": true,
    	"autoWidth": false,
      "ajax":{
        "method":"POST",
        "url":"../controller/ingreso/controlador_ingreso_listar.php",
        data:{
            finicio:finicio,
            ffin:ffin,
            estatus:estatus
        }
      },
      "columns":[
            {"defaultContent":""},
            {"data":"solingreso_fregistro"},
            {"data":"usu_usuario"},
            {"data":"solingreso_estado",
                render: function(data,type,row){
                    if(data=='APROBADO'){
                        return '<span class="badge bg-success"><b style="color:white;">'+data+'</b></span>';
                    }
                    if (data == 'PENDIENTE') {
                        return '<span class="badge bg-gradient-primary"><b style="color:white;">'+data+'</b></span>';
                    }
                    if (data == 'RECHAZADO') {
                        return '<span class="badge bg-danger"><b style="color:white;">'+data+'</b></span>';
                    }
                }
            }, 
            {"data":"emp_razon"},
            {"defaultContent":"<button class='ver_datos btn btn-sm btn_rojo' style='background-color:white;padding: 0px;' title='Ver datos del veh&iacute;culo'><i title='Ver datos del veh&iacute;culo' class='fa fa-folder-open '></i></button>&nbsp;"},
		  
      ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
         $($(nRow).find("td")[0]).css('text-align', 'center' );
         $($(nRow).find("td")[2]).css('text-align', 'center' );
         $($(nRow).find("td")[3]).css('text-align', 'center' );
         $($(nRow).find("td")[1]).css('text-align', 'center' );
         $($(nRow).find("td")[4]).css('text-align', 'left' );
         $($(nRow).find("td")[6]).css('text-align', 'left' );
         $($(nRow).find("td")[7]).css('text-align', 'center' );
         $($(nRow).find("td")[8]).css('text-align', 'center' );
         $($(nRow).find("td")[5]).css('text-align', 'center' );
     },
     "language":idioma_espanol,
     select: true
 });
 t_ingreso_seguridad.on('draw.td',function(){
     var PageInfo = $("#tabla_ingreso_seguridad").DataTable().page.info();
     t_ingreso_seguridad.column(0, {page: 'current'}).nodes().each(function(cell, i){
         cell.innerHTML = i + 1 + PageInfo.start;
     });
 });
}

$('#tabla_ingreso_seguridad').on('click','.ver_datos',function(){
    var data = t_ingreso_seguridad.row($(this).parents('tr')).data();//En tamaño escritorio
    if(t_ingreso_seguridad.row(this).child.isShown()){
        var data = t_ingreso_seguridad.row(this).data();
    }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $('#modal_ver_datos').modal({backdrop: 'static', keyboard: false})
    $("#modal_ver_datos").modal('show');

    //$("#txt_razonsocial_editar").val(data.emp_razon);
    $("#txt_cedula").val(data.empl_nrodocumento);
    $("#txt_nombre").val(data.motorista);
    $("#txt_direccion").val(data.empl_direccion);
    $("#txt_telefono").val(data.empl_movil);
    $("#txt_email").val(data.empl_email);
    $("#div_img").html('<img width="70%" src="empleado/'+data.empl_foto+'" alt="">');
    $("#txt_nroplaca").val(data.veh_placa_camion);
    $("#txt_nroplaca_contenedor").val(data.veh_placa_contenedor);
    $("#txt_color").val(data.veh_color);
    $("#txt_marca").val(data.veh_marcar);
    $("#txt_peso").val(data.vis_pesomaterial);
    $("#txt_fecha_inicio").val(data.vis_fechainicio);
    $("#txt_fecha_final").val(data.vis_fechafinal);
    if (data.vis_tipomaterial == 'Raquie') {
        $("#rad_tipo_raquie").prop("checked", true);
    }
    if (data.vis_tipomaterial == 'Madera') {
        $("#rad_tipo_madera").prop("checked", true);
    }
    if (data.vis_tipomaterial == 'Collito') {
        $("#rad_tipo_collito").prop("checked", true);
    }
})
