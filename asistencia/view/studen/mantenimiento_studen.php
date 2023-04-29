<script src="../js/studen.js?rev=<?php echo time();?>"></script>
<div class="row">
  <div class="col-lg-12">
    <div class="ibox ibox-default">
      <div class="ibox-head">
        <h5  class="ibox-title" style="font-size:15px;margin-right: 550px">LISTADO DE PERSONAL</h3>
        
        <button class="btn btn-lg margin-left:30px" style="background-color:#fdd016;font-size:13px;margin-left: 20px" onclick="AbrirModalRegistro();">
         <i class="fa fa-user fa-2x"></i>  &nbsp;Nuevo Registro
       </button>

        <button class="btn btn-lg margin-left:30px" style="background-color:#fdd016;font-size:13px;margin-left: 20px" onclick="Generar_pdf_personal();">
         <i class="fa fa-print fa-2x"></i>  PERSONAL
       </button>

        
      </div>
      <div class="ibox-body">
        <table id="tabla_studen"  class="table tabel-display table-nowrap">
          <thead>
            <tr>
              <th style="background-color:#230254;color:#FFFFFF;text-align: center;">#</th>
              <th style="background-color:#230254;color:#FFFFFF;text-align: center;">N&deg; documento</th>
              <th style="background-color:#230254;color:#FFFFFF;text-align: center;">PERSONAL</th>
              <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Movil</th>
              <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Email</th>
              <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Direcci&oacute;n</th>
              <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Estatus</th>
              <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Acci&oacute;n</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
          <tfoot>
            <tr>
            <th style="text-align: center;">#</th>
              <th>N&deg; documento</th>
              <th>EMPLEADO</th>
              <th style="text-align: center;">Movil</th>
              <th style="text-align: center;">Email</th>
              <th>Direcci&oacute;n</th>
              <th style="text-align: center;">Estatus</th>
              <th style="text-align: center;width: 80px;word-wrap: break-word;">Acci&oacute;n</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modal_registro">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div style="background-color:#4a04ba;color:#FFFFFF;" class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>REGISTRAR EMPLEADO</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                <label>Nombre (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar nombre" id="txt_nombre" maxlength="150"  onkeypress="return sololetras(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Apellido Paterno (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar apellido paterno" id="txt_apepat" maxlength="100"  onkeypress="return sololetras(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Apellido Materno (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar apellido materno" id="txt_apemat" maxlength="100"  onkeypress="return sololetras(event)">
                </div>
            </div>

             

            <div class="col-sm-6">
              <div class="form-group">
                <label>Fecha Nacimiento (*):</label>
                <div class="input-group">
                  <input type="date" id="txt_fechanacimiento" class="form-control" />
                  <div class="input-group-addon" style="background-color: white">
                   
                  </div>
                </div>
              </div>
            </div>


            <div class="col-sm-6">
                <div class="form-group">
                <label>N&deg; documento (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar nro documento" id="txt_nrodocumento" maxlength="8" onkeypress="return soloNumeros(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Movil (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar movil" id="txt_movil" maxlength="9" onkeypress="return soloNumeros(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Direcci&oacute;n (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar direcci&oacute;n" id="txt_direccion" onkeypress="return soloNumerosyletras(event)">
                </div>
            </div>



            <div class="col-sm-6">
                <div class="form-group">
                <label>Email (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar email" id="txt_email"maxlength="150" onkeypress="return soloNumerosyletras(event)">
                </div>
            </div>


            <div class="col-md-6 form-group">
                <label for="txt_archivo">Adjuntar documento (IMAGES) (*):</label>
                <div class="input-group">
                  <div class="custom-file">
                    <input type="file"  accept=".jpg,.png,.jpeg,.JPG,.PNG,.JPEG" class="custom-file-input form-control is-invalid" id="txt_archivo_registrar" name="txt_archivo_registrar">
                    <label class="custom-file-label" id="lb_archivo_registrar" for="txt_archivo_registrar">Seleccionar Archivo</label>
                  </div>
                </div>
                <input type="text"  id="txtformato" name="txtformato" hidden>
            </div>



            <div class="col-sm-6">
                <div class="form-group">
                <label>Estatus (*):</label>
                <input type="text" class="form-control" placeholder="ACTIVO" readonly="" style="text-align:center;">
                </div>
            </div>
            <div class="col-lg-12 form-group" style="text-align: left;font-weight: bold;color: #9B0000">
                Campos Obligatorios (*)
            </div> 
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="Registrar_studen()">Registrar</button>
      </div>
    </div>
  </div>
</div>
<!-- Fin Modal -->
<!-- Modal -->
<div class="modal fade" id="modal_editar" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div style="background-color:#7a04e0;color:#FFFFFF;" class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>MODIFICAR PERSONAL</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <input type="text" id="txt_idpersona_editar" hidden>
            <div class="col-sm-6">
                <div class="form-group">
                  <label>Nombre (*):</label>
                  <input type="text" class="form-control" placeholder="Ingresar nombre" id="txt_nombre_editar" maxlength="150"  onkeypress="return sololetras(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Apellido Paterno (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar apellido paterno" id="txt_apepat_editar" maxlength="100"  onkeypress="return sololetras(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Apellido Materno (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar apellido materno" id="txt_apemat_editar" maxlength="100"  onkeypress="return sololetras(event)">
                </div>
            </div>

            

            <div class="col-sm-6">
              <div class="form-group">
                <label>Fecha Nacimiento (*):</label>
                <div class="input-group">
                  <input type="date" id="txt_fechanacimiento_editar" class="form-control" />
                  <div class="input-group-addon" style="background-color: white">
                   
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                <label>N&deg; documento (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar nro documento" id="txt_nrodocumento_editar" maxlength="8" onkeypress="return soloNumeros(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Movil (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar movil" id="txt_movil_editar" maxlength="9" onkeypress="return soloNumeros(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Direcci&oacute;n (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar direcci&oacute;n" id="txt_direccion_editar" onkeypress="return soloNumerosyletras(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                <label>Email (*):</label>
                <input type="text" class="form-control" placeholder="Ingresar email" id="txt_email_editar" maxlength="150" onkeypress="return soloNumerosyletras(event)">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Estatus (*):</label>
                    <select class="form-control select2" style="width: 100%;"  id="cbm_estatus">
                        <option value="ACTIVO">ACTIVO</option>
                        <option value="INACTIVO">INACTIVO</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-12 form-group" style="text-align: left;font-weight: bold;color: #9B0000">
                Campos Obligatorios (*)
            </div> 
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="Modificar_Studen()">Modificar</button>
      </div>
    </div>
  </div>
</div>
<!-- Fin Modal -->

















<script>
    $("#modal_registro").on('shown.bs.modal',function(){
        $("#txt_nombre").focus();  
    })
    $('.select2').select2();
    listar_studen();
    $(".fecha").datepicker({ 
      autoclose:true,     
    }).on('keypress paste', function (e) {
      e.preventDefault();
      return false;
    });

//  ***********inicio Del codigo para Guardar Diferentes clases de Archivos 

    $(document).ready(function () {
        bsCustomFileInput.init();
    });
    $('input[type="file"]').on('change', function(){
        var ext = $( this ).val().split('.').pop();//  OBTENEMOS LA EXTENSISON DEL ARCHIVO
        if ($( this ).val() != '') {
          //if(ext == "PDF" || ext == "pdf" || ext == "docx"|| ext == "DOCX"|| ext == "zip" || ext == "png" || ext == "PNG" || ext == "jpg" || ext == "JPG" || ext == "jpeg"  || ext == "JPEG" || ext == "rar" || ext == "xlsx"  || ext == "xls" ){
          if(ext == "png" || ext == "PNG" || ext == "jpg" || ext == "JPG" || ext == "jpeg"  || ext == "JPEG"  ){

              if($(this)[0].files[0].size > 31457280){ //---- 30 MB 
              //if($(this)[0].files[0].size > 1048576){ // 1 MB
              //if($(this)[0].files[0].size > 10485760){ // ---> 10 MB
                Swal.fire("El archivo selecionado es demasiado pesado","<label style='color:#9B0000;'>seleccionar un archivo mas liviano</label>","warning");
                $("#txtformato").val("");
                //$("#txt_archivo_registrar").val("");
                //$("#lb_archivo_registrar").html("Seleccionar Archivo");
                return;
                
                //$("#btn_subir").prop("disabled",true);
              }else{
                //$("#btn_subir").attr("disabled",false);
              }
              $("#txtformato").val(ext);
          }else{
                $("#txtformato").val("");
               // $("#txt_archivo_registrar").val("");
                $//("#lb_archivo_registrar").html("Seleccionar Archivo");
                $( this ).val('');
                Swal.fire("Extensión no permitida: " + ext,"","error");
          }
        }
    });

    //  fin del codigo
</script>

