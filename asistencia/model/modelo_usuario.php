<?php
    require_once 'modelo_conexion.php';

    class Modelo_Usuario extends conexionBD{
        public function buscar_administrador($buscar){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_VERIFICAR_USUARIO(?)";
            $arreglo = array();
            $query   = $c->prepare($sql);
            $query->bindParam(1,$buscar);
            $resultado = $query->execute();

            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                    $arreglo[] = $resp;

            }
            return $arreglo;
            conexionBD::cerrar_conexion();

        }
        public function VerificarUsuario($usuario,$pass){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_VERIFICAR_USUARIO(?)";
            $arreglo = array();
            $query   = $c->prepare($sql);
            $query->bindParam(1,$usuario);
            $query->execute();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                if(password_verify($pass,$resp['usu_contra'])){
                    $arreglo[] = $resp;
                }
            }

            return $arreglo;
            conexionBD::cerrar_conexion();

        }
        function editar_cuenta($usuario,$original,$nueva){
            $c = conexionBD::conexionPDO();
            $sql = "CALL PA_EDITARCUENTA(?,?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$usuario);
            $query->bindParam(2,$original);
            $query->bindParam(3,$nueva);
            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
            $this->conexion->cerrar();
        }

        public function listar_usuario(){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_LISTAR_USUARIO()";
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

        public function listar_select_empleado(){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_SELECT_EMPLEADO()";
            $arreglo = array();
            $query   = $c->prepare($sql);
            $query->execute();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                    $arreglo[] = $resp;

            }
            return $arreglo;
            conexionBD::cerrar_conexion();

        }

        public function Registrar_Usuario($usuario,$contra,$rol,$empleado){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_REGISTRAR_USUARIO(?,?,?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$usuario);
            $query->bindParam(2,$contra);
            $query->bindParam(3,$rol);
            $query->bindParam(4,$empleado);
            $resultado = $query->execute();
            if($row = $query->fetchColumn()){
                return $row;
            }
            conexionBD::cerrar_conexion();
        }

        
        public function Modificar_Usuario($idusuario,$rol,$empleado){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_MODIFICAR_USUARIO(?,?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$idusuario);
            $query->bindParam(2,$rol);
            $query->bindParam(3,$empleado);
            $resultado = $query->execute();
            if($resultado){
                return 1;
            }else{
                return 0;
            }
            conexionBD::cerrar_conexion();

        }

        public function Modificar_Usuario_Estatus($id,$estatus){
            $c = conexionBD::conexionPDO();

            $sql = "CALL SP_MODIFICAR_USUARIO_ESTATUS(?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$id);
            $query->bindParam(2,$estatus);
            $resultado = $query->execute();
            if($resultado){
                return 1;
            }else{
                return 0;
            }
            conexionBD::cerrar_conexion();

        }

        public function Modificar_Usuario_Contra($id,$contra){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_USUARIO_CONTRA(?,?)";
            $query   = $c->prepare($sql);
            $query->bindParam(1,$id);
            $query->bindParam(2,$contra);
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