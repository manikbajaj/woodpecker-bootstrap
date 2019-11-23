/**
 * @module app/shortcodes/ztshCircle.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshCircle
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshCircle
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadCircle the main function which performs the toggle function
 */


define(['jqueryWaypoints'], function ()
{
	// Declaring the ztshCircle Object
	var ztshCircle =
		{

			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshCircle.loadCircle(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadCircle: function (obj)
			{

				var waypoints = jQuery('#' + obj.selectorID).waypoint(function (direction)
				{
					let counterInstance = jQuery('#' + obj.selectorID).circleProgress(obj);
					if (obj.valueProgress == true)
					{
						counterInstance.on('circle-animation-progress', function (event, progress, stepValue)
						{
							jQuery(this).find('.ztsh-cicles-counter-number').text(stepValue.toFixed(obj.decimalPlaces).substr(obj.valueTotal) + obj.suffixSymbol);
						});
					}

					if (obj.animationProgress == true)
					{
						counterInstance.on('circle-animation-progress', function (event, progress)
						{
							jQuery(this).find('.ztsh-cicles-counter-number').html(Math.round(100 * progress) + obj.suffixSymbol);
						});

					}
					// distroys waypoint and prevents the trigger from triggering again
					this.destroy();
				}, {
					offset: '85%',
				});
			}
		};
	return ztshCircle;
});


