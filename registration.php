<?php

include_once ('PDO_Config.php');
include('constants.php');

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo json_encode(array('registr'=>''success));
}

?>