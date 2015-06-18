var gulp = require('gulp');
var ghpages = require('gulp-gh-pages');

gulp.task('ghpages', ['build', 'buildExample'], function () {
  gulp.src('./example/**/*').pipe(ghpages());
});
