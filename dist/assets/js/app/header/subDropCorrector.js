/**
 * @module app/header/subDropCorrector
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object subDropCorrector
 * @description The module calculates the available width in the viewport and check if the available is space is enough
 *     to open the dropdown menu and if notthen adds the wdpk-menuEdge class which then opens the menu in the opposite
 *     direction. The module returns an object which contains the publicCall key used to call the public method of the
 *     module.
 * @name subDropCorrector
 * @property publicCall The public function of the module which triggers the calculator function
 * @property calculator the main function which performs the calculation
 */

define([''], function ()
{
	// Declaring the subDropCorrector Object
	var subDropCorrector =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				subDropCorrector.calculator();
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			calculator: function ()
			{
				jQuery(".wdpk-dropCorrect").on("mouseenter mouseleave", function (e)
				{
					if (jQuery(this).find("> div .wdpk-menu-container"))
					{
						var elm = jQuery("> .wdpk-menu-container", this);
						var off = elm.offset();
						var l = off.left;
						var w = elm.width();
						var docH = jQuery(window).height();
						var docW = jQuery(window).width();
						var isEntirelyVisible = l + w <= docW;

						if (!isEntirelyVisible)
						{
							jQuery("> .wdpk-menu-container", this).addClass("wdpk-menuEdge");
						}
						else
						{
							setTimeout(function ()
							{
								jQuery("> .wdpk-menu-container", this).removeClass(
									"wdpk-menuEdge"
								);
							}, 3000);
						}
					}
				});
			}
		};
	return subDropCorrector;
});
