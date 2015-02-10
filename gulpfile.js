var browserify = require('browserify')();
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('init', function () {
	browserify.transform(reactify); 
  	browserify.add('./jsx/main.js');
});

gulp.task('browserify', function(){
  return browserify.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function() {
  gulp.watch(['./jsx/**/*.js'], ['browserify']);
});

gulp.task('default', ['init', 'browserify', 'watch'])