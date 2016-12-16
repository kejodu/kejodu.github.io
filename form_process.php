<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail']; 
$userMessage = $_POST['userMessage']; 

$to = "kevindunn_@hotmail.com";
$subject = "New Message";

mail ($to, $subject, $userMessage, "From: " . $userName);
echo "Your message has been sent"; 
?>