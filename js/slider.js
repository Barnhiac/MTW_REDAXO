		$(document).ready(function() {
		
		var count = $('.carousel_inner img').length;
		console.log(count);
		

		var counter = 1;

		for (var i = 0; i <= count; i++) {
			$('.carousel_inner img:nth-child(' + i + ')').clone().removeClass('slide').removeClass('active').appendTo($('.previewGallerie'));
		}


		$('.previewGallerie img:nth-child(' + counter + ')').addClass('currentPic');

		$('.pfeilRechts').click(function() {
			if (counter < count) {
				$('.carousel_inner img:nth-child(' + counter + ')').fadeOut(500, function() {
					$('.active').removeClass('active');	
				});

				counter++ 

				$('.carousel_inner img:nth-child(' + counter + ')').fadeIn(500, function() {
					$('.carousel_inner img:nth-child(' + counter + ')').addClass('active');
				})
			} else if (counter == count) {
				$('.carousel_inner img:nth-child(' + counter + ')').fadeOut(500, function() {
					$('.active').removeClass('active');
				});

				counter = 1;

				$('.carousel_inner img:nth-child(' + counter + ')').fadeIn(500, function() {
					$('.carousel_inner img:nth-child(' + counter + ')').addClass('active');
				})
				
				
			}
			
			
			$('.currentPic').removeClass('currentPic');
			$('.previewGallerie img:nth-child(' + counter + ')').addClass('currentPic');
		});

		$('.pfeilLinks').click(function() {
			if (counter == 0 || counter == count) {
				$('.carousel_inner img:nth-child(' + count + ')').fadeOut(500, function() {
					$('.active').removeClass('active');
				});

				counter = count - 1;
				$('.carousel_inner img:nth-child(' + counter + ')').fadeIn(500, function() {
					$('.carousel_inner img:nth-child(' + counter + ')').addClass('active');
				});	
			} else if (counter == 1) {
				$('.carousel_inner img:nth-child(' + counter + ')').fadeOut(500, function() {
					$('.active').removeClass('active');
				});
				counter = count;
				$('.carousel_inner img:nth-child(' + counter + ')').fadeIn(500, function() {
					$('.carousel_inner img:nth-child(' + counter + ')').addClass('active');
				})
				console.log(counter);
			} else {
				$('.active').removeClass('active');
				$('.carousel_inner img:nth-child(' + counter + ')').fadeOut(500);

				counter--;

				$('.carousel_inner img:nth-child(' + counter + ')').fadeIn(500, function() {
					$('.carousel_inner img:nth-child(' + counter + ')').addClass('active');
				});
			}

			$('.currentPic').removeClass('currentPic');
			$('.previewGallerie img:nth-child(' + counter + ')').addClass('currentPic');

		});

		$('.previewGallerie img').click(function() {
			var index = $('.previewGallerie img').index(this) + 1;
			$('.currentPic').removeClass('currentPic');
			$('.active').fadeOut(500, function() {
				$('.active').removeClass('active');
				
			});

			$('.previewGallerie img:nth-child(' + index + ')').addClass('currentPic');
			$('.carousel_inner img:nth-child(' + index + ')').fadeIn(500, function() {
				$('.carousel_inner img:nth-child(' + index + ')').addClass('active');

			});

			counter = index;
		});


		$(window).resize(function() {
			var height = $('.carousel_inner img:nth-child(' + counter + ')').height();
			$('.carousel_inner').css('height', height);
		});
		
	
			

	});