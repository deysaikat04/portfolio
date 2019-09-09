<?php
if(isset($_POST['submit_message']))
{
	$to      = 'dsaikat378@gmail.com';
	$subject = 'the subject';
	$message = 'hello';
	$headers = array(
			'From' => 'webmaster@example.com',
			'Reply-To' => 'webmaster@example.com'
			'X-Mailer' => 'PHP/' . phpversion()
	);

	mail($to, $subject, $message, $headers);
}
?>