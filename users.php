<?php

include_once ('PDO_Config.php');
//
if($_SERVER['REQUEST_METHOD'] == 'PUT') {
    echo "this is a put request\n";
    parse_str(file_get_contents("php://input"),$post_vars);
//    echo $post_vars['fruit']." is the fruit\n";
//    echo "I want ".$post_vars['quantity']." of them\n\n";
    var_dump($post_vars);
}
if($_SERVER['REQUEST_METHOD'] == 'GET') {
    $userList = $pdo->prepare('SELECT * FROM Users WHERE id!= :id');
    $userList->execute(array('id'=> 1));
    $users = $userList->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
}
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $Fname = $obj['Fname'];
    $Lname = $obj['Lname'];
    $Age = $obj['Age'];
    
    //todo Use prepeare statement in PDO insert
    $result = $pdo->exec("INSERT INTO Users (Fname, Lname, Age) VALUES('$Fname', '$Lname', '$Age')");

}

?>