/**
 * @module app/shortcodes/wdpkAnimateProgress.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkAnimateProgress
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkAnimateProgress
 * @property publicCall The public function of the module which triggers the calculator function
 * @property animateProgress the main function which performs the toggle function
 */

/**
 * TODO: Many options not rolled out in the first version need to be done https://github.com/hilios/jQuery.countdown
 * **/

define(['jqueryWaypoints'], function ()
{
	// Declaring the wdpkAnimateProgress Object
	var wdpkAnimateProgress =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				wdpkAnimateProgress.animateProgress(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			animateProgress: function (obj)
			{
				var waypoints = jQuery('#' + obj.selectorID).waypoint(function (direction)
				{
					// console.log(jQuery('#' + obj.selectorID));
					jQuery('#' + obj.selectorID).animate({
						width: obj.width,
					}, obj.duration);

					// distroys waypoint and prevents the trigger from triggering again
					this.destroy();
				}, {
					offset: '85%',
				});
			}
		};
	return wdpkAnimateProgress;
});


