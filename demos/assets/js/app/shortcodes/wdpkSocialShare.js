/**
 * @module app/shortcodes/wdpkSocialShare.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkSocialShare
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkSocialShare
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadShare the main function which performs the toggle function
 */

define(['jssocials'], function ()
{
	// Declaring the wdpkSocialShare Object
	var wdpkSocialShare =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				wdpkSocialShare.loadShare(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			loadShare: function (obj)
			{
				jQuery('#' + obj.selectorID ).jsSocials(obj);
			}
		};
	return wdpkSocialShare;
});


