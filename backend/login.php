<?php

include_once ('PDO_Config.php');
include_once ('constants.php');

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    $operation = $obj['operation'];

    if($operation == 'login'){
        $user = "";
        $login = $obj['userName'];
        $password = $obj['userPass'];

        $userInfo = $pdo->prepare('SELECT * FROM Users WHERE login= :login AND password=:password');
        $userInfo->execute(array('login'=> $login,
                                 'password' => $password));
        $user = $userInfo->fetchAll(PDO::FETCH_ASSOC);

        $userInfo = array();
        if($user){
             $userInfo = array("userName" => $user[0]['login'],
                 "id"=> $user[0]['id'],
                 "firstName" => $user[0]['Fname'],
                 "lastName" => $user[0]["Lname"],
                 "role" => $user[0]["role"],
                 "is_loged_in"=> 1);
             $userInfo['error'] = "";
        }else{
             $userInfo["error"] = LOGIN_ERROR_MSG;
        }

        echo json_encode($userInfo);exit;
    }
}

?>