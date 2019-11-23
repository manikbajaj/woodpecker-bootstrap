/**
 * @module app/header/offCanvasToggle
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object offCanvasToggle
 * @description This module enables the menu toggle functionality for OffCanvas Menu.
 *
 * @name offCanvasToggle
 * @property publicCall The public function of the module which triggers the calculator function
 * @property toggle the main function which checks for click event on the menu icon and triggers the OffCanvas Menu
 */
// TODO: Enable The Main Element Slider As Well When OffCanvas Menu Is Triggered
// TODO: Improve close button class assignment and layout of the menu overall.


define(['offside'], function ()
{
	// Declaring the offCanvasToggle Object
	var offCanvasToggle =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				offCanvasToggle.toggle(obj);
			},

			// Toggle function to make the offcanvas menu visible when the function is triggered
			toggle: function (obj)
			{
				var menuIcon = jQuery(".wdpk-mobile-header #wdpk-mobile-menu-icon i");
				var overlay = jQuery("#wdpk-offcanvas-overlay");

				jQuery("#wdpk-mobile-menu-icon").off("click touch").on("click touch", function (e)
				{
					overlay.toggleClass("wdpk-offcanvas-overlay");
				});

				jQuery(".wdpk-mobile-menu-close").off("click touch").on("click touch", function (e)
				{
					overlay.toggleClass("wdpk-offcanvas-overlay");
				});

				var myOffside = offside('.wdpk-offCanvas', {
					slidingElementsSelector: '#my-content-container',
					buttonsSelector: '#wdpk-mobile-menu-icon, .wdpk-mobile-menu-close',
					slidingSide: obj.slidingSide,
				});

			}
		};
	return offCanvasToggle;
});
