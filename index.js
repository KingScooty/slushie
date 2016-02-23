//Sass compile, autoprefix, cssnano, scoping thingy

var linting = require('./tasks/linting');
var sass_development = require('./tasks/sass_development');
var sass_production = require('./tasks/sass_production');

gulp.task('sass-lint', function() {
  return linting();
});

gulp.task('sass:development', ['sass-lint'], function() {
  return sass_development();
});

gulp.task('sass:production', ['sass-lint'], function() {
  return sass_production();
});

// Watch task
