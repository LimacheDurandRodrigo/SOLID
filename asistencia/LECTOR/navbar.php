<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>QR Code | Log in</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="text/javascript" src="js/instascan.min.js"></script>
    
    <!-- DataTables -->
    <link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">




    <style>
		
		
		#menu{
			background-color: #000;

		}

		#menu ul{
			list-style: none;
			margin: 0;
			padding: 0;
		}

		#menu ul li{
			display: inline-block;
		}

		#menu ul li a{
			color: white;
			display: block;
			padding: 20px 20px;
			text-decoration: none;
		}

		#menu ul li a:hover{
			background-color: #4a012b;
		}

		.item-r{
			float: right;
		}
	</style>






<body>


<!-- Navbar -->
 <nav id="menu" class="navbar" style="background:#6f06d1;color:#FF0000;">
      <div class="container-fluid">
      <div class="navbar-header">
        <a style="color:#FFFFFF;" class="navbar-brand" href="../index.php"> <i class="glyphicon glyphicon-qrcode"></i>  Inicio</a>
      </div>
    <ul style="color:#FFFFFF;" class="nav navbar-nav">
        <li class="active"><a href="../dashboard.php"><span style="color:#FFFFFF;" class="glyphicon glyphicon-home"></span> Home</a></li>
        <li class="active"><a href="logout.php"><span style="color:#FFFFFF;" class="glyphicon glyphicon-home"></span> Salir del sistema</a></li>
        <li class="active"><a href="lector_salida.php"><span style="color:#FFFFFF;" class="glyphicon glyphicon-home"></span> Lector salida</a></li>
        <li class="active"><a href="lector.php"><span style="color:#FFFFFF;" class="glyphicon glyphicon-home"></span> Lector Entrada</a></li>

      </ul>



       <ul class="nav navbar-nav navbar-right">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">

        <a style="color:#FFFFFF;" class="nav-link" data-toggle="dropdown" href="#">Usuario:
        <?php echo htmlentities($userresult->admin_name);?>
          <i span class="glyphicon glyphicon-user"></i>
        </a>

       
        
            <!-- Message End -->
          </a>
        </div>
      </li>


    </ul>



      </div>
    </nav>
  <!-- /.navbar -->

  