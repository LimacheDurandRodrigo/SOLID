<?php
    require_once 'modelo_conexion.php';

    class Modelo_Empleado extends conexionBD{

        public function listar_empleado(){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_LISTAR_EMPLEADO()";
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
        function Registrar_Empleado($nombre,$apepat,$apemat,$fechanacimiento,$nrodocumento,$movil,$direccion,$email){
            $c = conexionBD::conexionPDO();
            $sql = "CALL PA_REGISTRAR_EMPLEADO(?,?,?,?,?,?,?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$nombre);
            $query->bindParam(2,$apepat);
            $query->bindParam(3,$apemat);
            $query->bindParam(4,$fechanacimiento);
            $query->bindParam(5,$nrodocumento);
            $query->bindParam(6,$movil);
            $query->bindParam(7,$direccion);
            $query->bindParam(8,$email);
            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
        }
        function Editar_Empleado($id,$nrodocumento,$nombre,$apepat,$apemat,$fechanacimiento,$movil,$direccion,$email,$estado){
            $c = conexionBD::conexionPDO();

            $sql = "CALL PA_EDITAR_EMPLEADO(?,?,?,?,?,?,?,?,?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$id);
            $query->bindParam(2,$nrodocumento);
            $query->bindParam(3,$nombre);
            $query->bindParam(4,$apepat);
            $query->bindParam(5,$apemat);
            $query->bindParam(6,$fechanacimiento);
            $query->bindParam(7,$movil);
            $query->bindParam(8,$direccion);
            $query->bindParam(9,$email);
            $query->bindParam(10,$estado);
            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
        }

    }

?>