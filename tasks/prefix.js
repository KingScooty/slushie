var gulp         = require('gulp');

var postcss      = require('gulp-postcss');
var prefix       = require('postcss-prefix-selector')
var reporter     = require('postcss-reporter');


var gs_prefix_classes = function gs_prefix_classes() {

  var prefix_config = {
    prefix: '.gs ', // <--- notice the trailing space!
    exclude: [] // this allows us to exclude classes from being prefixed.
  }

  var processors = [
    prefix(prefix_config),
    reporter({
      clearMessages: true,
      throwError: true
    })
  ];

  var task = gulp.src([
      '**/*.css',
      '!bower_components/**/*.css',
      '!node_modules/**/*.css'
    ])

    .pipe(postcss(processors))
    .pipe(gulp.dest('.'));

  return task;

}

module.exports = gs_prefix_classes;
