/**
 * @module app/shortcodes/ztshPrism.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshPrism
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshPrism
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadPrism the main function which performs the toggle function
 */

/**
 * TODO: Load Prism JS using RequireJS in the next version of the application https://anujnair.com/blog/10-using-prismjs-with-requirejs-and-loading-plugins-asynchronously
 * **/

define([], function ()
{
	// Declaring the ztshPrism Object
	var ztshPrism =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				ztshPrism.loadPrism();
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadPrism: function ()
			{

			}
		};
	return ztshPrism;
});


