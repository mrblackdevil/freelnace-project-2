<?php

$recepient = "info@avto.malina";
$sitename = "АВТОМАЛИН - Дистрибьютер автозапчастей №1 в Минске";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$email = trim($_GET["email"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nEmail: $email";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");