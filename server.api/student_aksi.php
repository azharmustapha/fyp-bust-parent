<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$postjson = json_decode(file_get_contents('php://input'), true);

if($postjson['aksi']=="add_studentregis"){
    $query = mysqli_query($mysqli, "INSERT INTO pelajar SET
        pelajar_nama = '$postjson[pelajar_nama]',
        pelajar_id = '$postjson[pelajar_id]',
        sekolah_nama = '$postjson[sekolah_nama]',
        full_name = '$postjson[full_name]',
        penjaga_phone = '$postjson[penjaga_phone]'

    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
} 

elseif($postjson['aksi']=="get_user"){
    $query = mysqli_query($mysqli, "SELECT * FROM pelajar WHERE full_name = 'Azhar Mustapha' ORDER BY pelajar_id DESC");

    while($row = mysqli_fetch_array($query)){

        $data[] = array(
            'pelajar_nama' => $row['pelajar_nama'],
            'pelajar_id' => $row['pelajar_id'],
            'sekolah_nama' => $row['sekolah_nama'],
            'full_name' => $row['full_name'],
            'penjaga_phone' => $row['penjaga_phone'],

        );
    }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
} 

elseif($postjson['aksi']=="get_datasingle"){
    $data = array();
    $query = mysqli_query($mysqli, "SELECT * FROM pelajar WHERE pelajar_id = '$postjson[pelajar_id]'");

    while($row = mysqli_fetch_array($query)){

        $data[] = array(
            'pelajar_id' => $row['pelajar_id'],
            'pelajar_nama' => $row['pelajar_nama'],
            'sekolah_nama' => $row['sekolah_nama'],
            'full_name' => $row['full_name'],
            'penjaga_phone' => $row['penjaga_phone'],

        );
    }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));

    echo $result;
} 