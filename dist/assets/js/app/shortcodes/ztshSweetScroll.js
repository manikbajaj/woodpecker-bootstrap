/**
 * @module app/shortcodes/ztshSweetScroll.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshSweetScroll
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshSweetScroll
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadSweetScroll the main function which performs the toggle function
 */


define(['SweetScroll'], function (SweetScroll)
{
	// Declaring the ztshSweetScroll Object
	var ztshSweetScroll =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshSweetScroll.loadSweetScroll(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadSweetScroll: function (obj)
			{
				const scroller = new SweetScroll({obj});
			}
		};
	return ztshSweetScroll;
});


