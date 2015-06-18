var gulp = require('gulp');
var config = require('../../webpack.config');
var webpack = require('gulp-webpack');

module.exports = function (options) {
	config.watch = options.watch || false;
	var src = options.src || './src/index.js';
	var dist = options.dist || './dist';
	return gulp.src(src)
		.pipe(webpack(config))
		.pipe(gulp.dest(dist))
};
