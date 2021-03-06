/**
 * @module app/shortcodes/wdpkParallax.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkParallax
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkParallax
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadParallax the main function which performs the toggle function
 */

/**
 * TODO: Documents All Js Options https://github.com/nk-o/jarallax#b-javascript-way
 * **/

define(['parollerjs'], function ()
{
	// Declaring the wdpkParallax Object
	var wdpkParallax =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				wdpkParallax.loadParallax(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadParallax: function (obj)
			{
				jQuery('#' + obj.selectorID).paroller(obj);

			}
		};
	return wdpkParallax;
});


