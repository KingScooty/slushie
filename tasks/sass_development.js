var gulp         = require('gulp');

var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sass_development = function sass_development(settings) {

  var task = gulp

    .src([
      '**/*.scss',
      '!**/_*.scss',
      '!bower_components/**/*.scss',
      '!node_modules/**/*.scss'
    ])

    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))

    // Default prefix settings for development
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())

    .pipe(gulp.dest(settings.destination));

  return task;
}

module.exports = sass_development;
