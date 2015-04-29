<?php

include_once ('PDO_Config.php');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
//    print_r($_POST);exit;
//     $data = json_decode(file_get_contents('http://localhost/www/Backbone/#/new'), true);
}
//print_r($data);exit;
$allowed = array("Fname","Lname","Age"); // allowed fields
$sql = "INSERT INTO Users SET ".pdoSet($allowed,$values);
$stm = $pdo->prepare($sql);
$stm->execute($values);