<?php
$to = 'gameringer.2020.noit@gmail.com';
$name = @trim(stripslashes($_POST['name']));
$from = @trim(stripslashes($_POST['email']));
$topic = @trim(stripslashes($_POST['topic']));
$message = @trim(stripslashes($_POST['message']));


$headers   = '';
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1" . "\r\n";
$headers .= "From: {$name} <{$from}>" . "\r\n";
$headers .= "Reply-To: <{$from}>" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

mail($to, $topic, $message, $headers);
header("Location:http://gameringer.arven.eu#contacts");

exit;