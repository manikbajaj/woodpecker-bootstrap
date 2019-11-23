/**
 * @module app/shortcodes/ztshTimer.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object ztshTimer
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name ztshTimer
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadTimer the main function which performs the toggle function
 */

/**
 * TODO: Many options not rolled out in the first version need to be done https://github.com/hilios/jQuery.countdown
 * **/

define(['jquery.countdown'], function ()
{
	// Declaring the ztshTimer Object
	var ztshTimer =
		{
			// publiCall property to use methods in object
			publicCall: function (obj)
			{
				ztshTimer.loadTimer(obj);
			},

			// Calculator method to calculate the distance of dropdown from the side of the viewport
			//'%m Months %W weeks %-d days %-H h %M min %S sec'
			loadTimer: function (obj)
			{
				var timerFormat = '<div class = "row ztsh-timer">';
				if (obj.enableYears === true)
				{

					timerFormat = timerFormat + '<div class = "col ztsh-timer-item">'
						+ '<div class = "ztsh-timer-counter">%Y</div>'
						+ '<div class = "ztsh-timer-desc">' + obj.yearsString + '</div>'
						+ '</div>'
				}
				if (obj.enableMonths === true)
				{
					timerFormat = timerFormat + '<div class = "col ztsh-timer-item">'
						+ '<div class = "ztsh-timer-counter">%m</div>'
						+ '<div class = "ztsh-timer-desc">' + obj.monthsString + '</div>'
						+ '</div>'
				}
				if (obj.enableDaysOfMonth === true)
				{
					timerFormat = timerFormat + '<div class = "col ztsh-timer-item">'
						+ '<div class = "ztsh-timer-counter">%n</div>'
						+ '<div class = "ztsh-timer-desc">' + obj.daysOfMonthString + '</div>'
						+ '</div>'
				}
				if (obj.enableWeeks === true)
				{
					timerFormat = timerFormat + '<div class = "col ztsh-timer-item">'
						+ '<div class = "ztsh-timer-counter">%w</div>'
						+ '<div class = "ztsh-timer-desc">' + obj.weeksString + '</div>'
						+ '</div>'
				}
				if (obj.enableDays === true)
				{
					timerFormat = timerFormat + '<div class = "col ztsh-timer-item">'
						+ '<div class = "ztsh-timer-counter">%d</div>'
						+ '<div class = "ztsh-timer-desc">' + obj.dasysString + '</div>'
						+ '</div>'
				}
				if (obj.enableHours === true)
				{
					timerFormat = timerFormat + '<div class = "col ztsh-timer-item">'
						+ '<div class = "ztsh-timer-counter">%H</div>'
						+ '<div class = "ztsh-timer-desc">' + obj.hoursString + '</div>'
						+ '</div>'
				}
				if (obj.enableMinutes === true)
				{
					timerFormat = timerFormat + '<div class = "col ztsh-timer-item">'
						+ '<div class = "ztsh-timer-counter">%M</div>'
						+ '<div class = "ztsh-timer-desc">' + obj.minutesString + '</div>'
						+ '</div>'
				}
				if (obj.enableSeconds === true)
				{
					timerFormat = timerFormat + '<div class = "col ztsh-timer-item">'
						+ '<div class = "ztsh-timer-counter">%S</div>'
						+ '<div class = "ztsh-timer-desc">' + obj.secondsString + '</div>'
						+ '</div>'
				}
				timerFormat = timerFormat + '</div>';

				jQuery(obj.selector).countdown(obj.finalDate, function (event)
				{
					jQuery(this).html(event.strftime(timerFormat));
				});
			}
		};
	return ztshTimer;
});


