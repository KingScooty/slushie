var gulp = require('gulp');

var _ = require('lodash');
var runSequence = require('run-sequence');

var sass_lint = require('./tasks/sass_lint');
var sass_development = require('./tasks/sass_development');
var sass_production = require('./tasks/sass_production');

var default_settings = require('./defaults');

module.exports = function(user_settings) {

  /**
   * Merge those config settings!
   * Here's where we merge the default settings with the user settings.
   */
  var settings = _.merge({}, default_settings, user_settings);

  /**
   * Internal tasks--can be called directly, but are used as part of
   * the external tasks below.
   */

  gulp.task('sass:lint', function() {
    return sass_lint();
  });

  gulp.task('sass:development', ['sass:lint'], function() {
    return sass_development(settings.sass_development);
  });

  gulp.task('sass:production', ['sass:lint'], function() {
    return sass_production(settings.sass_production);
  });

  /**
   * Helper tasks to be used with CLI:
   */

  gulp.task('watch', ['sass:development'], function() {
    gulp.watch(settings.watch.destination, ['sass:development']);
  });

  gulp.task('default', ['watch']);

  gulp.task('build:production', function(callback) {
    runSequence(
      'sass:production',
      callback);
  });

}
