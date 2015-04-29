<?php

include_once ('PDO_Config.php');

$userList = $pdo->prepare('SELECT * FROM Users WHERE id!= :id');
$userList->execute(array('id'=> 1));
$users = $userList->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($users);