$(function() {
	var form = $('#ajax-contact');

	var formMessages = $('#form-messages');

	$(form).submit(function(event) {
		event.preventDefault();
		var formData = $(form).serialize();

		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})

		.done(function(response) {
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');


			$(formMessages).text(response);

			$('#name').val('');
			$('#email').val('');
			$('#nachricht').val('');
		})

		.fail(function(data) {
    	// Make sure that the formMessages div has the 'error' class.
    	$(formMessages).removeClass('success');
    	$(formMessages).addClass('error');

    	// Set the message text.
    	if (data.responseText !== '') {
        	$(formMessages).text(data.responseText);
    	} else {
        	$(formMessages).text('Oh nein! Ihre Nachricht wurde nicht versandt!');
    	}
});


	}


})