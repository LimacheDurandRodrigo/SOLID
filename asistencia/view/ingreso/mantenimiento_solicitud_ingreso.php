<script src="js/ingreso.js?rev=<?php echo time();?>"></script>
<div class="page-header">
    <div class="row align-items-end">
        <div class="col-lg-8">
            <div class="page-header-title">
				<i class="far fa-address-card bg-blue"></i>
				<div class="d-inline">
                    <h5>Mantenimiento Solicitud Ingreso a Porton</h5>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <nav class="breadcrumb-container" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="#"><i class="ik ik-home"></i></a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Solicitud Ingreso2</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header"  style="padding: 10px 20px;">
            	<table style="width: 100%;">
	                <tr>
	                  	<td style="width:70%">
	                    	<h3>Listado de Solicitudes de Ingreso a Porton33</h3>
	                  	</td>
	                  	<td style="width:30%">
	                  	</td>
	                </tr>
	            </table>
            </div>
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
                        <label>Estado</label>
                        <select class="select2 form-control" id="combo_estado" style="width: 100%;">
                            <option>PENDIENTE</option>
                            <option>APROBADO</option>
                            <option>RECHAZADO</option>
                        </select>
                    </div>
                    <div class="col-lg-2 form-group">
                        <label for="">&nbsp;</label><br>
                        <button class="btn btn-md btn-warning" style="width:100%;" onclick="listar_ingreso()"><i class="fa fa-search" ></i>&nbsp;<b>Buscar</b></button>
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
<div class="modal fade bs-example-modal-lg" id="modal_ver_datos">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content form-horizontal" >
            <div class="modal-header">
              <h4 class="modal-title"><label ><b>DATOS DE LA SOLICITUD</b></label></h4>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="">
                <div class="modal-body">
                    <div class="row" style="padding-right: 0px;padding-left: 25px;">
                        <div class="col-lg-4 form-group">
                            <hr style="border-top: 1px solid #9B0000;">
                        </div>
                        <div class="col-lg-4 form-group" style="text-align: center;">
                            <label>Datos del Motorista</label>
                        </div>
                        <div class="col-lg-4 form-group">
                            <hr style="border-top: 1px solid #9B0000;">
                        </div>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-3">
                                    <label>Doc. Identidad (*):</label>
                                    <input type="text" id="txt_cedula" class="form-control txt_chofer" placeholder="Buscar" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                                </div>
                                <div class="col-lg-9">
                                    <label>Nombre y apellidos(*):</label>
                                    <input class="form-control txt_chofer" type="text" placeholder="Ingresar nombre" id="txt_nombre" onkeypress="return soloNumerosyletras(event)" maxlength="150" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-lg-12 col-sm-12 form-group">
                                    <br>
                                    <label>Direcci&oacute;n (*):</label>
                                    <input type="text" id="txt_direccion" class="form-control txt_chofer" placeholder="Ingresar direcci&oacute;n" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                                </div>
                                <div class="col-lg-6 col-sm-6 form-group">
                                    <label>Nro Celular (*):</label>
                                    <input type="text" id="txt_telefono" class="form-control txt_chofer" placeholder="Ingresar nro celular" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                                </div>
                                <div class="col-lg-6 col-sm-6 form-group">
                                    <label>Email (*):</label>
                                    <input type="text" id="txt_email" class="form-control txt_chofer" placeholder="Ingresar email" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                                </div>                        
                            </div>
                        </div>
                        <div class="col-lg-3" >
                            <div style="text-align: center;" class="vertical-align-content" align="center">
                                <div id="div_img">
                                    <img src="visita/picture.png"  width="70%" style="border:2px solid;border-radius: 20px;">
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-lg-4 form-group">
                            <hr style="border-top: 1px solid #9B0000;">
                        </div>
                        <div class="col-lg-4 form-group" style="text-align: center;">
                            <label>Datos de la Solicitud</label>
                        </div>
                        <div class="col-lg-4 form-group">
                            <hr style="border-top: 1px solid #9B0000;">
                        </div>
                        <div class="col-lg-12 col-sm-12 form-group">
                            <label>Tipo Material (*):</label>
                            <div class="form-radio">
                                <form>
                                    <div style="width:33.33%" class="radio radiofill radio-inline">
                                        <label>
                                            <input type="radio" disabled value="Requie" name="rad_tipomaterial" id="rad_tipo_raquie">
                                            <i class="helper"></i>Raquie
                                        </label>
                                    </div>
                                    <div  style="width:33.33%" class="radio radiofill radio-inline">
                                        <label>
                                            <input type="radio" disabled id="rad_tipo_madera" value="Madera" name="rad_tipomaterial">
                                            <i class="helper"></i>Madera
                                        </label>
                                    </div>
                                    <div class="radio radiofill radio-inline" style="text-align:right;">
                                        <label>
                                            <input type="radio" disabled value="Collito" id="rad_tipo_collito" name="rad_tipomaterial">
                                            <i class="helper"></i>Collito
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-4 form-group">
                            <label>Fec. Inicial Reserva (*):</label>
                            <div class="input-group date"  data-target-input="nearest">
                                <input type="text" class="form-control" id="txt_fecha_inicio" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                                <div class="input-group-append">
                                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                </div>
                            </div>
                        </div>  
                        <div class="col-lg-4 col-sm-4 form-group">
                            <label>Fec. Final Reserva (*):</label>
                            <div class="input-group date"  data-target-input="nearest">
                                <input type="text" class="form-control" id="txt_fecha_final" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                                <div class="input-group-append">
                                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-4 form-group">
                            <label>Peso Material (EN KILO)(*):</label>
                            <input type="text" class="form-control precio" id="txt_peso" placeholder="Ingresar peso" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                        </div>
                        <div class="col-lg-4 form-group">
                            <hr style="border-top: 1px solid #9B0000;">
                        </div>
                        <div class="col-lg-4 form-group" style="text-align: center;">
                            <label>Datos del Veh&iacute;culo</label>
                        </div>
                        <div class="col-lg-4 form-group">
                            <hr style="border-top: 1px solid #9B0000;">
                        </div>
                        <div class="col-lg-6 col-sm-6 form-group">
                            <label>Nro Placa Veh&iacute;culo(*):</label>
                            <input type="text" class="form-control txt_idcarro" id="txt_nroplaca" placeholder="Ingresar placa" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                        </div>
                        <div class="col-lg-6 col-sm-6 form-group">
                            <label>Nro Placa Contenedor(*):</label>
                            <input type="text" class="form-control txt_idcarro" id="txt_nroplaca_contenedor" placeholder="Ingresar placa contenedor" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                        </div>
                        <div class="col-lg-6  col-sm-6 form-group">
                            <input type="text" id="txt_idcarro" hidden>
                            <label>Color: (*)</label>
                            <input class="form-control txt_idcarro" onkeypress="return soloNumerosyletras(event)" type="text" placeholder="Ingresar color" id="txt_color" maxlength="20" disabled style="background-color: white;opacity: 1;font-weight: bold;">
                        </div>
                        <div class="col-lg-6  col-sm-6 form-group">
                            <label>Marca: (*)</label>
                            <input class="form-control txt_idcarro" onkeypress="return soloNumerosyletras(event)" type="text" placeholder="Ingresar marca" id="txt_marca" maxlength="150"  disabled style="background-color: white;opacity: 1;font-weight: bold;">
                        </div> 
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-outline-success" data-dismiss="modal"><i class="fa fa-times"></i><b> Cerrar</b></button>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function() {
    $('.js-example-basic-single').select2();
    
    
});
</script>
<?php 
    if (isset($_SESSION['S_SEGURIDAD_ROL'])) {  
?>


    <script type="text/javascript">listar_ingreso();</script>
<?php 
    }
?>
<style type="text/css">
    .vertical-align-content {
       position: relative;
       top: 50%;
       -webkit-transform: translateY(-50%);
       -ms-transform: translateY(-50%);
       transform: translateY(-50%);
    }
</style>