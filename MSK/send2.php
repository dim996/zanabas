<?php
if (!isset($_POST['phone2']) or empty($_POST['phone2'])) {
    $error2 = "Заполните поле Телефон<br />";
} else $error2 = NULL;

if ( empty($error2)) {
    $subject  = "Заявка сайт - Адвокат";
    $name     = $_POST['text2'];
	$phone    = $_POST['phone2'];
	$msk = strip_tags($_POST['msk']);
	$headers  = 'Content-type: text/html; charset=utf-8' . "\r\n"; 
    $message  = "{$msk} Адвокат. Текст вопроса: {$name}, телефон: {$phone} ";
	
	 	include "smsc_api.php";
		$number="79093178816";
		
		send_sms($number, $message, 0, 0, 0, 0, XXX);
	
    if (mail("00010009@bk.ru", $subject, $message, $headers)) {
		//SMS отправка
	//	include "smsc_api.php";
	//	$number="79093160060";
		
		//send_sms($number, $message2, 0, 0, 0, 0, XXX);
//		list($sms_id, $sms_cnt, $cost, $balance) = send_sms($number, $message, 0, 0, 0, 0, false, "maxsms=999");
	
	//Конец SMS       

        echo "";
    } else echo "Ошибка!"; 
} else {
    echo $error2;
}
?>