/**
 * @module app/shortcodes/wdpkCarousel.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkCarousel
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkCarousel
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadCarousel the main function which performs the toggle function
 */

/**
 * TODO: Many options not rolled out in the first version need to be done https://flickity.metafizzy.co/options.html
 * TODO: Need to work on the https://github.com/metafizzy/flickity-fade package
 * TODO: Need to work on the https://github.com/metafizzy/flickity-fullscreen package
 * TODO: Need to work on to enable the Hash behaviour https://github.com/metafizzy/flickity-hash
 * TODO: Enable and document selectedAttraction & friction https://flickity.metafizzy.co/options.html#selectedattraction-friction
 * TODO: Include plugin using RequireJs as Instructred by Flickity to ensure compliance with all fucntionality
 * **/

define(['flickity.pkgd'], function (Flickity)
{
	// Declaring the wdpkCarousel Object
	var wdpkCarousel =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				wdpkCarousel.loadCarousel(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			// Flickity has certain requirements to load with RequireJs Refere to the documentation here
			// https://flickity.metafizzy.co/extras.html#browserify
			loadCarousel: function (obj)
			{
				new Flickity(obj.selector, obj);
			}
		};
	return wdpkCarousel;
});


