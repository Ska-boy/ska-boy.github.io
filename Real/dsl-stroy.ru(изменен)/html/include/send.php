<?php
	  $to = 'pks@diesel.ru';
    $subject = 'Заполнена форма с сайта Дизель строй';
		$from_title = 'Заполнена форма с сайта Дизель строй';
		$from_mail = 'test@admin.ru';


		$message ='
		<html>
			<head>
				<title>'.$subject.'</title>
            </head>
			<body>
				<p>Имя: '.$_POST['name'].'</p>
				<p>Телефон: '.$_POST['tel'].'</p>                     
      </body>
    </html>';
		
        $headers = "From: ".$from_title." <".$from_mail.">\r\n";
        $headers .= "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject , $message, $headers);
?>





