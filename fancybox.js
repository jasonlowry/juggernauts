$(document).ready(function() {
			/*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox();
			$('.iframe').fancybox({
				'type' : 'iframe',
				'hideOnContentClick': true,
				'showNavArrows' : true,
			});
});