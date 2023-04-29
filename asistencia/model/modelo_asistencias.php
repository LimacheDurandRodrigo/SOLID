<?php
    require_once 'modelo_conexion.php';
    class Modelo_Asistencias extends conexionBD{
        public function listar_asistencias(){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_LISTAR_ASISTENCIAS()";
            $arreglo = array();
            $query   = $c->prepare($sql);
            $query->execute();
            $resultado = $query->fetchAll(PDO::FETCH_ASSOC);
            foreach($resultado as $resp){
                    $arreglo["data"][] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();

        }
        public function buscar_asistencia_detalle($idalumno){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_BUSCAR_ASISTENCIA_POR_IDCONTRATO(?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$idalumno);
            $resultado = $query->execute();
            $arreglo = array();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                    $arreglo["data"][] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }
        

    }

?>