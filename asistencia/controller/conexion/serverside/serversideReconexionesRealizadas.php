<?php
require 'serverside.php';
$table_data->getObtnerListado('view_listar_reconexiones_realizadas','reconexion_id',array('reconexion_id','contrato_id','rec_fecharegistro','rec_archivo','rec_descripcion','solicitud_id','rec_estatus','usu_usuario','ciu_nrodocumento','ciu_nombre','ciu_direccion_fiscal','ciu_mza_fiscal','ciu_lote_fiscal','cont_tiposervicio','ciu_ciudad_fiscal','ciudadano','tarifa','cont_suministros','ciudadano_id','rec_monto'));
?>