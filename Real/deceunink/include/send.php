<?php
if((isset($_POST['phone_f'])&&$_POST['phone_f']!="")){ 
	
	    $to = "testorange@mail.ru";
        $subject = 'Заполнена форма с сайта DECEUNINK';
		$from_title = 'Заполнена форма с сайта DECEUNINK';
		$from_mail = "testorange@mail.ru";
		
		$message ='
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>Форма: '.$_POST['nameForm'].'</p>
					<p>Имя: '.$_POST['name_f'].'</p>
					<p>Телефон: '.$_POST['phone_f'].'</p>                                  
					
				</body>
			</html>';
		if((isset($_POST['option'])&&$_POST['option']!="")){
			$message ='
		<html>
			<head>
				<title>'.$subject.'</title>
            </head>
			<body>
				<p>Форма: '.$_POST['nameForm'].'</p>
				<p>Имя: '.$_POST['name_f'].'</p>
				<p>Телефон: '.$_POST['phone_f'].'</p>                     
				<p>Если "1", то клиент хочет получать новости: " '.$_POST['option'].' "</p>                     
				
         </body>
		</html>';
		} else if ((isset($_POST['option1'])&&$_POST['option1']!="")) {
			$message ='
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>Форма: '.$_POST['nameForm'].'</p>
					<p>Имя: '.$_POST['name_f'].'</p>
					<p>Телефон: '.$_POST['phone_f'].'</p>                     
					<p>Если "1", то клиент хочет получать новости: '.$_POST['option1'].'</p>                     
					
				</body>
			</html>';
		} else if ((isset($_POST['question_f'])&&$_POST['question_f']!="")) {
			$message ='
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>Форма: '.$_POST['nameForm'].'</p>
					<p>Имя: '.$_POST['name_f'].'</p>
					<p>Телефон: '.$_POST['phone_f'].'</p>                     
					<p>Вопрос: '.$_POST['question_f'].'</p>                     
					
				</body>
			</html>';
		} 
		
        $headers = "From: ".$from_title." <".$from_mail.">\r\n";
        $headers .= "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject , $message, $headers);
}
else{
	echo "error";
}
?>





