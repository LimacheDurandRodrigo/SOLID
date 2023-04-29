<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width initial-scale=1.0">
    <title>P&aacute;gina Principal | Sistema Control Suministros</title>
    <link href="view/plantilla/assets/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="view/plantilla/assets/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="view/plantilla/assets/vendors/themify-icons/css/themify-icons.css" rel="stylesheet" />
    <link href="view/plantilla/assets/vendors/jvectormap/jquery-jvectormap-2.0.3.css" rel="stylesheet" />
    <link href="view/plantilla/assets/css/main.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="view/plantilla/DataTables/datatables.min.css">
    <link rel="stylesheet" href="view/plantilla/Select2/select2.min.css">
    <link rel="stylesheet" href="view/plantilla/css/estilo_propio.css?rev=<?php echo time();?>">
    <link rel="stylesheet" href="view/plantilla/boostrap/bootstrap-daterangepicker/daterangepicker.css">
    <link rel="stylesheet" href="view/plantilla/boostrap/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">

    <!--<link rel="stylesheet" href="view/plantilla/calendario/css/bootstrap-material-datetimepicker.css"/>
    <script type="text/javascript" src="view/plantilla/calendario/js/moment-with-locales.min.js"></script>
    <script type="text/javascript" src="view/plantilla/calendario/js/bootstrap-material-datetimepicker.js"></script>-->
    <script src="pluggins/bootstrap-checkbox-1.5.0/dist/js/bootstrap-checkbox.js" defer></script>
</head>
<style>
    .btn:hover{
        background-color: black !important;
        color: white;
    }
