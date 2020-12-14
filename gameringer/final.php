<?php
$to = 'gameringer.2020.noit@gmail.com';
$name = @trim(stripslashes($_POST['name']));
$from = @trim(stripslashes($_POST['email']));
$subject = @trim(stripslashes($_POST['gameName']));
$message = @trim(stripslashes('Описание: ' . $_POST['gameDescription'] . "\r\n" . 'Хиперлинк: ' 
. $_POST['link'] . "\r\n" . 'Технологии: ' . $_POST['technologies'] . "\r\n" . 'Мнение за сайта: ' . $_POST['opinion']));


$headers   = '';
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1" . "\r\n";
$headers .= "From: {$name} <{$from}>" . "\r\n";
$headers .= "Reply-To: <{$from}>" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

mail($to, $subject, $message, $headers);
header("Location:http://gameringer.arven.eu/unit_12.html");

exit;