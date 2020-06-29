<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$postjson = json_decode(file_get_contents('php://input'), true);

if($postjson['aksi']=="get_attendance"){
    $query = mysqli_query($mysqli, "SELECT * FROM jadual ORDER BY scan_time ASC");

    while($row = mysqli_fetch_array($query)){

        $data[] = array(
            'jadual_id' => $row['jadual_id'],
            'scannedCode' => $row['scannedCode'],
            'scan_time' => $row['scan_time'],

        );
    }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));

    echo $result;
} 