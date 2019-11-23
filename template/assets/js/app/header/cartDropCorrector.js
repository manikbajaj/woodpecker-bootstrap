/**
 * @module app/header/cartDropCorrector
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object cartDropCorrector
 * @description The module calculates the available width in the viewport and check if the available is space is enough
 *     to open the dropdown menu and if notthen adds the wdpk-menuEdge class which then opens the menu in the opposite
 *     direction. The module returns an object which contains the publicCall key used to call the public method of the
 *     module.
 * @name cartDropCorrector
 * @property publicCall The public function of the module which triggers the calculator function
 * @property calculator the main function which performs the calculation
 */

define([''], function ()
{
	// Declaring the cartDropCorrector Object
	var cartDropCorrector =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				cartDropCorrector.calculator();
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			calculator: function ()
			{
				jQuery(".wdpk-menu-cart").on("mouseenter mouseleave", function (e)
				{
					// Reset Area occupied everytime
					var occupiedArea = null;
					jQuery(".wdpk-cart-dropdown", this).css("right", "");

					if (jQuery(this).find(".wdpk-cart-dropdown"))
					{
						var elm = jQuery(".wdpk-cart-dropdown", this);
						var off = elm.offset();
						var l = off.left;
						var r = off.right;
						var w = elm.width();
						var docH = jQuery(window).height();
						var docW = jQuery(window).width();
						var isEntirelyVisible = l + w <= docW;
						occupiedArea = docW - (l+w);

						if (!isEntirelyVisible)
						{
							jQuery(".wdpk-cart-dropdown", this).addClass("wdpk-cartEdge");
						}
						else
						{
							jQuery(".wdpk-cart-dropdown", this).css("right", (occupiedArea + 25 + "px") );
						}
						setTimeout(function ()
						{
							jQuery(".wdpk-cart-dropdown", this).removeClass(
								"wdpk-cartEdge"
							);
						}, 5000);
					}
				});
			}
		};
	return cartDropCorrector;
});
