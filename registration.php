<?php

include_once ('PDO_Config.php');
include('constants.php');

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    var_dump($json);exit;
}

?>