<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$postjson = json_decode(file_get_contents('php://input'), true);

if($postjson['aksi']=="add_register"){
    //$password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO penjaga SET
        penjaga_fullname = '$postjson[penjaga_fullname]',
        penjaga_phone = '$postjson[penjaga_phone]',
        penjaga_username = '$postjson[penjaga_username]',
        penjaga_password = '$postjson[penjaga_password]'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
} 

elseif($postjson['aksi']=="login"){
    //$password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM penjaga WHERE penjaga_username = '$postjson[penjaga_username]' AND penjaga_password = '$postjson[penjaga_password]'");
    $check = mysqli_num_rows($query);

    if($check>0){
        $data = mysqli_fetch_array($query);
        $datauser = array(
            'penjaga_id' => $data['penjaga_id'],
            'penjaga_fullname' => $data['penjaga_fullname'],
            'penjaga_phone' => $data['penjaga_phone'],
            'penjaga_username' => $data['penjaga_username'],
            'penjaga_password' => $data['penjaga_password']
        );

        if($query) $result = json_encode(array('success'=>true, 'result'=> $datauser));
        else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    } else{
        
        $result = json_encode(array('success'=>false, 'msg'=>'unregister account'));
    }
   
    echo $result;
} 