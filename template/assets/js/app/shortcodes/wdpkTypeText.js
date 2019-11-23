/**
 * @module app/shortcodes/wdpkTypeText.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkTypeText
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkTypeText
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadTypeText the main function which performs the toggle function
 */


define(['Typed'], function (Typed)
{
	// Declaring the wdpkTypeText Object
	var wdpkTypeText =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				wdpkTypeText.loadTypeText(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadTypeText: function (obj)
			{
				const typing = new Typed(obj.selector, obj);
			}
		};
	return wdpkTypeText;
});


