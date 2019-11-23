/**
 * @module app/shortcodes/wdpkPreloader.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkPreloader
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkPreloader
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadPreloader the main function which performs the toggle function
 */


define([''], function ()
{
	// Declaring the wdpkPreloader Object
	var wdpkPreloader =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				wdpkPreloader.loadPreloader();
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadPreloader: function ()
			{
				jQuery('#wdpk-page-load-animate').addClass('wdpk-pre-deact');
				jQuery('#wdpk-main').addClass('wdpk-main-animate');
			}
		};
	return wdpkPreloader;
});


