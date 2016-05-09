<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
$data = array('name'=>'me');
// var_dump($data);
echo json_encode($data);
// echo json_last_error_msg();
?>