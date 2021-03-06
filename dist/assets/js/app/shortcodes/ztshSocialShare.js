/**
 * @module app/shortcodes/ztshSocialShare.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshSocialShare
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshSocialShare
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadShare the main function which performs the toggle function
 */

define(['jssocials'], function ()
{
	// Declaring the ztshSocialShare Object
	var ztshSocialShare =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshSocialShare.loadShare(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			loadShare: function (obj)
			{
				jQuery('#' + obj.selectorID ).jsSocials(obj);
			}
		};
	return ztshSocialShare;
});


