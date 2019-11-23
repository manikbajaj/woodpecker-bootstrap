/**
 * @module app/shortcodes/ztshTypeText.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshTypeText
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshTypeText
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadTypeText the main function which performs the toggle function
 */


define(['Typed'], function (Typed)
{
	// Declaring the ztshTypeText Object
	var ztshTypeText =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshTypeText.loadTypeText(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadTypeText: function (obj)
			{
				const typing = new Typed(obj.selector, obj);
			}
		};
	return ztshTypeText;
});


