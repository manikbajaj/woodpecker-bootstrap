/**
 * @module app/shortcodes/ztshAccordion.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshAccordion
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshAccordion
 * @property publicCall The public function of the module which triggers the calculator function
 * @property buttonToggle the main function which performs the toggle function
 */

define([], function ()
{
	// Declaring the ztshAccordion Object
	var ztshAccordion =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				ztshAccordion.buttonToggle();
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			buttonToggle: function ()
			{
				jQuery(".ztsh-accordion-button a").on("click", function ()
				{
					let currentActive = jQuery("#ztshAccordion").find(".ztsh-trans-button");
					let currentActiveId = currentActive.attr("id");

					if (jQuery(this).attr("id") !== currentActiveId)
					{
						currentActive.removeClass("ztsh-trans-button");
						jQuery(this).addClass("ztsh-trans-button");
					}
					else
					{
						jQuery(this).toggleClass("ztsh-trans-button");
					}
				})
			}
		};
	return ztshAccordion;
});


