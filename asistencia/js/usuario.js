function Iniciar_Sesion(){
    recuerdame();
    let usu  = document.getElementById('txt_usuario').value;
    let pass = document.getElementById('txt_pass').value;
    if(usu.length==0 || pass.length==0){
        return Swal.fire({
          icon: 'warning',
          title: 'Mensaje de Advertencia',
          text: 'Llene los campos de la sesion',
          heightAuto:false
        });
    }
    $.ajax({
        url: 'controller/usuario/iniciar_sesion.php',
        type: 'POST',
        data:{
          u:usu,
          p:pass
        }
    }).done(function(resp){
      //alert(resp);
        let data = JSON.parse(resp);
        //return ; 
        if(data.length>0){
            if(data[0][6]=='INACTIVO'){
                return Swal.fire({
                    icon: 'warning',
                    title: 'Mensaje de Advertencia',
                    text: 'Lo sentimos el usuario '+usu+' se encuentra desactivado, comuniquese con el administrador',
                    heightAuto:false
                });
            }

            $.ajax({
                url: 'controller/usuario/crear_sesion.php',
                type: 'POST',
                data:{
                    idusuario:data[0][0],
                    usuario:data[0][1],
                    rol:data[0][18]
                }
            }).done(function(r){
                let timerInterval
                Swal.fire({
                  title: '<strong>Bienvenido al Sistema</strong>',
                  html: 'Sera redireccion en milliseconds.',
                  background: '#28fcd9',
                  timer: 3500,
                  heightAuto:false,
                  timerProgressBar: true,
                  allowOutsideClick: false,
                  didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                      const content = Swal.getContent()
                      if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                          b.textContent = Swal.getTimerLeft()
                        }
                      }
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    location.reload();
                  }
                })
            })
            
        }else{
            Swal.fire({
              icon: 'error',
              title: 'Mensaje de Error',
              text: 'Usuario o clave incorrecta',
              heightAuto:false
            });
        }
    })
}

function recuerdame(){
    if(rmcheck.checked && usuarioinput.value !=="" && passinput.value !==""){
        localStorage.usuario = usuarioinput.value;
        localStorage.pass    = passinput.value;
        localStorage.checkbox = rmcheck.value;
    }else{
        localStorage.usuario  = "";
        localStorage.pass     = "";
        localStorage.checkbox = "";        
    }
}

var tbl_usuario;
function listar_usuario(){
  tbl_usuario = $("#tabla_usuario").DataTable({
      "ordering":false,   
      "bLengthChange":true,
      "searching": { "regex": false },
      "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
      "pageLength": 10,
      "destroy":true,
      "async": false ,
      "processing": true,
      "ajax":{
          "url":"../controller/usuario/controlador_usuario_listar.php",
          type:'POST'
      },
      "columns":[
        {"defaultContent":""},
        {"data":"usu_usuario"},
        {"data":"empleado"},
        {"data":"usu_rol"},
        {"data":"usu_feccreacion"},
        {"data":"usu_estatus",
          render: function(data,type,row){
                if(data=='ACTIVO'){
                  return '<span class="badge bg-success">ACTIVO</span>';
                }else{
                  return '<span class="badge bg-danger">INACTIVO</span>';
                }
          }   
        },
        {"data":"usu_estatus",
          render: function(data,type,row){
            if (row.usu_rol == "ADMINISTRADOR") {
              return "<button disabled class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>&nbsp;<button class='btn btn-success btn-sm' disabled><i class='fa fa-check-circle'></i></button>&nbsp;<button disabled class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>&nbsp;<button class='contra btn btn-warning btn-sm'><i class='fa fa-key'></i></button>";
            }else{
              if(data=='ACTIVO'){
                  return "<button class='editar btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>&nbsp;<button class='btn btn-success btn-sm' disabled><i class='fa fa-check-circle'></i></button>&nbsp;<button class='desactivar btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>&nbsp;<button class='contra btn btn-warning btn-sm'><i class='fa fa-key'></i></button>";
              }else{
                  return "<button class='editar btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>&nbsp;<button class='activar btn btn-success btn-sm'><i class='fa fa-check-circle'></i></button>&nbsp;<button class='btn btn-danger btn-sm' disabled><i class='fa fa-trash'></i></button>&nbsp;<button class='contra btn btn-warning btn-sm'><i class='fa fa-key'></i></button>";
              }
            }
          }   
        },
      ],
      "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $($(nRow).find("td")[0]).css('text-align', 'center' );
        $($(nRow).find("td")[4]).css('text-align', 'center' );
        $($(nRow).find("td")[5]).css('text-align', 'center' );
        $($(nRow).find("td")[6]).css('text-align', 'center' );
      },
      "language":idioma_espanol,
      select: true
  });
  tbl_usuario.on('draw.td',function(){
    var PageInfo = $("#tabla_usuario").DataTable().page.info();
    tbl_usuario.column(0, {page: 'current'}).nodes().each(function(cell, i){
      cell.innerHTML = i + 1 + PageInfo.start;
    });
  });
}

