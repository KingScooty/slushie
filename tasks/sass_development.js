var gulp         = require('gulp');

var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sass_development = function sass_development(settings) {

  var task = gulp

    .src(settings.source)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(settings.destination));

  return task;
}

module.exports = sass_development;
