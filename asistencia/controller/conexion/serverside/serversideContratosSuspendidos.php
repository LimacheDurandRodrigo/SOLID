<?php
require 'serverside.php';
$table_data->getObtnerListado('view_listar_contratos_suspendidos','contrato_id',array('contrato_id','ciudadano','ciu_nombre','ciu_nrodocumento','ciu_direccion_fiscal','ciu_mza_fiscal','ciu_lote_fiscal','cont_tiposervicio','tarifa','cont_suministros','ciudadano_id'));
?>