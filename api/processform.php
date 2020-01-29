<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");

if (empty($_POST['name']) && empty($_POST['phone']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$name = $_POST['name'];
	$to = "kay@dispostable.com";
	$from = $_POST['email'];

	// data

	$msg = $_POST['name'] . $_POST['phone'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $name, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{
	// tell the user about error
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>