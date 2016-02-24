var gulp         = require('gulp');

var sass         = require('gulp-sass');
var cssnano      = require('gulp-cssnano');

var autoprefixer_config = {
  browsers: ['IE 9', 'last 2 versions', '> 1%', 'Safari 7']
}

var sass_production = function sass_production(settings) {
  var nano_options = {
    discardComments: { removeAll: true },
    options: {
      sourcemap: false
    }
  };

  var task = gulp
    .src(settings.source)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cssnano(nano_options))
    .pipe(gulp.dest(settings.destination));

  return task;
}

module.exports = sass_production;
