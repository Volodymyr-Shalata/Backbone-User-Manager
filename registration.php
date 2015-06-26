<?php

include_once ('PDO_Config.php');
include('constants.php');

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $reg_data = json_decode(file_get_contents('php://input'),true);

    //var_dump($reg_data);exit;

    $first_name = $reg_data['first_name'];
    $last_name = $reg_data['last_name'];
    $password = $reg_data['password'];
    $email = $reg_data['email'];
    $age = $reg_data['age'];

    $result = $pdo->exec("INSERT INTO Users (Fname, Lname, Age) VALUES('$first_name', '$last_name', '$age')");

}

?>