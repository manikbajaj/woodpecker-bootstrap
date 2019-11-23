/**
 * @module app/shortcodes/ztshFlip.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshFlip
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshFlip
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadFlip the main function which performs the toggle function
 */


define(['jquery.flip'], function ()
{
	// Declaring the ztshFlip Object
	var ztshFlip =
		{

			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshFlip.loadFlip(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadFlip: function (obj)
			{
				jQuery('#' + obj.selectorID).flip(obj);
			}
		};
	return ztshFlip;
});


