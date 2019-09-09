"use strict";

/* Ajax Form Plugin V 1.0.1
 * Send contact and newsletter form data to a server and waiting for its response.
 * Compatible with jqery validator plugin
 */

(function ($) {

	$.fn.initForm = function (options) {
		var settings = $.extend({
			type: 'post',
			serverUrl: 'C:/xampp/htdocs/Portfolio/mail.php',
			successClean: this.find('.form-success-clean'),
			successGone: this.find('.form-success-gone'),
			successInvisible: this.find('.form-success-invisible'),
			successVisible: this.find('.form-success-visible'),
			textFeedback: this.find('.form-text-feedback'),
		}, options);
		
		var $ajax = {
			sendRequest: function (p) {
				var form_fill = $(p);

				// Get the form data.
				var form_inputs = form_fill.find(':input');
				var form_data = {};
				form_inputs.each(function () {
					form_data[this.name] = $(this).val();
				});
				var url = "./mail.php"; // the script where you handle the form input.
				$.ajax(
					{
						/*
						 *Your Ajax Server Here, 
						 * use internal url (such as './ajaxserver/server.php') or 
						 * external URL such as:  url: 'http://www.example.com/avenir/ajaxserver/server.php'
						 * depending to your requirements
						 */
						type: "POST",
						url: url,
						data: form_data,
						dataType: 'JSON',

						/* CALLBACK FOR SENDING EMAIL GOEAS HERE */
						success: function(response){
							//Ajax connexion was a success, now handle response
							
								// Hide for if no error
								settings.textFeedback.html('Request sent successfully.');
								console.log('Request sent successfully');
								var len = response.length;
            					for(var i=0; i<len; i++){
//                					var id = response[i].from;
									console.log(response[i].from);
									console.log(response[i].to);
									console.log(response[i].sub);
									console.log(response[i].body);
									console.log(response[i].res);
								}
								e.preventDefault();
						
						},
						/* show error message */
						error: function (jqXHR, textStatus, errorThrown, response) {
							//ajax error							
							settings.textFeedback.html('Error when sending request2.');
							console.log(jqXHR);

						}
						/* END EMAIL SENDING CALLBACK */
					});
			}

		};


		//if jquery validator plugin is enable, use it	
		if (jQuery.validator) {
			jQuery.validator.setDefaults({
				success: "valid"
			});
			this.validate({
				rules: {
					field: {
						required: true,
						email: true
					}
				}
			});
		}



		this.submit(function (event) {
			// prevent default submit
			console.log('Send request');
			event.preventDefault();
			// use jquery validator plugin if it is enabled
			if (jQuery.validator) {
				if ($(this).valid()) {
					$ajax.sendRequest(this);
				}
			}
			else {
				$ajax.sendRequest(this);
			}
		});

	};

}(jQuery));

/* End of ajax */


// Make them as plugin
