$(document).ready(function(){

	$("#submit").click(function(e){
		var name = $("#cf-name").val();
		var email = $("#cf_email").val();
		var message = $("#cf-message").val();
		// Returns successful data submission message when the entered information is stored in database.
		var dataString = 'name='+ name + '&email='+ email + '&message='+ message;
		e.preventDefault();
		if(name==''||email==''||message=='')
		{
			$('#msg').html("Please fill all the fields.").fadeIn('slow');			
			$('#msg').delay(3000).fadeOut('slow');

		} else	{
		// AJAX Code To Submit Form.
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: dataString,
				cache: false,
				success: function(result){
					$("#cf-name").val('');
					$("#cf-email").val('');
					$("#cf-message").val('');
					 $('#msg').html(result).fadeIn('slow');
				     //$('#msg').html("data insert successfully").fadeIn('slow') //also show a success message 
				     $('#msg').delay(3000).fadeOut('slow');
				},
				/* show error message */
				error: function (jqXHR, textStatus, errorThrown, response) {
					//ajax error	
					console.log(jqXHR);
				}
						/* END EMAIL SENDING CALLBACK */
			});
		}
		return false;
	});
});