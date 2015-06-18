var gulp = require('gulp');
var webpack = require('../util/webpack');

gulp.task('buildExample', function() {
  return webpack({ watch: false, src: './example/index.js', dist: './example'});
});
