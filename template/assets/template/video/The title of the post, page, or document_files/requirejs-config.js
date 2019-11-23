require.config({
	baseUrl: "/assets/js",
	paths: {
		config: "./requirejs-config",
		jquery: 'jquery',
		bootstrap: 'bootstrap',
		circleProgress: 'circle-progress',
		jqueryWaypoints: 'jquery.waypoints',
		Plyr: 'plyr',
		async: 'async',
		parollerjs: 'jquery.paroller',
		lightgallery: 'lightgallery',
		lgZoom: 'lg-zoom',
		lgThumbnail: 'lg-thumbnail',
		lgAutoplay: 'lg-autoplay',
		lgFullscreen: 'lg-fullscreen',
		lgHash: 'lg-hash',
		lgPager: 'lg-pager',
		lgVideo: 'lg-video',
		AOS: 'aos',
		SweetScroll: 'sweet-scroll',
		Typed: 'typed',
	},
	shim: {
		jqueryWaypoints: {
			deps: ['circleProgress']
		},
		lgZoom: {
			deps: ['lightgallery']
		},
		lgThumbnail: {
			deps: ['lightgallery']
		},
		lgAutoplay: {
			deps: ['lightgallery']
		},
		lgFullscreen: {
			deps: ['lightgallery']
		},
		lgHash: {
			deps: ['lightgallery']
		},
		lgPager: {
			deps: ['lightgallery']
		},
		lgVideo: {
			deps: ['lightgallery']
		},
	}
});

/**
 * woodpecker.js file
 * This file includes only the require calls for various modules
 * should not include any function of variable definitions at all
 * @author Uneebox
 * @since Version 1.0
 */

// Require call for stickyNavbar
jQuery(document).ready(function ()
{
	if (jQuery(".wdpk-sticky-navbar").length !== 0)
	{
		require(["app/header/stickyNavbar"], function (e)
		{
			e.publicCall();
		});
	}
});

// Require Call For OffCanvas Navigator
// Require call for stickyNavbar
jQuery(document).ready(function ()
{
	if (jQuery(".wdpk-offCanvas").length !== 0)
	{
		require(["app/header/offCanvasNavigator"], function (e)
		{
			e.publicCall();
		});
	}
});

// Require Call For OffCanvas Navigator
// Require call for stickyNavbar
jQuery(document).ready(function ()
{
	if (jQuery(".wdpk-offCanvas").length !== 0)
	{
		require(["app/header/offCanvasToggle"], function (e)
		{
			e.publicCall();
		});
	}
});

//Require call for subDropCorrector
jQuery(document).ready(function ()
{
	if (jQuery(".wdpk-cart-dropdown").length !== 0)
	{
		require(["app/header/cartDropCorrector"], function (e)
		{
			e.publicCall();
		});
	}
});

//Require call for wdpkAccordion
jQuery(document).ready(function ()
{
	if (jQuery(".wdpk-accordion").length !== 0)
	{
		require(["app/shortcodes/wdpkAccordion"], function (e)
		{
			e.publicCall();
		});
	}
});


//Require call for Prelaoder
jQuery(window).on('load',function ()
{
	require(["app/shortcodes/wdpkPreloader"], function (e)
	{
		e.publicCall();
	});
});

//Require call for Animate On Scroll
require(["app/shortcodes/wdpkAnimateOnScroll"], function (e)
{
	e.publicCall();
});
