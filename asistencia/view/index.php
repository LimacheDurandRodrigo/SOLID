<?php
    session_start();
    if(isset($_SESSION['tiempo_sistema']) ) {
        if($_SESSION['tiempo_sistema'] < time())
        {
            session_destroy();
            echo "<script>window.location='../index.php'</script>";
        }else{
          $_SESSION['tiempo_sistema'] = time()+1800;
        }
    }
    if (!isset($_SESSION['S_IDUSUARIO'])) {
        header('Location: ../index.php');
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width initial-scale=1.0">
    <title>P&aacute;gina Principal | Sistema Registros</title>
    <link href="plantilla/assets/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="plantilla/assets/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="plantilla/assets/vendors/themify-icons/css/themify-icons.css" rel="stylesheet" />
    <link href="plantilla/assets/vendors/jvectormap/jquery-jvectormap-2.0.3.css" rel="stylesheet" />
    <link href="plantilla/assets/css/main.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="plantilla/DataTables/datatables.min.css">
    <link rel="stylesheet" href="plantilla/Select2/select2.min.css">
    <link rel="stylesheet" href="plantilla/css/estilo_propio.css?rev=<?php echo time();?>">
    <link rel="stylesheet" href="plantilla/boostrap/bootstrap-daterangepicker/daterangepicker.css">
    <link rel="stylesheet" href="plantilla/boostrap/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">

    <!--<link rel="stylesheet" href="plantilla/calendario/css/bootstrap-material-datetimepicker.css"/>
    <script type="text/javascript" src="plantilla/calendario/js/moment-with-locales.min.js"></script>
    <script type="text/javascript" src="plantilla/calendario/js/bootstrap-material-datetimepicker.js"></script>-->
    <script src="../pluggins/bootstrap-checkbox-1.5.0/dist/js/bootstrap-checkbox.js" defer></script>
</head>
<style>
    .btn:hover{
        background-color: black !important;
        color: white;
    }
</style>
<body class="fixed-navbar has-animation fixed-layout">
    <div class="page-wrapper" style="background-color:#03420a;">
        <!-- START HEADER  CCC-->
 <!-- HEADER CABECERA GRANDE-->
        <header class="header altura_chico" style="background-color:#7a04e0;">

            <div class="page-brand probando" style="font-weight:bold">
                <a class="link" href="index.php" style="text-align: center;">
                    <span class="brand">SISTEMA DE REGISTROS<i style="font-weight: bold;line-height: 2;" class="ti-user"></i>
                        <span class="brand-tip"></span>
                    </span>
                    <span class="brand-mini" title="Control Suministros"><i class="fa fa-qrcode"></i></span>
                </a>
            </div>



            <div class="flexbox flex-1 ">
                <!-- START TOP-LEFT TOOLBAR-->
                <ul class="nav navbar-toolbar">
                    <li>
                        <a class="nav-link sidebar-toggler js-sidebar-toggler"><i class="ti-menu"></i></a>
                    </li>
                </ul>
                 <!-- CABECERA-->
                <!-- END TOP-LEFT TOOLBAR-->
                <!-- START TOP-RIGHT TOOLBAR-->
                <ul class="nav navbar-toolbar" style="height: 55px;color:white !important;">
                    <?php if($_SESSION['S_ROL']=='ADMINISTRATIVO'){ ?>

                      
                      

                    <?php } ?>
                    <li class="dropdown dropdown-user bg-black-gradient" style="background-color: white;height: 55px;color:black !important;">
                        <a class="" data-toggle="dropdown" style="color:white !important;font-weight:bold">
                            <img id="img_navbar" />
                            <span></span><label style="cursor:pointer" id="lb_usuario"></label> <i class="fa fa-angle-down m-l-5"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right  bg-black-gradient">
                            <a class="dropdown-item menu" href="javascript:abrirModalCuentaPerfil();"><i class="fa fa-user"></i>Perfil</a>
                            <a class="dropdown-item menu" href="javascript:abrirModalusuario()" ><i class="fa fa-cog"></i>Cambiar Contrase&ntilde;a</a>
                            <li class="dropdown-divider"></li>
                            <a class="dropdown-item menu" href="../controller/usuario/destruir_sesion.php" class="dropdown-item" style="font-size:large;"><i class="fa fa-power-off"></i>Salir</a>
                        </ul>
                    </li>
                </ul>
                <!-- END TOP-RIGHT TOOLBAR-->
            </div>
        </header>




        <!-- END HEADER-->
        <!-- START SIDEBAR MENU PRINCIPAL-->
        <nav class="page-sidebar" id="sidebar" style="background-color:#0e0121;">
            <div id="sidebar-collapse">
                <div class="admin-block d-flex">
                    <div>
                        <!--<img class="img-circle"  id="imagen_sidebar"  width="45px" src="plantilla/assets/img/admin-avatar.png">-->
                        <div id="div_fotoperfil2"></div>
                    </div>
                    <div class="admin-info">
                        <div class="font-strong"><label for="" id="usu_sidebar"><?php echo $_SESSION['S_USUARIO']; ?></label></div><small id="rol_sidebar"></small>
                        <div class="font-strong"><label for="" id="usu_sidebar"><?php echo $_SESSION['S_USUARIO']; ?></label></div><small id="rol_sidebar"></small>
                    </div>
                </div>


                <ul class="side-menu metismenu nav-child-indent" style="background-color:#0e0121;">
                    <li>
                        <a class="active" href="index.php"><i class="sidebar-item-icon fa fa-th-large"></i>
                            <span class="nav-label">Inicio</span>
                        </a>
                    </li>

                    <?php if($_SESSION['S_ROL']=='ADMINISTRADOR'){ ?>

                        <li class="heading">MENU ADMINISTRADOR</li>


                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','studen/mantenimiento_studen.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Personal</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>

                        

                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','carnet/mantenimiento_carnet.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Impresion carnet</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>


                        
                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','asistencias/mantenimiento_asistencias.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Asistencias</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','asistencias/mantenimiento_fechas.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Reportes por Fechas</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>








                         




                        
                        
                        <li class="heading"> CONTROL DE ACCESO</li>

                        
                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','empleado/vista_mantenimiento_empleado.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Empleados</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>


                        

                        

                        
                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','usuario/mantenimiento_usuario.php');" class="nav-link"><i class="sidebar-item-icon fa fa-users"></i>
                                <span class="nav-label">Usuario</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','rol/vista_mantenimiento_rol.php');" class="nav-link"><i class="sidebar-item-icon ti-comment-alt"></i>
                                <span class="nav-label">Rol</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>

                    <?php 
                    } 
                    ?>
                    <?php if($_SESSION['S_ROL']=='ADMINISTRATIVO'){ ?>
                        <li class="heading">MENU ADMINISTRATIVO</li>
                       
                      
                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','studen/mantenimiento_studen.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Personal</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>

                        

                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','carnet/mantenimiento_carnet.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Impresion carnet</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>


                        
                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','asistencias/mantenimiento_asistencias.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Asistencias</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','asistencias/mantenimiento_fechas.php');" class="nav-link"><i class="sidebar-item-icon  fa fa-user"></i>
                                <span class="nav-label">Reportes por Fechas</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>



                        
                        
                    <?php 
                    } 
                    ?>




                    
                    <?php if($_SESSION['S_ROL']=='CAJERO'){ ?>
                        <li class="heading">MENU CAJA</li>
                        <li>
                            <a href="javascript:cargar_contenido('contenido_principal','pagos/mantenimiento_pagos.php');" class="nav-link"><i class="sidebar-item-icon fa fa-credit-card"></i>
                                <span class="nav-label">Pagos</span><i class="fa fa-angle-left arrow"></i>
                            </a>
                        </li>
                    <?php 
                    } 
                    ?>
                </ul>
            </div>
        </nav>
        <!-- END SIDEBAR-->
        <div class="content-wrapper">
            <input type="text" value="<?php echo $_SESSION['S_IDUSUARIO'];?>" id="txt_codigo_principal" hidden>
            <input type="text" value="<?php echo $_SESSION['S_USUARIO'];?>" id="txtnombre_principal_usuario" hidden>
            <input type="text" id="txtidtrabajador_principal" hidden>
            <!-- START PAGE CONTENT-->
            <div class="page-content fade-in-up">
                <div id="contenido_principal">
                    <div class="row">
                       
                    </div>
                    <div class="row" id="div_widget">
                    
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="ibox">
                                <canvas id="myChartVentaTop5"></canvas>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ibox">
                                <canvas id="myChartIngresoTop5"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- END PAGE CONTENT-->
            <footer class="page-footer">
                <div class="font-13"><b> one</b> - Derechos Reservados  <?php echo date('Y') ?></div>
            </footer>
        </div>
    </div>
    <div class="theme-config opened" hidden>
        <div class="theme-config-toggle"><i class="fa fa-cog theme-config-show"></i><i class="ti-close theme-config-close"></i></div>
        <div class="theme-config-box">
            <div class="text-center font-18 m-b-20">SETTINGS</div>
            <div class="font-strong">LAYOUT OPTIONS</div>
            <div class="check-list m-b-20 m-t-10">
                <label class="ui-checkbox ui-checkbox-gray">
                    <input id="_fixedNavbar" type="checkbox" checked="">
                    <span class="input-span"></span>Fixed navbar</label>
                <label class="ui-checkbox- ui-checkbox-gray-">
                    <input id="_fixedlayout" type="checkbox">
                    <span class="input-span"></span>Fixed layout</label>
                <label class="ui-checkbox ui-checkbox-gray">
                    <input class="js-sidebar-toggler" type="checkbox">
                    <span class="input-span"></span>Collapse sidebar</label>
            </div>
        </div>
    </div>
    <!-- BEGIN THEME CONFIG PANEL-->
    <!-- END THEME CONFIG PANEL-->
    <!-- BEGIN PAGA BACKDROPS-->
    <div class="sidenav-backdrop backdrop"></div>
    <div class="preloader-backdrop">
        <div class="page-preloader">Loading</div>
    </div>

    <script src="plantilla/assets/vendors/jquery/dist/jquery.min.js" type="text/javascript"></script>
    <script src="plantilla/assets/vendors/popper.js/dist/umd/popper.min.js" type="text/javascript"></script>
    <script src="plantilla/assets/vendors/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="plantilla/assets/vendors/metisMenu/dist/metisMenu.min.js" type="text/javascript"></script>
    <script src="plantilla/assets/vendors/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
    <script src="plantilla/assets/vendors/chart.js/dist/Chart.min.js" type="text/javascript"></script>
    <script src="plantilla/assets/vendors/jvectormap/jquery-jvectormap-2.0.3.min.js" type="text/javascript"></script>
    <script src="plantilla/assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js" type="text/javascript"></script>
    <script src="plantilla/assets/vendors/jvectormap/jquery-jvectormap-us-aea-en.js" type="text/javascript"></script>
    <script src="plantilla/assets/js/app.min.js" type="text/javascript"></script>
    <!-- PAGE LEVEL SCRIPTS-->

    <script src="plantilla/DataTables/datatables.min.js"></script>
   <!-- <script src="plantilla/Sweetalert2/sweetalert2.js" type="text/javascript"></script>-->
    <script src="../js/sweetalert2.js"></script>
    <script src="plantilla/Select2/select2.min.js" type="text/javascript"></script>
    <script src="../js/usuario.js" type="text/javascript"></script>
    <script src="plantilla/boostrap/moment/min/moment.min.js"></script>
    <script src="plantilla/boostrap/bootstrap-daterangepicker/daterangepicker.js"></script>
    <script src="plantilla/boostrap/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="plantilla/bs-custom-file-input/bs-custom-file-input.min.js"></script>
    <div class="modal fade bs-example-modal-lg" id="modal_cuenta"  style="padding:50px 0">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="mimodal_registrar"><label>Configuraci&oacute;n de la Cuenta</label></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" >
            <form class="form-horizontal" id="formulario_usuario"  onsubmit="return false" autocomplete="false">
                <div class="box-body">
                  <div class="">
                    <div class="form-group row">
                      <label class="col-sm-4 control-label label_modificado">Tipo Usuario</label>
                      <div class="col-sm-7">
                        <input type="text" class="form-control" style="background:#fff;font-weight:bold;"  disabled="" id="tipo_usuario" placeholder="Tipo Usuario" maxlength="40">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 control-label label_modificado">Usuario</label>
                      <div class="col-sm-7">
                        <input type="text" id="txtoriginal" value="" hidden='true'>
                        <input type="text" autocomplete="new-password" style="background:#fff;font-weight:bold;" id="txtusuario" class="form-control" value="<?php echo $_SESSION['S_USUARIO'] ?>" disabled=""  placeholder="Usuario" maxlength="30">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 control-label label_modificado"> Actual</label>
                      <div class="col-sm-7">
                        <input type="password" autocomplete="new-password" class="form-control" onkeypress="return soloNroDocumento(event)" id="txtactual" placeholder="Clave Actual" maxlength="30">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 control-label label_modificado">Nueva </label>
                      <div class="col-sm-7">
                        <input type="password" autocomplete="new-password" class="form-control" onkeypress="return soloNroDocumento(event)" id="txtnueva" placeholder="Nueva Clave" maxlength="30">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 control-label label_modificado">Repetir Contrase&ntilde;a Nueva</label>
                      <div class="col-sm-7">
                        <input type="password" autocomplete="new-password" class="form-control" onkeypress="return soloNroDocumento(event)" id="txtrepetir" placeholder="repetir Clave nueva" maxlength="30">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.box-body -->
                <!-- /.box-footer -->
              </form>  
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onclick="Editar_cuenta()"><b>&nbsp;Actualizar</b>&nbsp;</button>
        </div>
        </div>
      </div>
    </div>
    <div class="modal fade bs-example-modal-lg" id="modal_perfil" >
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content form-horizontal" >
                <div class="modal-header">
                  <h4 class="modal-title"><label id="label_empleado" ><b>EDITAR DATOS PERSONALES</b></label></h4>
                  <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="">
                    <div class="modal-body" style="overflow:auto;height:400px;">
                        <div class="col-lg-12 row">
                            <div class="col-lg-4">
                                <label>Nº Documento Identidad (*):</label>
                                <input class="form-control" type="text" placeholder="Ingresar dni" maxlength="8" id="txtdni_perfil" onkeypress="return soloNumeros(event)"><br>
                            </div>
                            <div class="col-lg-8">
                                <label>Nombre  (*):</label>
                                <input class="form-control" type="text" placeholder="Ingresar nombre" maxlength="150" id="txtnombre_perfil" onkeypress="return sololetras(event)"><br>
                            </div>
                            <div class="col-lg-6">
                                <label>Apellido Paterno  (*):</label>
                                <input class="form-control" type="text" placeholder="Ingresar apellido paterno" maxlength="150" id="txtapepat_perfil" onkeypress="return sololetras(event)"><br>
                            </div>
                            <div class="col-lg-6">
                                <label>Apellido Materno  (*):</label>
                                <input class="form-control" type="text" placeholder="Ingresar apellido materno" maxlength="150" id="txtapemat_perfil" onkeypress="return sololetras(event)"><br>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Fecha Nacimiento (*):</label>
                                    <div class="input-group">
                                        <input type="text" id="txt_fechanacimiento_perfil" class="form-control fecha" />
                                        <div class="input-group-addon" style="background-color: white">
                                            <i class="fa fa-calendar"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <label>Celular:</label>
                                <input class="form-control" onkeypress="return soloNumeros(event)" type="text" placeholder="Ingresar nro de celular" maxlength="9" id="txtcelular_perfil"><br>
                            </div>
                            <div class="col-lg-6">
                                <label>Email:</label>
                                <input class="form-control" onkeypress="return soloNroDocumento(event)" type="text" placeholder="Ingresar email" maxlength="250" id="txtemail_perfil"><br>
                            </div>
                            <div class="col-lg-6">
                                <label>Tipo usuario (*):</label>
                                <input class="form-control" disabled onkeypress="return soloNumerosyletras(event)" type="text" placeholder="Ingresar tipo usuario" style="font-weight: bold;background-color: white;" maxlength="250" id="txt_tipousuario_perfil"><br>
                            </div>
                            <div class="col-lg-12" >
                              <label>Direcci&oacute;n (*):</label>
                              <input class="form-control" onkeypress="return soloNumerosyletras(event)" type="text" placeholder="Ingresar direcci&oacute;n" id="txt_direccion_perfil" maxlength="250" ><br>
                            </div>
                            <div class="col-lg-12 form-group" style="text-align: left;font-weight: bold;color: #9B0000">
                                Campos Obligatorios (*)
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="Editar_Perfil()">Actualizar Perfil</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(".fecha").datepicker({ 
          autoclose:true,
          format: 'dd/mm/yyyy'
        }).on('keypress paste', function (e) {
          e.preventDefault();
          return false;
        });
        $("#_fixedlayout").prop("checked",true);
        $('body').addClass('fixed-layout');
        $('#sidebar-collapse').slimScroll({
            height: '100%',
            railOpacity: '0.9',
        });
            
        traer_administrador();
        function cargar_contenido(contenedor, contenido) {
            $("#" + contenedor).load(contenido);
        }

        var idioma_espanol = {
            select: {
                rows: "%d fila seleccionada"
            },
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ning&uacute;n dato disponible en esta tabla",
            "sInfo": "Registros del (_START_ al _END_) total de _TOTAL_ registros",
            "sInfoEmpty": "Registros del (0 al 0) total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "<b>No se encontraron datos</b>",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }

        
        function sololetras(e) {
            key = e.keyCode || e.which;

            teclado = String.fromCharCode(key).toLowerCase();

            letras = "qwertyuiopasdfghjklñzxcvbnm ";

            especiales = "8-37-38-46-164";

            teclado_especial = false;

            for (var i in especiales) {
                if (key == especiales[i]) {
                    teclado_especial = true;
                    break;
                }
            }

            if (letras.indexOf(teclado) == -1 && !teclado_especial) {
                return false;
            }
        }


        function soloNumeros(e) {
            tecla = (document.all) ? e.keyCode : e.which;
            if (tecla == 8) {
                return true;
            }
            // Patron de entrada, en este caso solo acepta numeros
            patron = /[0-9]/;
            tecla_final = String.fromCharCode(tecla);
            return patron.test(tecla_final);
        }
        function filterFloat(evt,input){
            var key = window.Event ? evt.which : evt.keyCode;
            var chark = String.fromCharCode(key);
            var tempValue = input.value+chark;
            if(key >= 48 && key <= 57){
                if(filter(tempValue)=== false){
                    return false;
                }else{
                    return true;
                }
            }else{
                if(key == 8 || key == 13 || key == 0) {
                    return true;
                }else if(key == 46){
                        if(filter(tempValue)=== false){
                            return false;
                        }else{
                            return true;
                        }
                }else{
                    return false;
                }
            }
        }
        function filter(__val__){
            var preg = /^([0-9]+\.?[0-9]{0,2})$/;
            if(preg.test(__val__) === true){
                return true;
            }else{
                return false;
            }
        }
        function soloNumerosyletras(e) {
            key = e.keyCode || e.which;
            tecla = String.fromCharCode(key).toLowerCase();
            letras = "abcdefghijklmnñopqrstuvwxyz0123456456789:\@-_+.*/ ";
            especiales = "8-37-39-46-58";

            tecla_especial = false
            for(var i in especiales){
                if(key == especiales[i]){
                    tecla_especial = true;
                    break;
                }
            }

            if(letras.indexOf(tecla)==-1 && !tecla_especial){
                return false;
            }
        }
        $(document).ready(function() {
            $('.js-example-basic-single').select2();
            var f = new Date();
            var anio = f.getFullYear();
            var mes = f.getMonth()+1;
            var d = f.getDate();
            // 01 02 03 04 05 06 07 08 09
            if(d<10){
                d='0'+d;
            }
            if(mes<10){
                mes='0'+mes;
            }
            //document.getElementById('txt_finicio_d').value=anio+"-"+mes+"-"+d;
            //document.getElementById('txt_ffin_d').value=anio+"-"+mes+"-"+d;
            //TraerWidgets();
        });
        $('#txt_rangofecha').daterangepicker({
            locale: {
            format: 'DD-MM-YYYY',
            "daysOfWeek": [
                    "Do",
                    "Lu",
                    "Ma",
                    "Mi",
                    "Ju",
                    "Vi",
                    "Sa"
                ],
                "monthNames": [
                    "Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Octubre",
                    "Noviembre",
                    "Diciembre"
                ],
                "separator": " / ",
                "applyLabel": "Aplicar",
                "cancelLabel": "Cancelar",
                "fromLabel": "Desde",
                "toLabel": "Hasta",
                "customRangeLabel": "Rango Personalizado",
            },
            ranges   : {
                'Hoy'       : [moment(), moment()],
                'Ayer'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Los Últimos 7 Días' : [moment().subtract(6, 'days'), moment()],
                'Últimos 30 Días': [moment().subtract(29, 'days'), moment()],
                'Este Mes'  : [moment().startOf('month'), moment().endOf('month')],
                'El Mes Pasado'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            startDate: moment(),
            endDate  : moment()
        });
        function sesion() {
            Swal.fire("Tiempo agotado","<label style='color:#9B0000;font-weight:bold;'>Inicie sesion nuevamente<label>","error")
            .then ( ( value ) =>  {
              window.location='../index.php';
            }); 
        }
        $(function() {
            var menues = $(".nav-link"); 
                menues.click(function() {
                menues.removeClass("active");
                $(this).addClass("active");
            });
        });

    </script>
    <style type="text/css">
        .subitem:focus  {
            background-color: white !important;
            color:black !important;
            font-weight: bold;
        }
        .subitem:hover{
            background-color: white !important;
            color:black !important;
            font-weight: bold;
        }
        .subitem{
            border-top-left-radius:3% !important;
            border-bottom-left-radius:3% !important;
        }
        .side-menu > li a:focus, .side-menu > li a:hover {
            color: #fff;
            background-color: #4505ab;
            font-weight: bold;
        }

    </style>
</body>

</html>
<style type="text/css">
    @media (min-width:102px){
        .altura_chico{
          position: inherit !important;
        }
    }
    @media (min-width:580px){
        .altura_chico{
            position: fixed !important;
        }
    }
    @media (min-width:1600px){
        .altura_chico{
            position: fixed !important;
        }
    }
</style>