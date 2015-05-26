<?php

include_once ('PDO_Config.php');
include_once ('constants.php');

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    $operation = $obj['operation'];

    if($operation == 'login'){
        $login = $obj['userName'];
        $password = $obj['userPass'];

        $userInfo = $pdo->prepare('SELECT * FROM Users WHERE login= :login AND password=:password');
        $userInfo->execute(array('login'=> $login,
                                 'password' => $password));
        $user = $userInfo->fetchAll(PDO::FETCH_ASSOC);

        if($user){
            echo json_encode($user);exit;
        }else{
            echo json_encode(array('error'=> LOGIN_ERROR_MSG));exit;
        }
    }
}

?>