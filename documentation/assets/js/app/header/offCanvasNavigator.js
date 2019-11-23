/**
 * @module app/header/offCanvasNavigator
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object subDropCorrector
 * @description This module enables the menu toggle functionality for OffCanvas Menu.
 *
 * @name subDropCorrector
 * @property publicCall The public function of the module which triggers the calculator function
 * @property navigator the main function which checks for the active class and adds it if missing
 *
 */
// TODO: Create Loop for repetitive nesting and small functions to add and remove classes instead of

define([''], function ()
{
	// Declaring the subDropCorrector Object
	var offCanvasNavigator =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				offCanvasNavigator.navigator();
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			navigator: function ()
			{


				// Find the element that is already active
				var currentActive = null;

				// Find the sub menu that is already active
				var currentSubActive = null;

				jQuery(".wdpk-hasDropdown, .wdpk-hasSubMenu .wdpk-dropDown-item").off("click touch").on("click touch", function (e)
				{
					e.stopPropagation();

					// Current Parent Element that has been clicked
					var currentClicked = null;

					// Current Submenu clicked
					var currentSubClicked = null;

					// Check if parent is clicked or child
					var parentClicked = null;

					//  The height of the list item for animation
					var height = null;

					// Find it the parent menu has been clicked or sub menu item has beeen clicked and assign
					// to required variable based on the condition
					if (jQuery(this).hasClass('wdpk-hasDropdown'))
					{
						currentClicked = jQuery(this).attr('id');
						parentClicked = true;
					}
					else
					{
						currentSubClicked = jQuery(this).attr('id');
						parentClicked = false;
					}


					// Function findContainer
					// A function to the find the container element inside the parent elemeent passed as a
					// paramater
					//
					// @param parent - whether the element is parent or a child element, `true` for parent element
					// and `false` for the child element. @param identifier - Pass in the `id` of the parent
					// element for which you need the function to find the container  @since version 1.0.0

					function findContainer(parent, identifier)
					{
						var result = null;
						if (parent == true)
						{
							result = jQuery("#" + identifier).siblings('.wdpk-menu-container');
							return result;
						}
						else
						{
							result = jQuery("#" + identifier).siblings('.wdpk-menu-container');
							return result;
						}
					}


					if (currentActive == currentClicked && parentClicked == true)
					{
						if (currentSubActive !== null)
						{
							findContainer(false, currentSubActive).slideToggle().toggleClass('wdpk-offcanvas-active');
							jQuery("#" + currentSubActive).parent().find(".wdpk-offcanvas-plus").toggleClass("wdpk-plus-transdform");
						}
						findContainer(true, currentClicked).slideToggle().toggleClass('wdpk-offcanvas-active');
						jQuery(this).find(".wdpk-offcanvas-plus").toggleClass("wdpk-plus-transdform");
					}
					else if (parentClicked == false && currentSubActive == currentSubClicked)
					{
						findContainer(false, currentSubClicked).slideToggle().toggleClass('wdpk-offcanvas-active');
						jQuery(this).find(".wdpk-offcanvas-plus").toggleClass("wdpk-plus-transdform");
					}
					else if (parentClicked == true && currentActive != currentClicked)
					{

						if (currentActive != null && findContainer(true, currentActive).hasClass('wdpk-offcanvas-active') !== false)
						{
							findContainer(true, currentActive).slideToggle().toggleClass('wdpk-offcanvas-active');
							jQuery("#" + currentActive).parent().find(".wdpk-offcanvas-plus").toggleClass("wdpk-plus-transdform");
						}
						if (currentSubActive != null && findContainer(true, currentSubActive).hasClass('wdpk-offcanvas-active') !== false)
						{
							findContainer(false, currentSubActive).slideToggle().toggleClass('wdpk-offcanvas-active');
							jQuery("#" + currentSubActive).parent().find(".wdpk-offcanvas-plus").toggleClass("wdpk-plus-transdform");
						}
						findContainer(true, currentClicked).slideToggle().addClass('wdpk-offcanvas-active');
						jQuery(this).find(".wdpk-offcanvas-plus").addClass("wdpk-plus-transdform");
						currentActive = currentClicked;
					}
					else if (parentClicked == false && currentSubActive != currentSubClicked)
					{
						if (currentSubActive != null && findContainer(false, currentSubActive).hasClass('wdpk-offcanvas-active') != false)
						{
							findContainer(true, currentSubActive).slideToggle().toggleClass('wdpk-offcanvas-active');
							jQuery("#" + currentSubActive).parent().find(".wdpk-offcanvas-plus").toggleClass("wdpk-plus-transdform");
						}
						findContainer(false, currentSubClicked).slideToggle().addClass('wdpk-offcanvas-active');
						jQuery(this).find(".wdpk-offcanvas-plus").addClass("wdpk-plus-transdform");
						currentSubActive = currentSubClicked;
					}
					else
					{
						return;
					}

				});
			}
		};
	return offCanvasNavigator;
});