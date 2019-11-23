/**
 * @module app/header/stickyNavbar
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object stickyNavbar
 * @description The module triggers a sticky navbar at the top of the page
 * @name stickyNavbar
 * @property publicCall The public function of the module which triggers the makeSticky function
 * @property makeSticky the main function which performs the calculation
 */

define([''], function ()
{
	// Declaring the subDropCorrector Object
	var stickyNavbar =

		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				stickyNavbar.makeSticky();
			},

			// makeSticky method to calculate the distance from the top and make the navigation sticky
			makeSticky: function ()
			{
				// Calculate the initial top offset of the navigation
				var stickyNavTop = jQuery(".wdpk-sticky-navbar").offset().top;

				// Get the top value for Cart Dropdown
				var cartTop = jQuery(".wdpk-cart-dropdown").css("top");
				var topBarHeight = jQuery(".wdpk-topbar-wrapper").height();
				cartTop = parseInt(cartTop, 10);

				var newTop = cartTop - topBarHeight;


				jQuery(window).scroll(function ()
				{
					// Caclulate vertical
					var scrollTop = jQuery(window).scrollTop();

					// our function that decides weather the navigation bar should have "fixed" css position or not.
					function stickyNav()
					{
						// if we've scrolled more than the navigation, change its position to fixed to stick to top,
						// otherwise change it back to relative
						if (scrollTop >= stickyNavTop)
						{
							jQuery(".wdpk-sticky-navbar").addClass("wdpk-sticky");
							jQuery(".wdpk-cart-dropdown").css("top", newTop);

						}
						else if (stickyNavTop > scrollTop)
						{
							jQuery(".wdpk-sticky-navbar").removeClass("wdpk-sticky");
							jQuery(".wdpk-cart-dropdown").css("top", cartTop);
						}
					};

					// Run the Function Everytime on Scroll
					stickyNav();
				});
			}
		};

	// Return the stickyNavbar object
	return stickyNavbar;
});
