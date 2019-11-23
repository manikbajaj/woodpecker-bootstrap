/**
 * @module app/shortcodes/ztshStickySidebar.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshStickySidebar
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshStickySidebar
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadStickySidebar the main function which performs the toggle function
 */

define(['jquery.sticky-sidebar'], function ()
{
	// Declaring the ztshStickySidebar Object
	var ztshStickySidebar =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshStickySidebar.loadStickySidebar(obj);
			},


			loadStickySidebar: function (obj)
			{
				var sidebar = jQuery(obj.selector).stickySidebar(obj);
			}
		};
	return ztshStickySidebar;
});


