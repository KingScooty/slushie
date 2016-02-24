var gulp = require('gulp');

var _ = require('lodash');

var linting = require('./tasks/linting');
var sass_development = require('./tasks/sass_development');
var sass_production = require('./tasks/sass_production');
var gs_prefix_classes = require('./tasks/prefix');

var default_settings = require('./defaults');

module.exports = function(user_settings) {

  /**
   * Merge those config settings!
   * Here's where we merge the default settings with the user settings.
   */
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

  gulp.task('prefix', ['sass:production'], function() {
    return gs_prefix_classes();
  });

}

// Watch task
