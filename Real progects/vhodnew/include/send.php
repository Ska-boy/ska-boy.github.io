<?php
		$to = 'info@nashdom-rf.ru';
		$subject = 'Заполнена форма с сайта Бюро переводов';
		$from_title = 'Заполнена форма с сайта Бюро переводов';
		$from_mail = 'info@nashdom-rf.ru';
		
		$tema = '';
		$comment = '';
		$speed = '';
		$type = '';
		$rayon = '';
		$fio = '';
		
		$name = $_POST['name'];
		$tel = $_POST['tel'];
		$tema = $_POST['tema'];
		$comment = $_POST['comment'];
		$speed = $_POST['speed'];
		$type = $_POST['type'];
		$rayon = $_POST['rayon'];
		$fio = $_POST['fio'];


		$message ='
		<html>
			<head>
				<title>'.$subject.'</title>
            </head>
			<body>
				<p>Имя: '.$name.'</p>
				<p>Телефон: '.$tel.'</p>                     
				<p>Тематика вопроса: '.$tema.'</p>                     
				<p>Комментарий: '.$comment.'</p>                     
				<p>Скорость: '.$speed.'</p>
				<br>
				<p>Нотариус: '.$type.'</p>
				<p>Район: '.$rayon.'</p>                     
				<p>Фио: '.$fio.'</p>                     
      </body>
    </html>';
		
        $headers = "From: ".$from_title." <".$from_mail.">\r\n";
        $headers .= "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject , $message, $headers);
?>





