<?php
    require_once 'modelo_conexion.php';
    class Modelo_Ingreso extends conexionBD{
        public function traer_cantidad_solicitudes_pendientes($idemprea,$estado){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_CANTIDAD_SOLICITUDES_PENDIENTES_INGRESO(?,?)";
            $arreglo = array();
            $query   = $c->prepare($sql);
            $query->bindParam(1,$idemprea);
            $query->bindParam(2,$estado);
            $resultado = $query->execute();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                $arreglo[] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }
        public function listar_solicitud_ingreso($finicio,$ffin,$estatus){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_SOLICITUD_INGRESO(?,?,?)";
            $arreglo = array();
            $query   = $c->prepare($sql);
            $query->bindParam(1,$finicio);
            $query->bindParam(2,$ffin);
            $query->bindParam(3,$estatus);
            $query->execute();
            $resultado = $query->fetchAll(PDO::FETCH_ASSOC);
            foreach($resultado as $resp){
                $arreglo["data"][] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }

        public function modificar_estatus_ingreso($id,$idusuario,$estatus){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_ESTATUS_INGRESO(?,?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$id);
            $query->bindParam(2,$idusuario);
            $query->bindParam(3,$estatus);
            $resultado = $query->execute();
            if($resultado){
                return 1;
            }else{
                return 0;
            }
            conexionBD::cerrar_conexion();
        }

    }
?>