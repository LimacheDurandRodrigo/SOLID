<?php
require 'serverside.php';
$table_data->getObtnerListado('view_listar_reconexiones_canceladas','solicitud_id',array('solicitud_id','ciudadano_id','contrato_id','sol_tiposervicio','ciu_nrodocumento','ciu_nombre','ciu_direccion_fiscal','ciu_mza_fiscal','ciu_lote_fiscal','sol_estatus','sol_referencia','sol_tiposolicitud','sol_descripcion','sol_responsable','sol_fecharegistro','sol_fechaupdate','sol_fechaprogramada','sol_fechainicio','sol_fechafinal','sol_nrocomprobante','ciudadano'));
?>