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
			factor: 0.8,        // +/- gives direction, Less means slower if no other breakpoint factor is set this
								// value is selected
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


// Demos Specific Javascript
jQuery(document).ready(function ()
{
	// Homepage Hero Image Parallax
	if (jQuery(".wdpk-parallax").length !== 0)
	{
		let obj = {
			selectorID: 'parallax-1',
			factor: 0.4,        // +/- gives direction, Less means slower if no other breakpoint factor is set this
								// value is selected
			type: 'background',     // background, foreground
			direction: 'vertical',// vertical, horizontal
			transition: 'translate 0.1s ease' // CSS transition, added on elements where type:'foreground'
		};
		require(["app/shortcodes/wdpkParallax"], function (e)
		{
			e.publicCall(obj);
		});
	}

	// Homepage hero section Typing Text
	if (jQuery("#wdpk-type-text").length !== 0) // Laods the JS only of the element exists
	{
		let obj = {
			selector: '#wdpk-type-text', // Selector for trigger (must be a valid css selector)
			smartBackspace: true, // Default value
			stringsElement: '#typed-strings', // Div that contains the text to be typed
			typeSpeed: 50, // Typing Speed higher the slower
			startDelay: 1000, // Delay before the typing starts
			backSpeed: 20, // Speed for backspace the higher the slower
			backDelay: 3000, // Delay after which the backsspace starts
			fadeOut: false, //Fade out instead of backspace
			fadeOutClass: 'class-name', //css class for fade animation
			fadeOutDelay: false,  //Fade out delay in milliseconds
			contentType: 'html',
			loop: true,
			loopCount: Infinity,
		};
		require(["app/shortcodes/wdpkTypeText"], function (e)
		{
			e.publicCall(obj);
		});
	}

	// Audio Shortcode Page Audio Player
	if (jQuery(".wdpk-audio").length !== 0)
	{
		let obj = {
				selectorID: 'html5-audio'
			}
		;

		require(["app/shortcodes/wdpkPlayer"], function (e)
		{
			e.publicCall(obj);
		});
	}

	// Carousel For Carousle Shortcode Page
	if (jQuery(".main-carousel").length !== 0)
	{
		let obj = {
			draggable: true,
			dragThreshold: 10, // dragging doesn't start until 10px moved
			cellAlign: 'center',
			freeScroll: false,
			wrapAround: true,
			adaptiveHeight: true,
			groupCells: 1, // Accepts Values in numbers eg. 2 format and boolean
			autoPlay: false, // Accepts Values in 1000 format and boolean
			pauseAutoPlayOnHover: false,
			contain: true,
			imagesLoaded: true,
			prevNextButtons: true,
			selector: '.main-carousel',
		};
		let obj2 = {
			draggable: true,
			dragThreshold: 10, // dragging doesn't start until 10px moved
			cellAlign: 'center',
			freeScroll: true,
			wrapAround: false,
			adaptiveHeight: true,
			groupCells: 2, // Accepts Values in numbers eg. 2 format and boolean
			autoPlay: true, // Accepts Values in 1000 format and boolean
			pauseAutoPlayOnHover: false,
			contain: false,
			imagesLoaded: true,
			prevNextButtons: true,
			selector: '.grouped-carousel',
		};
		require(["app/shortcodes/wdpkCarousel"], function (e)
		{
			e.publicCall(obj);
			e.publicCall(obj2);
		});
	}

	// Counters For The Counter Shortcode Page
	if (jQuery("#wdpk-counter").length !== 0)
	{
		let obj = {
			selectorID: 'wdpk-counter',
			startNumber: 0,
			EndNumber: 9840,
			decimalPlaces: 0,
			countDuration: 2.5, // in seconds
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.',
			prefix: '',
			suffix: ''
		};
		let obj2 = {
			selectorID: 'wdpk-counter-2',
			startNumber: 0,
			EndNumber: 8000,
			decimalPlaces: 0,
			countDuration: 2.5, // in seconds
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.',
			prefix: '$',
			suffix: ''
		};
		let obj3 = {
			selectorID: 'wdpk-counter-3',
			startNumber: 0,
			EndNumber: 6432,
			decimalPlaces: 0,
			countDuration: 2.5, // in seconds
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.',
			prefix: '',
			suffix: '#'
		};
		require(["app/shortcodes/wdpkCounter"], function (e)
		{
			e.publicCall(obj);
			e.publicCall(obj2);
			e.publicCall(obj3);
		});
	}

	// Circle Counters For Cicles Shortcode Page
	if (jQuery(".wdpk-cicles").length !== 0)
	{
		let obj = {
			selectorID: 'wdpkCircle',
			value: 0.57,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: '15',
			lineCap: 'butt',  // Arc line cap: "butt", "round" or "square"
			fill: {color: "#021d47"},
			emptyFill: 'rgba(0,0,0,.1)',
			valueProgress: true,
			animationProgress: false,
			valueTotal: 2, /// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '%',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		let obj2 = {
			selectorID: 'wdpkCircle2',
			value: .9, /// The maximum value can only be 1
			size: 125,
			startAngle: - Math.PI / 2, // specify the starting angle here
			reverse: false,
			thickness: '4',
			lineCap: 'butt',  // Arc line cap: "butt", "round" or "square"
			fill: {color: "#021d47"},
			valueProgress: false,
			animationProgress: true,
			valueTotal: 2,/// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '%',
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		let obj3 = {
			selectorID: 'wdpkCircle3',
			value: 0.86,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: 'auto',
			lineCap: 'round',  // Arc line cap: "butt", "round" or "square"
			fill: {color: "#021d47"},
			valueProgress: true,
			animationProgress: false,
			valueTotal: 1, /// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '',
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};
		let obj4 = {
			selectorID: 'wdpkCircle4',
			value: 0.91,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: '63',
			lineCap: 'butt',  // Arc line cap: "butt", "round" or "square"
			fill: {color: "#021d47"},
			valueProgress: false,
			animationProgress: false,
			valueTotal: 2, /// can either be 1 or 100. Set `1` for one and `2` for 100
			suffixSymbol: '%',
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		let obj5 = {
			selectorID: 'wdpkCircle5',
			value: 0.57,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: '15',
			lineCap: 'round',  // Arc line cap: "butt", "round" or "square"
			fill: {gradient: ["#00245b", "#991e94"]},
			emptyFill: 'rgba(0,0,0,.1)',
			valueProgress: true,
			animationProgress: false,
			valueTotal: 2, /// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '%',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		let obj6 = {
			selectorID: 'wdpkCircle6',
			value: .9, /// The maximum value can only be 1
			size: 125,
			startAngle: - Math.PI / 2, // specify the starting angle here
			reverse: false,
			thickness: '5',
			lineCap: 'round',  // Arc line cap: "butt", "round" or "square"
			fill: {gradient: ["#00245b", "#991e94"], gradientAngle: Math.PI / 3},
			valueProgress: false,
			animationProgress: true,
			valueTotal: 2,/// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '%',
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		let obj7 = {
			selectorID: 'wdpkCircle7',
			value: 0.86,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: 'auto',
			lineCap: 'round',  // Arc line cap: "butt", "round" or "square"
			fill: {gradient: ["#00245b", "#991e94"]},
			valueProgress: true,
			animationProgress: false,
			valueTotal: 1, /// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '',
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};
		let obj8 = {
			selectorID: 'wdpkCircle8',
			value: 0.91,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: '63',
			lineCap: 'butt',  // Arc line cap: "butt", "round" or "square"
			fill: {gradient: ["#00245b", "#991e94"]},
			valueProgress: false,
			animationProgress: false,
			valueTotal: 2, /// can either be 1 or 100. Set `1` for one and `2` for 100
			suffixSymbol: '%',
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		let obj9 = {
			selectorID: 'wdpkCircle9',
			value: 0.57,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: '15',
			lineCap: 'round',  // Arc line cap: "butt", "round" or "square"
			fill: {image: "/assets/template/images/counter-background.jpg"},
			emptyFill: 'rgba(0,0,0,.1)',
			valueProgress: true,
			animationProgress: false,
			valueTotal: 2, /// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '%',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		let obj10 = {
			selectorID: 'wdpkCircle10',
			value: .9, /// The maximum value can only be 1
			size: 125,
			startAngle: - Math.PI / 2, // specify the starting angle here
			reverse: false,
			thickness: '63',
			lineCap: 'butt',  // Arc line cap: "butt", "round" or "square"
			fill: {image: "/assets/template/images/counter-background.jpg"},
			valueProgress: false,
			animationProgress: true,
			valueTotal: 2,/// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '%',
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		let obj11 = {
			selectorID: 'wdpkCircle11',
			value: 0.86,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: '63',
			lineCap: 'butt',  // Arc line cap: "butt", "round" or "square"
			fill: {image: "/assets/template/images/counter-background.jpg"},
			valueProgress: true,
			animationProgress: false,
			valueTotal: 1, /// can either be 1 or 100. Set `1` for one and `2` for 100
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			suffixSymbol: '',
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};
		let obj12 = {
			selectorID: 'wdpkCircle12',
			value: 0.97,
			size: 125,
			startAngle: - Math.PI / 2,
			reverse: false,
			thickness: '63',
			lineCap: 'butt',  // Arc line cap: "butt", "round" or "square"
			fill: {image: "/assets/template/images/counter-background.jpg"},
			valueProgress: false,
			animationProgress: false,
			valueTotal: 2, /// can either be 1 or 100. Set `1` for one and `2` for 100
			suffixSymbol: '%',
			decimalPlaces: 2, // only applicable if valueTotal is set to 1
			emptyFill: 'rgba(0,0,0,.1)',
			animation: {duration: 1600, easing: "circleProgressEasing"},
		};

		require(["app/shortcodes/wdpkCircle"], function (e)
		{
			e.publicCall(obj);
			e.publicCall(obj2);
			e.publicCall(obj3);
			e.publicCall(obj4);
			e.publicCall(obj5);
			e.publicCall(obj6);
			e.publicCall(obj7);
			e.publicCall(obj8);
			e.publicCall(obj9);
			e.publicCall(obj10);
			e.publicCall(obj11);
			e.publicCall(obj12);
		});
	}

	// Flipbox for flipbox shortcode pages
	if (jQuery(".wdpkFlipbox").length !== 0)
	{
		let obj = {
			selectorID: 'flipBox1',
			axis: 'x',
			trigger: 'hover',  //'click', 'hover', 'manual' - Event that activates the flip action. Using manual means
							   // that you have to activate it via javascript. When this is set to click and the tap
							   // event is available (through e.g. jQuery Mobile or jQuery Touch Events), flip will
							   // bind to that instead of to click as a regular click will also instantaneously trigger
							   // a tap event, but not vice-versa.
			reverse: false, // Set to true if you want to reverse the direction of the flip.
			speed: 500,
			front: '#front', // Selector class or ID for Front of the flipbox
			back: '#back', // Selector class or ID for back of the flipbox
		};

		let obj2 = {
			selectorID: 'flipBox2',
			axis: 'y',
			trigger: 'hover',  //'click', 'hover', 'manual' - Event that activates the flip action. Using manual means
							   // that you have to activate it via javascript. When this is set to click and the tap
							   // event is available (through e.g. jQuery Mobile or jQuery Touch Events), flip will
							   // bind to that instead of to click as a regular click will also instantaneously trigger
							   // a tap event, but not vice-versa.
			reverse: false, // Set to true if you want to reverse the direction of the flip.
			speed: 500,
			front: '#front', // Selector class or ID for Front of the flipbox
			back: '#back', // Selector class or ID for back of the flipbox
		};

		let obj3 = {
			selectorID: 'flipBox3',
			axis: 'y',
			trigger: 'click',  //'click', 'hover', 'manual' - Event that activates the flip action. Using manual means
							   // that you have to activate it via javascript. When this is set to click and the tap
							   // event is available (through e.g. jQuery Mobile or jQuery Touch Events), flip will
							   // bind to that instead of to click as a regular click will also instantaneously trigger
							   // a tap event, but not vice-versa.
			reverse: false, // Set to true if you want to reverse the direction of the flip.
			speed: 500,
			front: '#front', // Selector class or ID for Front of the flipbox
			back: '#back', // Selector class or ID for back of the flipbox
		};

		require(["app/shortcodes/wdpkFlip"], function (e)
		{
			e.publicCall(obj);
			e.publicCall(obj2);
			e.publicCall(obj3);
		});
	}

	// Lighbox Gallery For the Shortcode Page
	if (jQuery(".wdpk-light-gallery").length !== 0)
	{
		let obj = {
			selectorID: 'wdpk-light-gallery-1',
			thumbnail: true,
			animateThumb: false,
			showThumbByDefault: false
		};

		require(["app/shortcodes/wdpkLightGallery"], function (e)
		{

			e.publicCall(obj);

		});
	}

	// Parallax for the parallax shortcode page
	if (jQuery(".wdpk-parallax").length !== 0)
	{
		let obj = {
			selectorID: 'parallax-demo-1',
			factor: 0.8,        // +/- gives direction, Less means slower if no other breakpoint factor is set this
								// value is selected
			factorXs: 0.1,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorSm: 0.2,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorMd: 0.3,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorLg: 0.4,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorXl: 0.5,       // factorXs, factorSm, factorMd, factorLg, factorXl
			type: 'background',     // background, foreground
			direction: 'vertical',// vertical, horizontal
			transition: 'translate 0.1s ease' // CSS transition, added on elements where type:'foreground'
		};
		let obj2 = {
			selectorID: 'parallax-demo-2',
			factor: 0.3,        // +/- gives direction, Less means slower if no other breakpoint factor is set this
								// value is selected
			factorXs: 0.1,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorSm: 0.2,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorMd: 0.3,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorLg: 0.4,      // factorXs, factorSm, factorMd, factorLg, factorXl
			factorXl: 0.5,       // factorXs, factorSm, factorMd, factorLg, factorXl
			type: 'background',     // background, foreground
			direction: 'horizontal',// vertical, horizontal
			transition: 'translate 0.1s ease' // CSS transition, added on elements where type:'foreground'
		};
		let obj3 = {
			selectorID: 'parallax-demo-3',
			factor: - 0.5,        // +/- gives direction, Less means slower if no other breakpoint factor is set this
								  // value is selected
			type: 'background',     // background, foreground
			direction: 'vertical',// vertical, horizontal
			transition: 'translate 0.1s ease' // CSS transition, added on elements where type:'foreground'
		};
		require(["app/shortcodes/wdpkParallax"], function (e)
		{
			e.publicCall(obj);
			e.publicCall(obj2);
			e.publicCall(obj3);
		});
	}

	// Js For the Progress bars shortcode

	if (jQuery(".progress").length !== 0)
	{
		let obj = {
			selectorID: 'wdpk-progress-width-1',
			duration: 2500,
			width: '25%',
		};
		let obj2 = {
			selectorID: 'wdpk-progress-width-2',
			duration: 2500,
			width: '50%',
		};
		let obj3 = {
			selectorID: 'wdpk-progress-width-3',
			duration: 2500,
			width: '75%',
		};
		let obj4 = {
			selectorID: 'wdpk-progress-width-4',
			duration: 2500,
			width: '100%',
		};
		require(["app/shortcodes/wdpkAnimateProgress"], function (e)
		{
			e.publicCall(obj);
			e.publicCall(obj2);
			e.publicCall(obj3);
			e.publicCall(obj4);
		});
	}

	// Js For Social Sharing Shortcode
	if (jQuery("#wdpkSocial").length !== 0)
	{
		let obj = {
			shares: [
				"email",
				"twitter",
				"facebook",
				"googleplus",
				"linkedin",
				"pinterest",
				"stumbleupon",
				"pocket",
				"whatsapp",
				"viber",
				"messenger",
				"vkontakte",
				"telegram",
				"line",
				"rss"
			],
			url: "https://uneebox.com/zootash-html/",
			text: "zootash is an HTML theme that is modular and fast",
			showLabel: true,
			showCount: false,
			shareIn: "popup",
			selectorID: 'wdpkSocial',
			on: {
				click: function (e)
				{
				},
				mouseenter: function (e)
				{
				},
				mouseleave: function (e)
				{
				},
			}
		};
		require(["app/shortcodes/wdpkSocialShare"], function (e)
		{
			e.publicCall(obj);
		});
	}

	// Timers for timer shortcode page
	if (jQuery("#wdpk-timer").length !== 0)
	{
		let obj = {
			finalDate: '2020/12/31 23:24:50', // In the following format YYYY/MM/DD hh:mm:ss
			selector: '#wdpk-timer',
			enableYears: false,
			yearsString: 'Years',
			enableMonths: true,
			monthsString: 'Months',
			enableDaysOfMonth: false,
			daysOfMonthString: 'Days Left',
			enableWeeks: true,
			weeksString: 'Weeks',
			enableDays: true,
			dasysString: 'Days',
			enableHours: true,
			hoursString: 'Hours',
			enableMinutes: true,
			minutesString: 'Minutes',
			enableSeconds: true,
			secondsString: 'Seconds',
		};
		require(["app/shortcodes/wdpkTimer"], function (e)
		{
			e.publicCall(obj);
		});
	}

	// Video player shortocode JS
	if (jQuery(".wdpk-video").length !== 0)
	{
		let obj = {
			selectorID: 'html5-player',
			captions: {
				active: true,
				language: 'en',
				update: false
			},
		};
		require(["app/shortcodes/wdpkPlayer"], function (e)
		{
			e.publicCall(obj);
		});
	}

	if (jQuery(".wdpk-video").length !== 0)
	{
		let obj2 = {
			selectorID: 'wdpk-youtube-player',
			captions: {
				active: true,
				language: 'en',
				update: false
			},
		};

		require(["app/shortcodes/wdpkPlayer"], function (e)
		{
			e.publicCall(obj2);
		});
	}

});

