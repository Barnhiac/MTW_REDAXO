$(document).ready(function() {
	$(document).ready(function() {
	var count = $('.gallery_inner img').length;
	for (var i = 0; i <= count; i++) {
			$('.gallery_inner img:nth-child(' + i + ')').clone().appendTo($('.images')).addClass('slide');
		}

	var index = 0;

	var counter = 0;

	$('.gallery_inner img').click(function() {
		index = $(this).index();
		counter = index + 1;
		
		$('.active').fadeOut(500, function() {
			$('.active').removeClass('active');
		});

		$('.images img:nth-child(' + counter + ')').addClass('active');

		$('.images img:nth-child(' + counter + ')').ready(function() {
			$('.images img:nth-child(' + counter + ')').fadeIn(1, function() {

				var width = $('.images img:nth-child('+counter +')').width();
				var height = $('.images img:nth-child('+ counter + ')').height();
				$('.gallery_container').css('height', height);

				var galleryWidth = $('.gallery_container').width();

				if($('.gallery_outer').css('display') == 'none') {
					$('.gallery_outer').fadeIn(100);
				};

				if (galleryWidth == 1) {
					$('.gallery_container').animate({'width': width}, 500);
					
				};

				if( $('.pfeil').css('display') == 'none') {
					$('.pfeil').fadeIn(800);
				}

		
			});
			
			$('.gallery').css('display', 'block');
			
		});

		console.log(index);

	})

	$('.pfeilRechts').click(function() {
		if (counter < count) {
			$('.images img:nth-child(' + counter + ')').fadeOut(500, function() {
				$('.active').removeClass('active');
			});

			counter++;

			$('.images img:nth-child('+ counter+')').fadeIn(500, function() {
				$('.images img:nth-child(' + counter + ')').addClass('active');
			});
		} else if (counter == count) {
			$('.images img:nth-child(' + counter + ')').fadeOut(500, function(){
				$('.active').removeClass('active');
			});

			counter = 1;

			$('.images img:nth-child(' + counter + ')').fadeIn(500, function() {
				$('.images img:nth-child(' + counter + ')').addClass('active');
			})
		}
	});	

	$('.pfeilLinks').click(function() {
		if (counter == 0 || counter == count) {
				$('.images img:nth-child(' + count + ')').fadeOut(500, function() {
					$('.active').removeClass('active');
				});

				counter = count - 1;
				$('.images img:nth-child(' + counter + ')').fadeIn(500, function() {
					$('.imagesimg:nth-child(' + counter + ')').addClass('active');
				});	
			} else if (counter == 1) {
				$('.images img:nth-child(' + counter + ')').fadeOut(500, function() {
					$('.active').removeClass('active');
				});
				counter = count;
				$('.images img:nth-child(' + counter + ')').fadeIn(500, function() {
					$('.images img:nth-child(' + counter + ')').addClass('active');
				})
				console.log(counter);
			} else {
				$('.active').removeClass('active');
				$('.images img:nth-child(' + counter + ')').fadeOut(500);

				counter--;

				$('.images img:nth-child(' + counter + ')').fadeIn(500, function() {
					$('.images img:nth-child(' + counter + ')').addClass('active');
				});
			}
	});

	$('.gallery_outer').click(function() {
		$('.gallery_outer').fadeOut(500);
		$('.gallery').fadeOut(500);
		$('.active').removeClass('active');
		for (var j = 1; j <= count; j++) {
			$('.images img:nth-child(' + j + ')').css('display', 'none');
		}
		index = 0;
	})


});
});