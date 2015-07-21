$(document).ready(function() {
	"use strict";
	
	var top = $('ul.dropdown').height();
	var width = $(window).width();
	$(window).ready(function() {
		headerSetup(width);
		if (width > 768) {
			$(window).scroll(function() {
				headerScroll(top);
			});
		}
		
	});
	
	
	$(window).resize(function() {
		width = $(this).width();
		headerSetup(width);
		if (width > 768) {
			$(window).scroll(function() {
				headerScroll(top);
			});
		}
		
	});
	
	$('ul li.hamburger img').click(function() {
		var dropdown = $('ul.dropdown');
		if(dropdown.hasClass('collapsedList')) {
			$('ul.dropdown').removeClass('collapsedList').css('top', '40px');
		} else {
			$('ul.dropdown').addClass('collapsedList');
		}
		
	});
	
	
	$('ul.dropdown a').click(function() {
		if(!$('ul li.hamburger img').hasClass('hidden')) {
			$('ul.dropdown').addClass('collapsedList');
		}
	});
	
	function headerSetup(width) {
		if(width > 768) {
			$('ul li.hamburger img').addClass('hidden');
			$('ul.dropdown').removeClass('collapsedList');
			$('header').removeClass('headerScroll');
			$('img.logo').removeClass('smallLogo');

			
		} else if(width <= 768) {
			$('ul li.hamburger img').removeClass('hidden');
			$('ul.dropdown').addClass('collapsedList');
			$('header').addClass('headerScroll');
			$('img.logo').addClass('smallLogo');	
		}
	}
	
	function headerScroll(top) {
		if($(window).scrollTop() >= top) {
					$('ul li.hamburger img').removeClass('hidden');
					$('ul.dropdown').addClass('collapsedList');
					$('header').addClass('headerScroll');
					$('img.logo').addClass('smallLogo');	
				} else {
					$('ul li.hamburger img').addClass('hidden');
					$('ul.dropdown').removeClass('collapsedList');
					$('header').removeClass('headerScroll');
					$('img.logo').removeClass('smallLogo');	
				}
	}
	
});