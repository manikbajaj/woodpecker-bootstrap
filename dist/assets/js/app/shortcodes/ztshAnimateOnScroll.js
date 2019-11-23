/**
 * @module app/shortcodes/ztshAnimateOnScroll.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshAnimateOnScroll
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshAnimateOnScroll
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadAnimateOnScroll the main function which performs the toggle function
 */


define(['aos'], function (AOS)
{
	// Declaring the ztshAnimateOnScroll Object
	var ztshAnimateOnScroll =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshAnimateOnScroll.loadAnimateOnScroll(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadAnimateOnScroll: function (obj)
			{
				AOS.init();
			}
		};
	return ztshAnimateOnScroll;
});


