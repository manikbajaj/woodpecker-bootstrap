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


define([''], function ()
{
	// Declaring the offCanvasToggle Object
	var offCanvasToggle =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				offCanvasToggle.toggle();
			},

			// Toggle function to make the offcanvas menu visible when the function is triggered
			toggle: function ()
			{
				var menuContainer = jQuery(".wdpk-offCanvas");
				var main = jQuery("#wdpk-main");
				var menuIcon = jQuery(".wdpk-mobile-header #wdpk-mobile-menu-icon i");
				var overlay = jQuery("#wdpk-offcanvas-overlay");

				jQuery("#wdpk-mobile-menu-icon").off("click touch").on("click touch", function (e)
				{
					menuContainer.toggleClass("wdpk-offcanvas-slide");
					main.toggleClass("wdpk-offcanvas-margin");
					menuIcon.toggleClass("fa-bars fa-times");
					overlay.toggleClass("wdpk-offcanvas-overlay");
				});
			}
		};
	return offCanvasToggle;
});
