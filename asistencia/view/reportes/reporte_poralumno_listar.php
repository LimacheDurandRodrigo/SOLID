<script src="../js/reportes.js?rev=<?php echo time();?>"></script>
<div class="row">
  <div class="col-lg-12" id="div_busqueda">
    <div class="ibox ibox-default">
      <div class="ibox-head">
        <div class="ibox-title">BUSCAR ASISTENCIA</div>
      </div>
      <div class="ibox-body">
        <div class="row">

          <div class="col-lg-4 form-group">
            <label>Buscar por:</label> 
            <select class="form-control select2" id="combo_buscar">
              <!--<option value="id_ciudadano">ID CIUDADANO</option>-->
              <!--<option value="id_contrato">ID CONTRATO</option>-->
              <option value="dni">DNI</option>
              <option value="nombre">NOMBRE CIUDADANO Y/O NRO DOCUMENTO</option>
            </select>
          </div>


          <div class="col-lg-6 form-group id_ciudadano">
            <label id="">Dni Ciudadano (*):</label>
            <input class="form-control" type="text" placeholder="Ingrese dni ciudadano" maxlength="8" id="txt_dni" onkeypress="return soloNumerosyletras(event)">
          </div>
          <div class="col-lg-6 form-group nombre" style="display: none;">
            <label id="">Datos ciudadano (*):</label>
            <input class="form-control" type="text" placeholder="Ingrese datos del ciudadano" maxlength="150" id="txt_datosalumno" onkeypress="return soloNumerosyletras(event)">
          </div>
          <div class="col-md-2 fom-group seguimiento" >
            <label>&nbsp;</label>
            <button id="btn_buscar" onclick="buscar_por_tipo()" style="color: white" class="btn btn-block bg-danger"><i class="fa fa-search"></i></button>
            <input type="text" id="txt_idciudadano_original" hidden>
            <input type="text" id="txt_idcontrato_original" hidden>
          </div>
        </div>
      </div>
    </div>
  </div>


  
  <div class="col-lg-12" id="div_dni_ciudadano" style="display: none;">
    <div class="ibox ibox-default">
      <div class="ibox-head">
        <div class="ibox-title">DEUDA DEL CIUDADANO</div>
      </div>
      <div class="ibox-body">
        <div class="row" >
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <ol class="float-sm-right">
              <button class="btn btn-success btn-sm" style="width: 100%;" onclick="nueva_busqueda_interna()"><i class="fa fa-search"></i> &nbsp;Nueva Busqueda</button>
            </ol>
            <ol class="float-sm-right" id="ol_notificar">
              <button class="btn btn-danger btn-sm" style="width: 100%;" onclick="imprimir_asistencia_poralumno()"><i class="fa fa-print"></i> &nbsp;Imprimir</button>
            </ol>
          </div>
          <div class="col-4 form-group">
            <label>Documento Entidad</label>
            <input type="text" class="form-control" id="txt_nro_dni" disabled style="background-color: white;">
          </div>
          <div class="col-8 form-group">
            <label>Nombre</label>
            <input type="text" class="form-control" id="txt_nombre" disabled style="background-color: white;">
          </div>
          <div class="col-12 table-responsive">
            <table id="tabla_asistencia_detalle" class="display" style="width: 100%">
              <thead>
                <tr>
                    <th style="text-align: center;width: 50px"># </th>
                    <th style="text-align: center;width: 100px">Fecha</th>
                    <th style="text-align: center;width: 100px">Turno</th>
                    <th style="text-align: center;width: 100px">Estado</th>
                </tr>
              </thead>
              <tbody ></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-12" id="div_nombre_ciu" style="display: none;">
    <div class="ibox ibox-default">
      <div class="ibox-head">
        <div class="ibox-title">LISTADO DE CIUDADANOS CON CONTRATO - DEUDAS</div>
      </div>
      <div class="ibox-body">
        <div class="row" >
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <ol class="float-sm-right">
              <button class="btn btn-success btn-sm" style="width: 100%;" onclick="nueva_busqueda_interna()"><i class="fa fa-search"></i> &nbsp;Nueva Busqueda</button>
            </ol>
          </div>
          <div class="col-12 table-responsive">
            <table id="tabla_ciudadanos_contrato" class="display" style="width: 100%">
              <thead>
                <tr>
                    <th style="text-align: center;">#</th>
                    <th>Nro Documento - Datos Ciudadano</th>
                    <th>Ciudad</th>
                    <th>Direcci&oacute;n</th>
                    <th style="text-align: center;">Mza</th>
                    <th style="text-align: center;">Lote</th>
                    <th>Avenida</th>
                    <th style="text-align: center;">Servicio</th>
                    <th style="text-align: center;">Acci&oacute;n</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="modal_ver_deuda">
  <div class="modal-dialog modal-lg" style="max-width: 950px;" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">DEUDA DEL CIUDADANO</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <ol class="float-sm-right" id="ol_notificar">
              <button class="btn btn-danger btn-sm" style="width: 100%;" onclick="imprimir_asistencia_poralumno_por_datos()"><i class="fa fa-print"></i> &nbsp;Imprimir</button>
            </ol>
          </div>
          <div class="col-4 form-group">
            <label>Doc. Identidad</label>
            <input type="text" class="form-control" id="txt_nro_dni_modal" disabled style="background-color: white;">
          </div>
          <div class="col-8 form-group">
            <label>Nombre / Raz&oacute;n Social</label>
            <input type="text" class="form-control" id="txt_nombre_modal" disabled style="background-color: white;">
          </div>
          <div class="col-2 form-group">
            <label>Ciudad</label>
            <input type="text" class="form-control" id="txt_ciudad_modal" disabled style="background-color: white;" >
          </div>
          <div class="col-6 form-group">
            <label>Direcci&oacute;n</label>
            <input type="text" class="form-control" id="txt_direccion_modal" disabled style="background-color: white;" >
          </div>
          <div class="col-lg-2 form-group">
            <label>Mza:</label>
            <input type="text" id="txt_mza_modal" disabled style="background-color: white;"  class="form-control">
          </div>
          <div class="col-lg-2 form-group">
            <label>Lote:</label>
            <input type="text" id="txt_lote_modal" disabled style="background-color: white;" class="form-control">
          </div>
          <div class="col-lg-4 form-group">
            <label>Zona:</label>
            <input type="text" id="txt_zona_modal" disabled style="background-color: white;"  class="form-control">
          </div>
          <div class="col-lg-4 form-group">
            <label>Avenida:</label>
            <input type="text" id="txt_avenida_modal" disabled style="background-color: white;" class="form-control">
          </div>
          <div class="col-lg-4 form-group">
            <label>Deuda Total:</label>
            <input type="text" id="txt_deuda_modal" disabled style="background-color: white;color: #9B0000;font-weight: bold;text-align: center;" class="form-control">
          </div>
          <div class="col-12 table-responsive">
            <table id="tabla_asistencia_detalle_modal" class="display" style="width: 100%">
              <thead>
                <tr>
                    <th style="text-align: center;width: 50px"># Recibo</th>
                    <th style="text-align: center;width: 100px">Mes</th>
                    <th style="text-align: center;width: 100px">A&ntilde;o</th>
                    <th style="text-align: center;width: 100px">Servicio</th>
                    <th style="text-align: center;width: 100px">Monto</th>
                    <th style="text-align: center;width: 100px">Deuda</th>
                </tr>
              </thead>
              <tbody id="tbody_deuda_detalle_modal"></tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!--Fin Modal -->
<script>
  $(document).ready(function() {
      $('.select2').select2();
  }); 
  verificar_tipo();
  $("#combo_buscar").change(function(){
    verificar_tipo();
  });
  function verificar_tipo() {
    let combo_buscar = $("#combo_buscar").val();
    if (combo_buscar == 'dni') {
      var x = document.getElementsByClassName("nombre");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      var x = document.getElementsByClassName("id_ciudadano");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
      }
    }
    if (combo_buscar == 'nombre') {
      var x = document.getElementsByClassName("id_ciudadano");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      var x = document.getElementsByClassName("id_contrato");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      var x = document.getElementsByClassName("nombre");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
      }
    }
  }
  //listar_apertura();

</script>