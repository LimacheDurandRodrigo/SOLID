<script src="../js/reportes.js?rev=<?php echo time();?>"></script>
<div class="row">
  <div class="col-lg-12">
    <div class="ibox ibox-default">
      <div class="ibox-head">
        <h5  class="ibox-title">REPORTES POR RANGO DE FECHAS</h3>
        <button class="btn btn-danger btn-sm float-right" data-toggle="modal" onclick="AbrirModalRegistro()"><i class="fa fa-plus"></i>&nbsp;Nuevo registro</button>
      </div>
      <div class="ibox-body">


        <div class="card-body">
                <div class="row">
                    <div class="col-lg-3 form-group">
                        <label for="">Fecha Inicio:</label>
                        <input type="date" class="form-control" id="txt_finicio">  
                    </div>
                    <div class="col-lg-3 form-group">
                        <label for="">Fecha Fin:</label>
                        <input type="date" class="form-control" id="txt_ffin">  
                    </div>
                    <div class="col-lg-4 form-group">
                        <label>Turno</label>
                        <input type="text" class="form-control" id="txt_turno">  
                        
                    </div>

                    <div class="col-lg-2 form-group">
                        <label for="">&nbsp;</label><br>
                    <button class="btn btn-md btn-warning" style="width:100%;" onclick="reporte_asistencias1()"><i class="fa fa-search" ></i>&nbsp;<b>Buscar</b></button>
                    </div>





                </div>
                <div class="col-12 table-responsive">
                    <table id="tabla_ingreso" class="table compact" style="font-size:small;width: 102%">
                        <thead>
                            <tr>
                                <th style="text-align: center;width: 50px;">#</th>
                                <th style="text-align:center;width:80px">Fecha Ingreso</th>
                                <th style="text-align:center;width:80px">Estado</th>
                                <th style="text-align:left;width:80px">Empresa</th>
                                <th style="text-align:center;width:80px">Datos de la Solicitud</th>
                                <th style="text-align:center;width:120px">Opci&oacute;n</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

       



      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modal_registro">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div style="background-color:#c29504;color:#FFFFFF;" class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>REGISTRAR CLIENTES</b></h5>
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
                  <input type="text" id="txt_fechanacimiento" class="form-control fecha" />
                  <div class="input-group-addon" style="background-color: white">
                    <i class="fa fa-calendar"></i>
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
            <div class="col-sm-12">
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
        <button type="button" class="btn btn-primary" onclick="Registrar_Cliente()">Registrar</button>
      </div>
    </div>
  </div>
</div>
<!-- Fin Modal -->
<!-- Modal -->
<div class="modal fade" id="modal_editar" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div style="background-color:#c29504;color:#FFFFFF;" class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>MODIFICAR CLIENTE</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <input type="text" id="txt_idpersona" hidden>
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
                        <input type="text" id="txt_fechanacimiento_editar" class="form-control fecha" />
                        <div class="input-group-addon" style="background-color: white">
                          <i class="fa fa-calendar"></i>
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
            <div class="col-sm-12">
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
        <button type="button" class="btn btn-primary" onclick="Modificar_Cliente()">Modificar</button>
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
    listar_clientes();
    $(".fecha").datepicker({ 
      autoclose:true,     
    }).on('keypress paste', function (e) {
      e.preventDefault();
      return false;
    });
</script>
