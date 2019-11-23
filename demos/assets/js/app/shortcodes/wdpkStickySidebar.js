/**
 * @module app/shortcodes/wdpkStickySidebar.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkStickySidebar
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkStickySidebar
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadStickySidebar the main function which performs the toggle function
 */

define(['jquery.sticky-sidebar'], function ()
{
	// Declaring the wdpkStickySidebar Object
	var wdpkStickySidebar =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				wdpkStickySidebar.loadStickySidebar(obj);
			},


			loadStickySidebar: function (obj)
			{
				var sidebar = jQuery(obj.selector).stickySidebar(obj);
			}
		};
	return wdpkStickySidebar;
});