$('#tabla_usuario').on('click','.editar',function(){
  var data = tbl_usuario.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_usuario.row(this).child.isShown()){
      var data = tbl_usuario.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  $("#modal_editar_usuario").modal('show');
  document.getElementById('txt_idusuario_editar').value=data.usu_id;
  document.getElementById('txt_usuario_editar').value=data.usu_usuario;
  $("#select_rol_editar").select2().val(data.usu_rol).trigger('change.select2');
  //alert(data.empleado_id);
  $("#select_empleado_editar").select2().val(data.empleado_id).trigger('change.select2');
  $('.form-control').removeClass("is-invalid").removeClass("is-valid");
})

$('#tabla_usuario').on('click','.activar',function(){
    var data = tbl_usuario.row($(this).parents('tr')).data();//En tamaño escritorio
    if(tbl_usuario.row(this).child.isShown()){
        var data = tbl_usuario.row(this).data();
    }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    Swal.fire({
      title: "Mensaje de advertencia",
      html: "¿Seguro que deseas <label style='color:#9B0000;'>activar</label> el usuario <label style='color:#9B0000;'>"+data.usu_usuario+"</label> ?",
      //text: "Una vez realizado esto el usuario tendra acceso al sistema!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "<b>SI</b>",
      cancelButtonText: "<b>NO</b>"
    })
    .then((willDelete) => {
      if (willDelete.value) {
        Modificar_Estatus(data.usu_id,'ACTIVO');
      }
    })
})

$('#tabla_usuario').on('click','.desactivar',function(){
  var data = tbl_usuario.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_usuario.row(this).child.isShown()){
      var data = tbl_usuario.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  Swal.fire({
    title: "Mensaje de advertencia",
    html: "¿Seguro que deseas <label style='color:#9B0000;'>desactivar</label> el usuario <label style='color:#9B0000;'>"+data.usu_usuario+"</label> ?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: "<b>SI</b>",
    cancelButtonText: "<b>NO</b>"
  })
  .then((willDelete) => {
    if (willDelete.value) {
        Modificar_Estatus(data.usu_id,'INACTIVO');
    }
  })
})

