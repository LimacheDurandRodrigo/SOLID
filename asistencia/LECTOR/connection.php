<?php
$con  = mysqli_connect('localhost','root','','qrcodedb');
if(mysqli_connect_errno())
{
    echo 'Database Connection Error';
}
