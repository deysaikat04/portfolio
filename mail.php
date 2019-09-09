<?php

    
		
	$from = $_POST["email"];
    $to = 'hello@saikatdey.cf';
    $subject = 'Query to Saikat Dey from '.$_POST["name"];
    $body = $_POST["message"];
	
    if(mail($to,$subject,$body,$from)){
       $res = 'Thanks for your message!';
    } else {
        $res = 'E-mail delivery failure!';
    }
			
	$return_arr[] = array("from" => $from,
                    	   "to" => $to,
						  "sub" => $subject,
						  "body" => $body,
						  "res" => $res);
    // Encoding array in JSON format
    echo ($res);

?>