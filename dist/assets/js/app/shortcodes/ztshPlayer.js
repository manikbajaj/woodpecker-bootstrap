/**
 * @module app/shortcodes/ztshPlayer.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshPlayer
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshPlayer
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadPlayer the main function which performs the toggle function
 */

/**
 * TODO: Add All Methods and support them over a period of time https://github.com/sampotts/plyr
 * **/

define(['Plyr'], function (Plyr)
{
	// Declaring the ztshPlayer Object
	var ztshPlayer =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshPlayer.loadPlayer(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadPlayer: function (obj)
			{
				let player = new Plyr(jQuery('#' + obj.selectorID),{obj});
			}
		};
	return ztshPlayer;
});


