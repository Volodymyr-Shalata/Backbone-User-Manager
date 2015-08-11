<?php

$dsn = "mysql:host=localhost;dbname=Users";
$user = "root";
$pass = "";
$pdo = new PDO($dsn, $user, $pass);

function pdoSet($fields, &$values, $source = array()) {
  $set = '';
  $values = array();
  if (!$source) $source = &$_POST;
  foreach ($fields as $field) {
    if (isset($source[$field])) {
      $set.="`".str_replace("`","``",$field)."`". "=:$field, ";
      $values[$field] = $source[$field];
    }
  }
  return substr($set, 0, -2); 
}