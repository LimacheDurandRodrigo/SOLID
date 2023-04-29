<script src="../js/usuario.js?rev=<?php echo time();?>"></script>
  <!-- Content Wrapper. Contains page content -->

<div class="row">
  <div class="col-lg-12">
    <div class="ibox ibox-default">
      <div class="ibox-head">
        <h5  class="ibox-title">MANTENIMIENTO DE USUARIOS</h5>
        <button class="btn btn-danger btn-sm float-right" onclick="AbrirModalRegistroUsuario()"><i class="fa fa-plus"></i> Nuevo Registro</button>
      </div>
      <div class="ibox-body">
        <div class="row">
            <div class="col-12 table-responsive">
                <table id="tabla_usuario" class="display" width="100%">
                  <thead>
                    <tr>
                      <th style="background-color:#230254;color:#FFFFFF;text-align: center;">#</th>
                      <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Usuario</th>
                      <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Empleado</th>
                      <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Rol</th>
                      <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Fecha Registro</th>
                      <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Estatus</th>
                      <th style="background-color:#230254;color:#FFFFFF;text-align: center;">Acci&oacute;n</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th style="text-align: center;">#</th>
                      <th>Usuario</th>
                      <th>Empleado</th>
                      <th>Rol</th>
                      <th style="text-align: center;">Fecha Registro</th>
                      <th style="text-align: center;">Estatus</th>
                      <th style="text-align: center;">Acci&oacute;n</th>
                    </tr>
                  </tfoot>
                </table>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.col-md-6 -->
</div>

  <!-- /.content-wrapper -->
  <!--Inicio Modal -->
<div class="modal fade" id="modal_registro_usuario">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div style="background-color:#7a04e0;color:#FFFFFF;" class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12 form-group">
              <label for="">Usuario (*):</label>
              <input type="text" id="txt_usuario" class="form-control">
            </div>
            <div class="col-6 form-group">
              <label for="">Contrase&ntilde;a (*):</label>
              <input type="password" id="txt_contra" class="form-control">
            </div>
            <div class="col-6 form-group">
              <label for="">Rol (*):</label>
              <select class="js-example-basic-single" id="select_rol" style="width:100%">
                  <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                  <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                  <option value="CAJERO">CAJERO</option>
                  <option value="ARBITRIOS">ARBITRIOS</option>
              </select>
            </div>
            <div class="col-12 form-group">
                <label for="">Empleado (*):</label>
                <select class="js-example-basic-single" id="select_empleado" style="width:100%">
                </select>
            </div>
            <div class="col-lg-12 form-group" style="text-align: left;font-weight: bold;color: #9B0000">
              Campos Obligatorios (*)
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="Registrar_Usuario()">Registrar</button>
      </div>
    </div>
  </div>
</div>
<!--Fin Modal -->
  <!--Inicio Modal -->
  <div class="modal fade" id="modal_editar_usuario">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div style="background-color:#7a04e0;color:#FFFFFF;" class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12 form-group">
              <input type="text" id="txt_idusuario_editar" hidden>
              <label for="">Usuario (*):</label>
              <input type="text" id="txt_usuario_editar" class="form-control" disabled>
            </div>
            <div class="col-12 form-group">
              <label for="">Rol (*):</label>
              <select class="js-example-basic-single" id="select_rol_editar" style="width:100%">
                  <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                  <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                  <option value="CAJERO">CAJERO</option>
              </select>
            </div>
            <div class="col-12 form-group">
                <label for="">Empleado (*):</label>
                <select class="js-example-basic-single" id="select_empleado_editar" style="width:100%">
                </select>
            </div>
            <div class="col-lg-12 form-group" style="text-align: left;font-weight: bold;color: #9B0000">
              Campos Obligatorios (*)
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="Modificar_Usuario()">Editar</button>
      </div>
    </div>
  </div>
</div>
<!--Fin Modal -->
<!--Inicio Modal -->
<div class="modal fade" id="modal_editar_contra">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>Editar Contraseña Del Usuario <label for="" id="lbl_usuario_contra"></label></b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12 form-group">
              <input type="text" id="idusuariocontra" hidden>
              <label for="">Contraseña Nueva (*):</label><br>
              <input type="password" id="txt_contra_nueva" class="form-control">
            </div>
            <div class="col-12 form-group">
              <label for="">Repetir Contraseña (*):</label><br>
              <input type="password" id="txt_contra_repetir" class="form-control">
            </div>
            <div class="col-lg-12 form-group" style="text-align: left;font-weight: bold;color: #9B0000">
              Campos Obligatorios (*)
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="Modificar_Contra_Usuario()">Modificar</button>
      </div>
    </div>
  </div>
</div>
<!--Fin Modal -->
  <script>
    $(document).ready(function() {
        $('.js-example-basic-single').select2();
        cargar_select_empleado();
    });
    listar_usuario();
    $('#modal_registro_usuario').on('shown.bs.modal', function () {
        $('#txt_usuario').focus();
    })  
  </script>