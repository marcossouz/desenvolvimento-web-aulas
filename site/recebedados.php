<?php

$tipo =  $_POST['tipoUser'];
$usuario = $_POST['user'];
$senha = $_POST['pass'];
$opiniao = $_POST['opiniao'];
$faixaEtaria = "";

if(isset($_POST['faixaEtaria1'])){
    global $faixaEtaria;
    $faixaEtaria = $_POST['faixaEtaria1'];
} else if (isset($_POST['faixaEtaria2'])){
    global $faixaEtaria;
    $faixaEtaria = $_POST['faixaEtaria2'];
} else if (isset($_POST['faixaEtaria3'])){
    global $faixaEtaria;
    $faixaEtaria = $_POST['faixaEtaria3'];
} else if (isset($_POST['faixaEtaria4'])){
    global $faixaEtaria;
    $faixaEtaria = $_POST['faixaEtaria4'];
}

echo json_encode( 
    array( 
        "usuario" => $usuario, 
        "senha" => $senha,
        "tipoUser" => $tipo,
        "opiniao" => $opiniao,
        "faixaEtaria" => $faixaEtaria
    ) 
);