$('#tabla_usuario').on('click','.contra',function(){
  var data = tbl_usuario.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_usuario.row(this).child.isShown()){
      var data = tbl_usuario.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  $("#modal_editar_contra").modal('show');
  document.getElementById('txt_contra_nueva').value = "";
  document.getElementById('txt_contra_repetir').value ;
  document.getElementById('idusuariocontra').value=data.usu_id;
  document.getElementById('lbl_usuario_contra').innerHTML=data.usu_usuario;
})
function AbrirModalRegistroUsuario(){
    $("#modal_registro_usuario").modal({backdrop:'static',keyboard:false})
    $("#modal_registro_usuario").modal('show');
    LimpiarCampos();
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
}
function ValidacionInput(txt_usuario,txt_contra,txt_contra_nueva){
  Boolean($("#"+txt_usuario).val().length>0) ? $("#"+txt_usuario).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_usuario).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_contra).val().length>0) ? $("#"+txt_contra).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_contra).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_contra_nueva).val().length>0) ? $("#"+txt_contra_nueva).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_contra_nueva).removeClass('is-valid').addClass("is-invalid"); 
}
function cargar_select_empleado(){
    $.ajax({
      url:'../controller/usuario/controlador_cargar_select_empleado.php',
      type:'POST'
  
    }).done(function(resp){
      let data = JSON.parse(resp);
      let llenardata = "<option value='0'>SELECCIONAR EMPLEADO</option>";
      if(data.length>0){
          for (let i = 0; i < data.length; i++) {
              llenardata+="<option value='"+data[i][0]+"'>DNI: "+data[i][1]+" - EMPLEADO: "+data[i][2]+"</option>";
          }
  
          document.getElementById('select_empleado').innerHTML=llenardata;
          document.getElementById('select_empleado_editar').innerHTML=llenardata;
      }else{
        llenardata+="<option value='0'>No se encontraron datos en la bd</option>";
          document.getElementById('select_empleado').innerHTML=llenardata;
          document.getElementById('select_empleado_editar').innerHTML=llenardata;
      }
    })
}

