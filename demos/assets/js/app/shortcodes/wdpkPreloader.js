/**
 * @module app/shortcodes/wdpkPreloader.js
 * @author Uneebox
 * @since Version 1.0.0
 * @returns object wdpkPreloader
 * @description The module is used to change the state of the button on the accordion. It adds an active class to the
 *     button of the said collapsable is opened and visa-vera
 * @name wdpkPreloader
 * @property publicCall The public function of the module which triggers the calculator function
 * @property loadPreloader the main function which performs the toggle function
 */
//TODO: Use Swup for page laods in next release than using custom code


define([''], function ()
{
	// Declaring the wdpkPreloader Object
	var wdpkPreloader =
		{
			// publiCall property to use methods in object
			publicCall: function ()
			{
				wdpkPreloader.loadPreloader();
			},

			loadPreloader: function ()
			{
				let minloadingtime = 100;
				let maxloadingtime = 2000;

				let startTime = new Date();
				let elapsedTime;
				let dismissonloadfunc, maxloadingtimer;

				window.addEventListener('load', dismissonloadfunc = function(){
					// when page loads
					// cancel dismissal of transition after maxloadingtime time
					clearTimeout(maxloadingtimer);
					// get time elapsed once page has loaded
					elapsedTime = new Date() - startTime;
					let hidepageloadertimer = (elapsedTime > minloadingtime)? 0 : minloadingtime - elapsedTime;

					setTimeout(function(){
						// dismiss transition
						document.getElementById('wdpk-page-load-animate').classList.add('wdpk-pre-deact');
						document.getElementById('wdpk-main').classList.add('wdpk-main-animate');
					}, hidepageloadertimer)

				}, false);

				maxloadingtimer = setTimeout(function(){
					// force dismissal of page transition after maxloadingtime time
					window.removeEventListener('load', dismissonloadfunc, false);
					// cancel onload event function call
					document.getElementById('wdpk-page-load-animate').classList.add('wdpk-pre-deact');
					document.getElementById('wdpk-main').classList.add('wdpk-main-animate');
					// dismiss transition
				}, maxloadingtime);

			}
		};
	return wdpkPreloader;
});


