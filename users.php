<?php

include_once ('PDO_Config.php');

if($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $put_data = file_get_contents("php://input");
    $put_data = json_decode($put_data,true);

    $Fname = $put_data['Fname'];
    $Lname = $put_data['Lname'];
    $Age = $put_data['Age'];
    $id = $put_data['id'];
    $role = $put_data['role'];

    $userInfo = $pdo->prepare('UPDATE Users SET Fname = ?, Lname = ?, Age = ?, role = ? WHERE id = ?');
    $userInfo->execute(array($Fname, $Lname, $Age, $role, $id));
    echo json_encode(array("status"=> "OK"));
}

if($_SERVER['REQUEST_METHOD'] == 'GET') {
    $url = explode('/',$_SERVER['REQUEST_URI']);
    //todo rewrite this check
    if(count($url) == 5){
        $id = $url[count($url)-1];
        $userInfo = $pdo->prepare('SELECT * FROM Users WHERE id= :id');
        $userInfo->execute(array('id'=> $id));
        $user = $userInfo->fetchAll(PDO::FETCH_ASSOC);
        $rolesList = $pdo->query(" SELECT COLUMN_TYPE
                             FROM information_schema.`COLUMNS`
                             WHERE TABLE_NAME = 'Users'
                                   AND COLUMN_NAME = 'role'")->fetchAll(PDO::FETCH_COLUMN);
        preg_match("/^enum\(\'(.*)\'\)$/", $rolesList[0], $matches);
        $roles = explode("','", $matches[1]);
        $return_array = array('userInfo'=> $user, 'roles'=>$roles );
        echo json_encode($return_array);
    }else{
        $userList = $pdo->prepare('SELECT * FROM Users WHERE id!= :id');
        $userList->execute(array('id'=> 1));
        $users = $userList->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
    }
}
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $Fname = $obj['Fname'];
    $Lname = $obj['Lname'];
    $Age = $obj['Age'];
    
    //todo Use prepeare statement in PDO insert
    $result = $pdo->exec("INSERT INTO Users (Fname, Lname, Age) VALUES('$Fname', '$Lname', '$Age')");
//    header("HTTP/1.1 200 OK");
//    exit;
    header("HTTP/1.1 200 OK");
    echo json_encode(array("status"=> "OK"));

}
if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    //$json = file_get_contents('php://input');
    //$obj = json_decode($json,true);
    $url = explode('/',$_SERVER['REQUEST_URI']);
    $id = $url[count($url)-1];

    $sql = "DELETE FROM Users WHERE id =  :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    header("HTTP/1.1 200 OK");
    echo json_encode(array("status"=> "OK"));

}

?>