function Registrar_Usuario(){
    let usuario       = document.getElementById('txt_usuario').value;
    let contra        = document.getElementById('txt_contra').value;
    let rol           = document.getElementById('select_rol').value;
    let empleado      = document.getElementById('select_empleado').value;
    if(empleado.length==0 || usuario.length==0 || contra.length==0 || empleado.length==0 || rol.length==0){
      ValidacionInput('txt_usuario','txt_contra','txt_contra');
      return Swal.fire("Mensaje de advertencia","Tiene algunos campos vac&iacute;os","warning");
    }
   

    $.ajax({
        "url":"../controller/usuario/controlador_usuario_registro.php",
        type:'POST',
        data:{
            usuario:usuario,
            contra:contra,
            rol:rol,
            empleado:empleado
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                $("#modal_registro_usuario").modal('hide');
                LimpiarCampos();
                Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente, Nuevo Usuario Registrado","success")            
                .then ( ( value ) =>  {
                    tbl_usuario.ajax.reload();
                }); 
            }else{
                return Swal.fire("Mensaje de Advertencia","Lo sentimos, el nombre del usuario ya se encuentra en nuestra base de datos","warning");
            }
        }else{
            Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar el registro","error");
        }
    })
}
function LimpiarCampos(){
    document.getElementById('txt_usuario').value="";
    document.getElementById('txt_contra').value="";
    $("#select_rol").select2().val('ADMINISTRATIVO').trigger('change.select2');
    $("#select_empleado").select2().val('0').trigger('change.select2');
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
}
function Modificar_Estatus(id,estatus){
    $.ajax({
      url:'../controller/usuario/controlador_modificar_usuario_estatus.php',
      type:'POST',
      data:{
        id:id,
        estatus:estatus
      }
  
    }).done(function(resp){
        if(resp>0){
            Swal.fire("Mensaje de Confirmaci\u00F3n","Estatus actualizado","success").then((value)=>{
                tbl_usuario.ajax.reload();
            });
  
        }else{
          Swal.fire("Mensaje de Error","No se pudo cambiar el estatus","error");
        }   
    })
}
function Modificar_Usuario(){
  let idusuario     = document.getElementById('txt_idusuario_editar').value;
  let rol           = document.getElementById('select_rol_editar').value;
  let empleado      = document.getElementById('select_empleado_editar').value;
  if(empleado.length==0 || rol.length==0){
      return Swal.fire("Mensaje de Advertencia","Seleccione un rol","warning");
  }
  $.ajax({
      "url":"../controller/usuario/controlador_modificar_usuario.php",
      type:'POST',
      data:{
          idusuario:idusuario,
          rol:rol,
          empleado:empleado
      }
  }).done(function(resp){
      if(resp>0){
          $("#modal_editar_usuario").modal('hide');
          Swal.fire("Mensaje de Confirmaci\u00F3n","Datos actualizados correctamente","success")            
              .then ( ( value ) =>  {
                  tbl_usuario.ajax.reload();
          });    
      }else{
          Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar el registro","error");
      }
  })
}
function Modificar_Contra_Usuario(){
  let id            = document.getElementById('idusuariocontra').value;
  let contranueva   = document.getElementById('txt_contra_nueva').value;
  let contrarepetir = document.getElementById('txt_contra_repetir').value;
  if(id.length==0 || contranueva.length==0 || contrarepetir.length==0){
    ValidacionInput('txt_contra_nueva','txt_contra_nueva','txt_contra_repetir');
    return Swal.fire("Mensaje de Advertencia","Tiene algunos campos vac&iacute;os","warning");
  }

  if(contranueva != contrarepetir){
    return Swal.fire("Mensaje de Advertencia","Las contraseñas ingresadas no coinciden","warning");
  }

  $.ajax({
    url:'../controller/usuario/controlador_modificar_usuario_contra.php',
    type:'POST',
    data:{
      id:id,
      contranueva:contranueva
    }

  }).done(function(resp){
      if(resp>0){
          Swal.fire("Mensaje de Confirmaci\u00F3n","Contraseña actualizada","success").then((value)=>{
            document.getElementById('txt_contra_nueva').value="";
            document.getElementById('txt_contra_repetir').value="";
            $("#modal_editar_contra").modal('hide');
            tbl_usuario.ajax.reload();
          });

      }else{
        Swal.fire("Mensaje de Error","No se pudo cambiar la contraseña","error");
      }   
  })
}
function abrirModalCuentaPerfil(){
  traer_administrador();
  $('#modal_perfil').modal({backdrop: 'static', keyboard: false})
  $("#modal_perfil").modal("show");
}
function traer_administrador(){
  var usuario = $("#txtnombre_principal_usuario").val();
  $.ajax({
    url:'../controller/usuario/controlador_administrador_buscar.php',
    type:'POST',
    data:{
      buscar:usuario
    }
  })
  .done(function(resp){
    var data = JSON.parse(resp);
    //$("#txtemail_perfil").val("");
    if (data.length > 0) {
      
      //$("#lb_correo_usuario").html(data[0][22]);
      //alert(data[0][10]+" "+data[0][11]+" "+ data[0][12]);
      $("#lb_usuario").html(data[0][7]+" "+data[0][8]+" "+ data[0][9]);
      $("#div_fotoperfil2").html('<img  class="img-circle" style="width: 45px;height: 45px;" src="empleado/'+ data[0][16]+'" alt="...">');
      $("#rol_sidebar").html(data[0][18]);
      $("#tipo_usuario").val(data[0][18]);
      $("#txtoriginal").val(data[0][2]);

      $("#txtidtrabajador_principal").val(data[0][5]);
      $("#txtdni_perfil").val(data[0][12]);
      $("#txtnombre_perfil").val(data[0][7]);
      $("#txtapepat_perfil").val(data[0][8]);
      $("#txtapemat_perfil").val(data[0][9]);
      $("#txtemail_perfil").val(data[0][17]);   
      $("#txtcelular_perfil").val(data[0][13]);
      $("#txt_direccion_perfil").val(data[0][15]);
      //alert(data[0][14]);
      $("#txt_fechanacimiento_perfil").datepicker("setDate",data[0][11]);
      $("#txt_tipousuario_perfil").val(data[0][18]);
      /*if (data[0][24]!="") {
        var cadena = '<img src="empleado/'+data[0][24]+'" class="kv-preview-data file-preview-image file-zoom-detail" align="center" style="width: 54%;height:auto;text-align:center">';
        $("#div_fotoperfil").html(cadena);
      }else{
        var cadena =  '<br><br><label>NO EXISTE IMAGEN</label><br><br><br>';
        $("#div_fotoperfil").html(cadena);
      }*/
      }
  })
}
function Editar_Perfil(){
  var id            = $("#txtidtrabajador_principal").val();
  var nrodocumento  = $("#txtdni_perfil").val();
  var nombre    = $("#txtnombre_perfil").val();
  var apepat    = $("#txtapepat_perfil").val();
  var apemat    = $("#txtapemat_perfil").val();
  var fecnacimiento = $("#txt_fechanacimiento_perfil").val();     
  var celular   = $("#txtcelular_perfil").val();
  var email     = $("#txtemail_perfil").val();
  var direccion = $('#txt_direccion_perfil').val();  

  if(nombre.length==0 || apepat.length==0 || apemat.length==0 || direccion.length==0 || fecnacimiento.length==0){
    return   Swal.fire("Mensaje de Advertencia","Porfavor llene los campos vacios","warning");
  }
  var fechaactual = new Date();
  var anio = fechaactual.getFullYear();
  var fecha = fecnacimiento.split('/');
  var edad =  anio - fecha[2];
  var fecnacimiento = fecha[2] + '-' + fecha[1] + '-' + fecha[0];
  if(edad<18){
    return   Swal.fire("Mensaje de Advertencia","El empleado debe ser mayor de edad","warning");
  }
  if (validar_email(email)) {
  }else{
    return Swal.fire("Mensaje de Error","Lo sentimos, formato de email ingresado no es valido.", "error");
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
      estado:'ACTIVO'
    }
  })
  .done(function(resp){
    if (resp > 0) {
      if (resp==1) {
        traer_administrador();
        
      Swal.fire("Mensaje de Confirmaci\u00F3n","<b>Perfil</b> correctamente actualizado","success")
      .then ( ( value ) =>  {
        $("#modal_perfil").modal('hide');
      });       
      }else {
      Swal.fire("Mensaje de Advertencia","Lo sentimos, el nro de documento ingresado ya esta registrado en nuestra data","warning")           
      }
    }else{
      Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar el registro","error")
    }
  })
}
function abrirModalusuario(){
  Limpiar_POST_cuenta();
  traer_administrador();
  $('#modal_cuenta').modal({backdrop: 'static', keyboard: false})
  $("#modal_cuenta").modal("show");
}
function Limpiar_POST_cuenta() {
  $("#txtactual").val("");
  $("#txtnueva").val("");
  $("#txtrepetir").val("");
}
function Editar_cuenta(){
  var usuario = $("#txtusuario").val();
  var actual  = $("#txtactual").val();
  var nueva   = $("#txtnueva").val();
  var repetir = $("#txtrepetir").val();
  var original= $("#txtoriginal").val();
  //Swal.fire("Mensaje de Advertencia","Opci&oacute;n bloqueada para la demo","warning");
  //return;
  if (actual.length==0 || nueva.length==0 || repetir.length==0) {
    return Swal.fire("Mensaje de Advertencia","<b>Falta llenar campos</b>","warning");
  }
  if (nueva != repetir) {
    return Swal.fire("Mensaje de Advertencia","Debes ingresar la misma clave dos veces para confirmar","warning");
  }
  $.ajax({
    type:'POST',
    url:'../controller/usuario/controlador_cuenta_actualizar.php',
    data:{
      _usuario:usuario,
      _actual:actual,
      _nueva:nueva,
      _original:original
    }
  })
  .done(function(resp){
    if (resp==2) {
      return Swal.fire("Mensaje de Advertencia","La clave actual ingresada no coincide con la clave actual almacenada","warning");
    }
    if (resp>0) {
      Swal.fire("Mensaje de Confirmaci\u00F3n","Su cuenta fue Actualizada con &eacute;xito!!!","success")
      .then ( ( value ) =>  {
        Limpiar_POST_cuenta();
                $("#modal_cuenta").modal('hide');
            }); 
    }else{
      Swal.fire("Mensaje de error","No se pudo actualizar su Cuenta!!!","error");
    }
  })
}
function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}