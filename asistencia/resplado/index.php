<?php
session_start();
if(isset($_SESSION['S_IDUSUARIO'])){
  header('Location: view/index.php');
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width initial-scale=1.0">
    <title>Inicio de Sesi&oacute;n | Sistema Control Servicios</title>
    <!-- GLOBAL MAINLY STYLES-->
    <link href="view/plantilla/assets/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="view/plantilla/assets/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="view/plantilla/assets/vendors/themify-icons/css/themify-icons.css" rel="stylesheet" />
    <!-- THEME STYLES-->
    <link href="view/plantilla/assets/css/main.css" rel="stylesheet" />
    <!-- PAGE LEVEL STYLES-->
    <link rel="stylesheet" href="view/plantilla/Select2/select2.min.css">
    <link href="view/plantilla/assets/css/pages/auth-light.css" rel="stylesheet" />
    <link rel="stylesheet" href="view/plantilla/css/estilo_propio.css?rev=<?php echo time();?>">
</head>


<body class="hold-transition login-page" style="background: url('img/AMARILLO2.jpg') no-repeat; background-size: cover;">
<br><br><br><br>


    <div class="content ">
        <div class="brand ancho">
            <a style="font-weight:bold; font-size:30px;" class="link" href="index.php">Sistema Control Servicios</a>
        </div>


        <form id="login-form" style="background-color:#96b4fa;" style="padding-bottom: 0px" class="card ancho" onsubmit="return false">
            <h2 class="login-title" style="font-weight:bold">Iniciar sesi&oacute;n</h2>
            <div class="form-group">
                <div class="input-group-icon right">
                    <div class="input-icon"><i class="fa fa-envelope"></i></div>
                    <input class="form-control" type="text" name="usuario" placeholder="Ingrese su usuario" autocomplete="new-password" id="txt_usuario">
                </div>
            </div>
            <div class="form-group">
                <div class="input-group-icon right">
                    <div class="input-icon"><i class="fa fa-lock font-16"></i></div>
                    <input class="form-control" type="password" onkeyup = "if(event.keyCode == 13) Iniciar_Sesion()" name="password" autocomplete="new-password" placeholder="Ingrese su contrase&ntilde;a" id="txt_pass">
                </div>
            </div>
            <div class="form-group row" style="padding-bottom: 0px">
                <div class="col-md-6">
                    <div class="form-group d-flex justify-content-between">
                        <label class="ui-checkbox ui-checkbox-info" style="font-weight:bold">
                            <input type="checkbox"  id="rememberMe">
                            <span class="input-span" ></span>
                            Recordar</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" type="submit" onclick="Iniciar_Sesion()">Ingresar</button>
                    </div>
                </div>

               


            </div>
        </form>


    </div>
    <!-- BEGIN PAGA BACKDROPS-->
    <div class="sidenav-backdrop backdrop"></div>
    <div class="preloader-backdrop">
        <div class="page-preloader">Loading</div>
    </div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="view/plantilla/assets/vendors/jquery/dist/jquery.min.js" type="text/javascript"></script>
<script src="view/plantilla/assets/vendors/popper.js/dist/umd/popper.min.js" type="text/javascript"></script>
<script src="view/plantilla/assets/vendors/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
<!-- PAGE LEVEL PLUGINS -->
<script src="view/plantilla/assets/vendors/jquery-validation/dist/jquery.validate.min.js" type="text/javascript"></script>
<!-- CORE SCRIPTS-->
<script src="view/plantilla/Select2/select2.min.js" type="text/javascript"></script>

<script src="view/plantilla/assets/vendors/metisMenu/dist/metisMenu.min.js" type="text/javascript"></script>

<script src="view/plantilla/assets/js/app.js" type="text/javascript"></script>
<script src="utilitarios/sweetalert.js"></script>
<script src="js/usuario.js?rev=<?php echo time();?>"></script>
<script>
  const rmcheck       = document.getElementById('rememberMe'),
        usuarioinput  = document.getElementById('txt_usuario'),
        passinput     = document.getElementById('txt_pass');
  if(localStorage.checkbox && localStorage.checkbox !==""){
    rmcheck.setAttribute("checked","checked");
    usuarioinput.value  = localStorage.usuario;
    passinput.value     = localStorage.pass;
  }else{
    rmcheck.removeAttribute("checked");
    usuarioinput.value  = "";
    passinput.value     = "";
  }
</script>
</body>
</html>
<style type="text/css">
.card {
    box-shadow: 0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);
    margin-bottom: 1rem;
}
</style>
<style type="text/css">
    @media (min-width:102px){
        .ancho{
          width: 350px;
        }
    }
    @media (min-width:580px){
        .ancho{
          width: 500px;
        }
    }
    @media (min-width:1600px){
        .ancho{
            width: 500px;
        }
    }
    .content {
        max-width: 500px;
        margin: 0 auto;
    }
</style>