</style>
<body class="fixed-navbar has-animation fixed-layout sidebar-mini">
    <div class="page-wrapper">
        <!-- START HEADER-->
        <header class="header">
            <div class="page-brand probando" style="font-weight:bold;margin-left: 0px;visibility: visible;">
                <a class="link" href="busqueda.php" style="text-align: center;">
                    <span class="brand">Control Servicios<i style="color: #9B0000;font-weight: bold;line-height: 2;" class="ti-shopping-cart"></i>
                        <span class="brand-tip"></span>
                    </span>
                    <span class="brand-mini" title="Control Suministros"><i class="ti-shopping-cart"></i></span>
                </a>
            </div>

            <div class="flexbox flex-1 ">
                <!-- START TOP-LEFT TOOLBAR-->
                <ul class="nav navbar-toolbar">
                    <li>
                        <a class="nav-link sidebar-toggler"><i  class="ti-menu"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="index.php" class="nav-link sidebar-toggler" style="font-weight: bold;">
                            <i style="font-weight: bold;" class="fa fa-user"></i> &nbsp;Login
                        </a>
                    </li>
                </ul>
                <!-- END TOP-LEFT TOOLBAR-->
                <!-- START TOP-RIGHT TOOLBAR-->
                <ul class="nav navbar-toolbar bg-black-gradient" style="height: 55px;color:white !important;">
                    <li class="dropdown dropdown-user ">
                        <a class="nav-link dropdown-toggle link" data-toggle="dropdown" style="color:white !important;font-weight:bold">
                            <img id="img_navbar" />
                            <span></span>BUSCAR DEUDA <i class="fa fa-angle-down m-l-5"></i>
                        </a>
                    </li>
                </ul>
                <!-- END TOP-RIGHT TOOLBAR-->
            </div>
        </header>
        <!-- END HEADER-->
        <!-- START SIDEBAR-->
        <!-- END SIDEBAR-->
        <div class="content-wrapper">
            <div class="page-content fade-in-up">
                <div id="contenido_principal">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ibox ibox-default">
                                <div class="ibox-head"  style="background-color:#e3be07">
                                    <div class="ibox-title">BUSCAR DEUDAm POR DOC. IDENTIDAD Y NRO CONTRATO</div>
                                </div>
                                <div class="ibox-head">
                                    <span style="font-size: small;color: #000;
                                            font-weight: bold;">
                                        Observaci&oacute;n:<label style="font-size: small;color: #9B0000;font-weight: bold;">  &nbsp;one</label>
                                    </span>
                                </div>



                                <div class="ibox-body">
                                    <div class="row">
                                        <div class="col-12" id="div_cabecera">
                                            <div class="row">


                                                <div class="col-md-2" style="line-height: 25px;text-align:right;">
                                                    <br>
                                                    <label>Ingresar Doc. Identidad</label>
                                                </div>
                                                <div class="col-md-3" style="">
                                                    <br>
                                                    <input type="text"  class="form-control" placeholder="ingresar doc de identidad" id="txt_nrodni" maxlength="12"onkeypress="return soloNumeros(event)">
                                                </div>




                                                <div class="col-md-2" style="line-height: 25px;text-align:right;">
                                                    <br>
                                                    <label>Ingresar Nro Contrato</label>
                                                </div>
                                                <div class="col-md-3" style="">
                                                    <br>
                                                    <input type="text"  class="form-control" placeholder="ingresar nro contrato" id="txt_nrocontrato" maxlength="12"onkeypress="return soloNumerosyletras(event)">
                                                </div>




                                                <div class="col-md-2" style="">
                                                    <br>
                                                    <button class="btn btn-success" onclick="verificar_existencia()" style="width: 100%"> Buscar</button>
                                                </div>


                                                <div class="col-md-2" style="">
                                                    <br>
                                                    <button class="btn btn-success" onclick="imprimir_busqueda()"style="width: 100%"> Impresion</button>
                                                </div>




                                            </div>
                                        </div>
                                        <div id="div_busqueda" style="display: none;" class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-2 form-group">
                                                    <label>CODIGO DEL CIUDADANO</label>
                                                    <input type="text" id="txt_codciudadano_busqueda" disabled class="form-control" style="background-color: white;color: black;font-weight: bold; background-color:#171616; color:#FFFFFF;font-size:20px">
                                                </div> 
                                                <div class="col-md-6 form-group">
                                                    <label>DATOS DEL CIUDADANO</label>
                                                    <input type="text" id="txt_nombre_busqueda" disabled class="form-control" style="background-color: white;color: black;font-weight: bold;background-color:#171616; color:#FFFFFF;font-size:20px"">
                                                </div> 
                                                <div class="col-md-2 form-group">
                                                    <br>
                                                    <button class="btn btn-danger" onclick="imprimir_busqueda()" style="width: 100%;font-weight: bold;"> Imprimir</button>
                                                </div>
                                                <div class="col-12 table-responsive" ><br>
                                                    <table id="tabla_busqueda" class="display" style="width: 100%">


                                                        <thead>
                                                            <tr>
                                                                <!--<th style="text-align: center;width: 30px;">#</th>
                                                                <th style="background-color:#a6c7e0; text-align: center;width: 50px;">Cod. Ciudadano</th>
                                                                <th style="background-color:#a6c7e0; text-align: center;width: 100px;">Nro DDatos Ciudadano</th>-->
                                                                <th style="background-color:#a6c7e0; text-align: center;width: 80px;">Mes</th>
                                                                <th style="background-color:#a6c7e0; text-align: center;width: 80px;">Monto</th>
                                                            
                                                                <th style="background-color:#a6c7e0; text-align: center;width: 80px;">Deuda</th>

                                                               
                                                               
                                                               
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-9 form-group"></div>
                                        <div class="col-3 form-group" id="div_busqueda2" style="display: none;">
                                            <br>
                                            <button class="btn btn-success" onclick="limpiar()" style="width: 100%">Nueva B&uacute;squeda</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END PAGE CONTENT-->
            <footer class="page-footer">
                <div class="font-13"><b> Softnet Solutions Pe</b> - Derechos Reservados  <?php echo date('Y') ?></div>
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

    <script src="view/plantilla/assets/vendors/jquery/dist/jquery.min.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/vendors/popper.js/dist/umd/popper.min.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/vendors/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/vendors/metisMenu/dist/metisMenu.min.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/vendors/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/vendors/chart.js/dist/Chart.min.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/vendors/jvectormap/jquery-jvectormap-2.0.3.min.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/vendors/jvectormap/jquery-jvectormap-us-aea-en.js" type="text/javascript"></script>
    <script src="view/plantilla/assets/js/app.min.js" type="text/javascript"></script>
    <!-- PAGE LEVEL SCRIPTS-->


    <script src="js/busqueda.js?rev=<?php echo time();?>"></script>



    
    <script src="view/plantilla/DataTables/datatables.min.js"></script>
   <!-- <script src="view/plantilla/Sweetalert2/sweetalert2.js" type="text/javascript"></script>-->
    <script src="js/sweetalert2.js"></script>
    <script src="view/plantilla/Select2/select2.min.js" type="text/javascript"></script>
    <script src="view/plantilla/boostrap/moment/min/moment.min.js"></script>
    <script src="view/plantilla/boostrap/bootstrap-daterangepicker/daterangepicker.js"></script>
    <script src="view/plantilla/boostrap/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="view/plantilla/bs-custom-file-input/bs-custom-file-input.min.js"></script>
    <script>
        $('#txt_nrodni').focus();
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
            background-color: #3498db;
            font-weight: bold;
        }
        .sidebar-mini > div .probando {
            background-color: white !important;
            color: black !important;
        }
        .nav-link {
            padding-right: 1rem;
            padding-left: 1rem;
        }
        . .nav-link {
            height: 2.5rem;
            position: relative;
        }
    </style>
</body>

</html>