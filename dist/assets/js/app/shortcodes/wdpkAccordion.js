/**
 * @module app/shortcodes/wdpkAccordion.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkAccordion
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkAccordion
 * @property publicCall The public function of the module which triggers the calculator function
 * @property buttonToggle the main function which performs the toggle function
 */

define([], function ()
{
	// Declaring the wdpkAccordion Object
	var wdpkAccordion =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				wdpkAccordion.buttonToggle();
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			buttonToggle: function ()
			{
				jQuery(".wdpk-accordion-button a").on("click", function ()
				{
					let currentActive = jQuery("#wdpkAccordion").find(".wdpk-trans-button");
					let currentActiveId = currentActive.attr("id");

					if (jQuery(this).attr("id") !== currentActiveId)
					{
						currentActive.removeClass("wdpk-trans-button");
						jQuery(this).addClass("wdpk-trans-button");
					}
					else
					{
						jQuery(this).toggleClass("wdpk-trans-button");
					}
				})
			}
		};
	return wdpkAccordion;
});


