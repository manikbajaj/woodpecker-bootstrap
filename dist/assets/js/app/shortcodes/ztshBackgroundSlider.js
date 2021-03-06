/**
 * @module app/shortcodes/ztshBackgroundSlider.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshBackgroundSlider
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshBackgroundSlider
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadBackgroundSlider the main function which performs the toggle function
 */

define(['vegas'], function ()
{
	// Declaring the ztshBackgroundSlider Object
	var ztshBackgroundSlider =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshBackgroundSlider.loadBackgroundSlider(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadBackgroundSlider: function (obj)
			{
				let vegas = jQuery(obj.selector).vegas(obj);
			}
		};
	return ztshBackgroundSlider;
});


