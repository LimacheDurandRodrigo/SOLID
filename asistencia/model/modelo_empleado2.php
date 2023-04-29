<?php
    require_once 'modelo_conexion.php';

    class Modelo_Empleado extends conexionBD{

        public function listar_empleado_administrativo($idempleado){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_LISTAR_EMPLEADO_ADMINISTRATIVO(?)";
            $arreglo = array();
            $query   = $c->prepare($sql);
            $query->bindParam(1,$idempleado);
            $query->execute();
            $resultado = $query->fetchAll(PDO::FETCH_ASSOC);
            foreach($resultado as $resp){
                    $arreglo["data"][] = $resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();

        }



        
        function editar_foto($idcliente,$archivo){
            $c = conexionBD::conexionPDO();
            $sql = "CALL PA_EDITAR_FOTO_EMPLEADO(?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$idcliente);
            $query->bindParam(2,$archivo);
            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
        }





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


        

        function Registrar_Empleado($nombre,$apepat,$apemat,$fechanacimiento,$nrodocumento,$movil,$direccion,$email,$archivo,$tipodocumento,$combo_sexo,$departamento,$ciudad,$tipocontrato,$salario){
            $c = conexionBD::conexionPDO();
            $sql = "CALL PA_REGISTRAR_EMPLEADO(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$nombre);
            $query->bindParam(2,$apepat);
            $query->bindParam(3,$apemat);
            $query->bindParam(4,$fechanacimiento);
            $query->bindParam(5,$nrodocumento);
            $query->bindParam(6,$movil);
            $query->bindParam(7,$direccion);
            $query->bindParam(8,$email);
            $query->bindParam(9,$archivo);
            $query->bindParam(10,$tipodocumento);
            $query->bindParam(11,$combo_sexo);
            $query->bindParam(12,$departamento);
            $query->bindParam(13,$ciudad);
            $query->bindParam(14,$tipocontrato);
            $query->bindParam(15,$salario);




            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
        }



        
        function Editar_Empleado($id,$nrodocumento,$nombre,$apepat,$apemat,$fechanacimiento,$movil,$direccion,$email,$estado,$tipodoc,$sexo,$depar,$ciudad,$tcontrato,$salario){
            $c = conexionBD::conexionPDO();

            $sql = "CALL PA_EDITAR_EMPLEADO(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
            $query->bindParam(11,$tipodoc);
            $query->bindParam(12,$sexo);
            $query->bindParam(13,$depar);
            $query->bindParam(14,$ciudad);
            $query->bindParam(15,$tcontrato);
            $query->bindParam(16,$salario);

            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
        }

    }

?>