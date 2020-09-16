/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/
(function ( $ ) {

	$.fn.grtyoutube = function( options ) {

		return this.each(function() {

			// Get video ID
			var getvideoid = $(this).attr("youtubeid");

			// Default options
			var settings = $.extend({
				videoID: getvideoid,
				autoPlay: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autoPlay === true) { settings.autoPlay = 1 } else if(settings.autoPlay === false)  { settings.autoPlay = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'">'+
								'<div class="grtyoutube-popup-content">'+
									'<span class="grtyoutube-popup-close"></span>'+
									'<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/'+settings.videoID+'?rel=0&wmode=transparent&autoplay='+settings.autoPlay+'&iv_load_policy=3" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>'+
								'</div>'+
							'</div>');
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close, .grtyoutube-popup").click(function(){
					$(".grtyoutube-popup").remove();
				});
			});

			$(document).keyup(function(event) {
				if (event.keyCode == 27){
					$(".grtyoutube-popup").remove();
				}
			});
		});
	};

}( jQuery ));

$(".youtube-link").grtyoutube();



// On click scroll behaviors
$(".work").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".video-container").offset().top,
    },
    "slow"
  );
});

$(".arrow").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".video-container").offset().top,
    },
    "slow"
  );
});

$(".logo").click(function () {
	$("html,body").animate(
	  {
		scrollTop: $(".frontpage").offset().top,
	  },
	  "slow"
	);
  });

  $(".arrow-top").click(function () {
	$("html,body").animate(
	  {
		scrollTop: $(".frontpage").offset().top,
	  },
	  "slow"
	);
  });
  
  $(".about").click(function () {
	$("html,body").animate(
	  {
		scrollTop: $(".about-me").offset().top,
	  },
	  "slow"
	);
  });

// Formspree contact form
var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "https://formspree.io/xdopnpyj", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, I\'ll be in touch promptly.');
    return false;
});