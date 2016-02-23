var gulp         = require('gulp');

var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sass_development = function sass_development() {
  var task = gulp

    .src([
      '**/*.scss',
      '!**/_*.scss',
      '!bower_components/**/*.scss',
      '!node_modules/**/*.scss'
    ])

    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', plugins.sass.logError))

    // Default prefix settings for development
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())

    // .pipe(plugins.browserSync.reload({ stream: true }))
    .pipe(gulp.dest('./public'));

  return task;
}

module.exports.sass_development = sass_development;
