<?php
    
	require 'r_conexion.php';

    if($conn->connect_error){
        die("Connection failed" .$conn->connect_error);
    }

    if(isset($_POST['studentID'])){

        
        $studentID =$_POST['studentID'];
        date_default_timezone_set('America/Lima');
		$date = date('Y-m-d');
		$date2 = date('Y/m/d');
		$time = date('H:i:s A');
		$salida = "SALIDA";

		$sql = "SELECT * FROM student WHERE STUDENTID = '$studentID'";
		$query = $conn->query($sql);

		if($query->num_rows < 1){
			$_SESSION['error'] = 'No se puede encontrar el número QRCode '.$studentID;
		}else{
				$row = $query->fetch_assoc();
				$id = $row['STUDENTID'];
				$sql ="SELECT * FROM attendance WHERE STUDENTID='$id' AND LOGDATE='$date' AND STATUS='0'";
				$query=$conn->query($sql);
				if($query->num_rows>0){
				$sql = "UPDATE attendance SET TIMEOUT='$time', STATUS='1' WHERE STUDENTID='$studentID' AND LOGDATE='$date'";
				$query=$conn->query($sql);
				$_SESSION['success'] = 'Tiempo de espera exitoso: '.$row['FIRSTNAME'].' '.$row['LASTNAME'];
			}else{


					$sql = "INSERT INTO attendance(STUDENTID,TIMEIN,LOGDATE,STATUS,fecha,condicion) VALUES('$studentID','$time','$date','0','$date2','$salida')";
					if($conn->query($sql) ===TRUE){
					 $_SESSION['success'] = 'Tiempo exitoso en: '.$row['FIRSTNAME'].' '.$row['LASTNAME'];
			 }else{
			  $_SESSION['error'] = $conn->error;
		   }	
		}
	}

	}else{
		$_SESSION['error'] = 'Escanee su número de código QR';
}
header("location: lector_salida.php");
	   
$conn->close();
?>