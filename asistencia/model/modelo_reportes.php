<?php
    require_once 'modelo_conexion.php';

    class Modelo_reportes extends conexionBD{
        public function buscar_deuda_cabecera_por_idciudadano($txt_dni){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_BUSCAR_DEUDA_CABECERA_DNI_ALUMNO(?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$txt_dni);
            $resultado = $query->execute();
            $arreglo = array();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                    $arreglo[] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }




        public function verificar_exterior($txt_dni,$txt_nrocontrato){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_BUSCAR_CIUDADANO_DEUDOR_EXTERIOR(?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$txt_dni);
            $query->bindParam(2,$txt_nrocontrato);
            $resultado = $query->execute();
            $arreglo = array();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                    $arreglo[] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }


        public function buscar_ciudadano_deudor_exterior($txt_dni,$txt_nrocontrato){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_BUSCAR_CIUDADANO_DEUDOR_EXTERIOR(?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$txt_dni);
            $query->bindParam(2,$txt_nrocontrato);
            $resultado = $query->execute();
            $arreglo = array();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                 $arreglo["data"][] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }
        public function buscar_ciudadano_deudor($txt_datosciudadano){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_BUSCAR_DEUDA_CABECERA_DATOSCIUDADANO(?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$txt_datosciudadano);
            $resultado = $query->execute();
            $arreglo = array();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                    $arreglo["data"][] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }
        public function buscar_deuda_cabecera_por_idcontrato($txt_id){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_BUSCAR_DEUDA_CABECERA_IDCONTRATO(?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$txt_id);
            $resultado = $query->execute();
            $arreglo = array();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                    $arreglo[] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }
        public function buscar_deuda_detalle($txt_id_contrato){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_BUSCAR_DEUDA_POR_IDCONTRATO(?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$txt_id_contrato);
            $resultado = $query->execute();
            $arreglo = array();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                    $arreglo["data"][] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }
        //==================================================================
        
       
    }
?>