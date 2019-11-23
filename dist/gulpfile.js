/**
 * Gulp.js configuration File
 * @since Version 1.0.0
 * @author Uneebox
 */
const gulp = require("gulp");
const {series, src, dest, watch, parallel, task} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");


/**
 * @const paths - object used to define various paths used in the gulpfile
 * @since version 1.0.0
 */
const paths = {
	cssDestination: "css/",
	cssSource: "css/style.scss",
};


/**
 * compileSass
 * Gulp Task for compiling Sass files to Scss
 */
function compileSass(done)
{
	return src(paths.cssSource)
		.pipe(plumber())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(dest(paths.cssDestination))
		.pipe(browserSync.stream());
	done();
}

exports.compileSass = compileSass;


// browserSync task for refreshing the sever and firing a server
gulp.task("browserSync", function (done)
{
	browserSync.init({
		port: 5000,
		server: {
			baseDir: "./",
			allowEmpty: true,
		}
	});
	done();
});


/**
 *  Gulp Watch function
 *  The gulp watch function which watches for
 *  changes in various folders and fires the
 *  tasks that have been declared above
 */
function start()
{
	gulp.watch("**/*.scss", compileSass);
	gulp.watch("**/*.*").on('change', browserSync.reload);
}

exports.start = start;

// The default Task To Execute the above tasks
exports.default = series('browserSync',start);
