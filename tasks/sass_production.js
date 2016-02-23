var gulp         = require('gulp');

var sass         = require('gulp-sass');
var cssnano      = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

var autoprefixer_config = {
  browsers: ['IE 9', 'last 2 versions', '> 1%', 'Safari 7']
}

var sass_production = function sass_production() {
  var nano_options = {
    autoprefixer: false,
    discardComments: { removeAll: true }
  };

  var task = gulp
    .src([
      '**/*.scss',
      '!**/_*.scss',
      '!bower_components/**/*.scss',
      '!node_modules/**/*.scss'
    ])

    .pipe(sass.sync().on('error', plugins.sass.logError))
    // Minify
    .pipe(cssnano(nano_options))
    // Autoprefix to official supported browsers
    .pipe(autoprefixer(autoprefixer_config))

    .pipe(gulp.dest('./public'));

  return task;
}

module.exports.sass_production = sass_production;
