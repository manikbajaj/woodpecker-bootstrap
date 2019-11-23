/**
 * @module app/shortcodes/ztshLightGallery.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshLightGallery
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshLightGallery
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadLightGallery the main function which performs the toggle function
 */
// TODO: Map the complete LightGallery API and Document It


define(
	[
		'lgZoom',
		'lgThumbnail',
		'lgAutoplay',
		'lgFullscreen',
		'lgHash',
		'lgPager',
		'lgVideo',
	],
	function ()
	{

		// Declaring the ztshLightGallery Object
		var ztshLightGallery =
			{

				// publiCall property to use methods in object
				publicCall: function (obj)
				{
					ztshLightGallery.loadLightGallery(obj);
				},

				// Calculator method to calculate the distance of dropdown from the side of the viewport
				//'%m Months %W weeks %-d days %-H h %M min %S sec'
				loadLightGallery: function (obj)
				{
					jQuery('#' + obj.selectorID).lightGallery({
						selector: '.ztsh-light-gallery-cont',
						thumbnail: obj.thumbnail,
						animateThumb: obj.animateThumb,
						showThumbByDefault: obj.showThumbByDefault,
					});

				}
			};
		return ztshLightGallery;

	});


