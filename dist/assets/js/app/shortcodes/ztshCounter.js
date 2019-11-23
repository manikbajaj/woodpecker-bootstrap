/**
 * @module app/shortcodes/ztshCounter.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshCounter
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshCounter
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadCounter the main function which performs the toggle function
 */

/**
 * TODO: Many options not rolled out in the first version need to be done https://github.com/hilios/jQuery.countdown
 * **/

define(['countUp', 'jquery.waypoints'], function (CountUp)
{
	// Declaring the ztshCounter Object
	var ztshCounter =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshCounter.loadCounter(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadCounter: function (obj)
			{

				let options = {
					useEasing: obj.useEasing,
					useGrouping: obj.useGrouping,
					separator: obj.separator,
					decimal: obj.decimal,
					prefix: '<span class="ztsh-counter-prefix">' + obj.prefix + '</span>',
					suffix: '<span class="ztsh-counter-suffix">' + obj.suffix + '</span>'
				};
				let instance = new CountUp(obj.selectorID, obj.startNumber, obj.EndNumber, obj.decimalPlaces, obj.countDuration, options);

				// Using Waypoint to trigger the counter opnly when its in view port
				var waypoints = jQuery('#' + obj.selectorID).waypoint({
					handler: function(direction) {
							if (!instance.error)
							{
								instance.start();
							}
							else
							{
								console.error(instance.error);
							}
						// distroys waypoint and prevents the trigger from triggering again
						this.destroy();
					},
					offset: '85%',
				});
			}
		};
	return ztshCounter;
});


