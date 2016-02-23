//Sass compile, autoprefix, cssnano, scoping thingy
var sass_development = require('./tasks/sass_development');
var sass_production = require('./tasks/sass_production');
var linting = require('./tasks/linting');

gulp.task('sass:development', function() {
  return sass_development();
});

gulp.task('sass', ['sass-lint'], function() {
  return compileSass(gulp);
});

gulp.task('sass:production', function() {
  return sass_production();
});
