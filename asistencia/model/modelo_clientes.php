<?php
    require_once 'modelo_conexion.php';

    class Modelo_Clientes extends conexionBD{
        function editar_foto($idcliente,$archivo){
            $c = conexionBD::conexionPDO();
            $sql = "CALL PA_EDITAR_FOTO_CLIENTE(?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$idcliente);
            $query->bindParam(2,$archivo);
            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
        }
        public function listar_clientes(){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_LISTAR_CLIENTE()";
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
        function Registrar_Cliente($nombre,$apepat,$apemat,$fechanacimiento,$nrodocumento,$movil,$direccion,$email,$archivo){
            $c = conexionBD::conexionPDO();
            $sql = "CALL PA_REGISTRAR_CLIENTE(?,?,?,?,?,?,?,?,?)";
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
            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
        }
        function Editar_Cliente($id,$nrodocumento,$nombre,$apepat,$apemat,$fechanacimiento,$movil,$direccion,$email,$estado){
            $c = conexionBD::conexionPDO();

            $sql = "CALL PA_EDITAR_CLIENTE(?,?,?,?,?,?,?,?,?,?)";
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