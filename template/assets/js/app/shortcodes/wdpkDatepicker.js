/**
 * @module app/shortcodes/wdpkDatepicker.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkDatepicker
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkDatepicker
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadDatepicker the main function which performs the toggle function
 */
/**
 * TODO: Many options not rolled out in the first version need to be done https://flatpickr.js.org/getting-started/
 * **/

define(['flatpickr'], function ()
{
	// Declaring the wdpkDatepicker Object
	var wdpkDatepicker =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				wdpkDatepicker.loadDatepicker(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadDatepicker: function (obj)
			{
				jQuery('#' + obj.selectorID).flatpickr(obj);
			}
		};
	return wdpkDatepicker;
});


