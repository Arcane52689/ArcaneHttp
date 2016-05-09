<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
$data = array('name'=>'me');
echo json_encode($data);
?>