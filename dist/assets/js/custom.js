// Site Specific Javascript not a part of the package

// Require Call For Scroll Animate
jQuery(document).ready(function ()
{
	if (jQuery("[data-scroll]").length !== 0)
	{
		let obj = {
			trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
			header: '[data-scroll-header]', // Selector or Element for fixed header (Selector of must be a valid css
											// selector)
			duration: 1500,                 // Specifies animation duration in integer
			easing: 'easeOutQuint',         // Specifies the pattern of easing
			offset: 40,                      // Specifies the value to offset the scroll position in pixels
			vertical: true,                 // Enable the vertical scroll
			horizontal: false,              // Enable the horizontal scroll
			cancellable: true,              // When fired wheel or touchstart events to stop scrolling
			updateURL: false,               // Update the URL hash on after scroll (true | false | 'push' | 'replace')
			preventDefault: true,           // Cancels the container element click event
			stopPropagation: true,          // Prevents further propagation of the container element click event in the
											// bubbling phase
		};
		require(["app/shortcodes/wdpkSweetScroll"], function (e)
		{
			e.publicCall(obj);
		});
	}
});

// Page Title Sitewide Parallax Effect
jQuery(document).ready(function ()
{
	if (jQuery("#parallax-title").length !== 0)
	{
		let obj = {
			selectorID: 'parallax-title',
			factor: 0.8,        // +/- gives direction, Less means slower if no other breakpoint factor is set this value is selected
			factorXs: 0.1,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorSm: 0.2,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorMd: 0.3,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorLg: 0.4,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorXl: 0.5,       // factorXs, factorSm, factorMd, factorLg, factorXl
			type: 'background',     // background, foreground
			direction: 'vertical',// vertical, horizontal
			transition: 'translate 0.1s ease' // CSS transition, added on elements where type:'foreground'
		};
		require(["app/shortcodes/wdpkParallax"], function (e)
		{
			e.publicCall(obj);
		});
	}
});
