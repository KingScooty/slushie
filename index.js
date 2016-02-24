//Sass compile, autoprefix, cssnano, scoping thingy
var gulp = require('gulp');

// var watch = require('gulp-watch');
var _ = require('lodash');

var linting = require('./tasks/linting');
var sass_development = require('./tasks/sass_development');
var sass_production = require('./tasks/sass_production');
var default_settings = require('./defaults');

module.exports = function(user_settings) {

  var settings = _.merge({}, default_settings, user_settings);

  gulp.task('sass-lint', function() {
    return linting();
  });

  gulp.task('sass:development', ['sass-lint'], function() {
    return sass_development(settings.sass_development);
  });

  gulp.task('sass:production', ['sass-lint'], function() {
    return sass_production(settings.sass_production);
  });

  gulp.task('watch', ['sass:development'], function() {
    gulp.watch(settings.watch.destination, ['sass:development']);
  });

}

// Watch task
