define(['init', 'libs/packery.min', 'libs/magnific-popup.min'], function(_, Packery, _) {

	var pckry = new Packery( '#container', {
		// options
		itemSelector: '.item',
		isFitWidth: true,
		isOriginTop: false
	});


	$('.popup-with-zoom-anim').magnificPopup({
		mainClass: 'my-mfp-zoom-in'
	});

});
