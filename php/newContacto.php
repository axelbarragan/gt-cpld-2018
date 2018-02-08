<?php
/*
Archivo de contacto para enviar datos mediante correo
*/

require('PHPMailer-master/PHPMailerAutoload.php');
include_once('funciones.php');

$estado = 1;

switch ($estado) {
	case '0':
	$datos = array();
	foreach ($_POST as $clave=>$valor) {
		$datos[] = $valor;
	}
    $respuesta = array("respuesta" => 'mal', "res" => $datos);
    echo json_encode($respuesta);
    break;

    case '1':
    $ipWeb = obtenerIP();
    $datos = array();
    foreach ($_POST as $clave=>$valor) {
      $datos[] = $valor;
  }
  $mail = new PHPMailer;
    //$mail->SMTPDebug = 3;                               // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.carreraporlosdioses.com.mx';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'sendermailcontact@carreraporlosdioses.com.mx';                 // SMTP username
    $mail->Password = 'HvWfdbS!0NQ#';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to
    $mail->setFrom('sendermailcontact@carreraporlosdioses.com.mx', 'CPLD2018');
    $mail->addAddress('carreraporlosdiosesteotihuacan@gmail.com', 'CPLD2018');     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('sendermailcontact@carreraporlosdioses.com.mx');
    //$mail->addBCC('bcc@example.com');
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Nuevo correo de contacto';
    $mail->Body    = 'Se ha recibido un nuevo mensaje de contacto de la pagina CARRERAPORLOSDIOSES.COM.MX<br>
    <b>Nombre:</b> '.$datos[0].'<br>
    <b>Correo:</b> '.$datos[1].'<br>
    <b>Mensaje:</b> '.$datos[2].'<br>
    <b>IP</b> '.$ipWeb.'<br>';
    $mail->AltBody = 'Se ha recibido un nuevo mensaje de contacto de la pagina CARRERAPORLOSDIOSES.COM.MX
    Nombre: '.$datos[0].'
    Correo: '.$datos[1].'
    Mensaje: '.$datos[2].'
    IP: '.$ipWeb.'<br>';
    $mail->CharSet = 'UTF-8';
    if(!$mail->send()) {
    	$respuesta = array("respuesta" => 'mal', "res" => 'Envio de correo no posible: '.$mail->ErrorInfo);
    	echo json_encode($respuesta);
    } else {
    	$respuesta = array("respuesta" => 'bien', "res" => 'Mensaje enviado!');
    	echo json_encode($respuesta);
    }
    break;
}


?>