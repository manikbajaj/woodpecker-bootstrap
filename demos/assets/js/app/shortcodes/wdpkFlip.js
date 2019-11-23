/**
 * @module app/shortcodes/wdpkFlip.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkFlip
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkFlip
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadFlip the main function which performs the toggle function
 */


define(['jquery.flip'], function ()
{
	// Declaring the wdpkFlip Object
	var wdpkFlip =
		{

			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				wdpkFlip.loadFlip(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadFlip: function (obj)
			{
				jQuery('#' + obj.selectorID).flip(obj);
			}
		};
	return wdpkFlip;
});


