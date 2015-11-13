var gulp = require('gulp');
var config = require('../config.json');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var scsslint = require('gulp-scss-lint');

gulp.task('sass', function() {
  compile(true);
});

function compile(watchme) {
  if (watchme) {
    watch(config.paths.styles.src, function() {
      gulp.start('sass');
    });
  }

  return sass(config.paths.styles.src)
    .pipe(plumber())
    .on('error', sass.logError)
    .pipe(gulp.dest(config.paths.styles.dest));
}

gulp.task('scss-lint', function() {
  return gulp.src('/scss/*.scss')
    .pipe(scsslint());
});
