<?php
if (!isset($_POST['phone3']) or empty($_POST['phone3'])) {
    $error1 = "Заполните поле Телефон<br />";
} else $error1 = NULL;

if (empty($error1)) {
    $subject  = "Заявка сайт - Адвокат";
    $name     = strip_tags($_POST['phone3']);
	$msk = strip_tags($_POST['msk']);
	$headers  = 'Content-type: text/html; charset=utf-8' . "\r\n"; 
    $message  = "{$msk} Адвокат. Телефон: {$name} ";
	
		include "smsc_api.php";
		$number="79093178816";
		
		send_sms($number, $message, 0, 0, 0, 0, XXX);
	
    if (mail("00010009@bk.ru", $subject, $message, $headers)) {
		//SMS отправка
	
	
	//Конец SMS       

        echo "";
    } else echo "Ошибка!"; 
} else {
    echo $error1;
}
?>