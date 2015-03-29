var gulp = require('gulp');

// // including plugins
var minifyHtml = require("gulp-minify-html");
var minifyInline = require('gulp-minify-inline');

gulp.task('minify-inline', function() {
  gulp.src(['./*.html','./views/*.html'])
    .pipe(minifyInline())
    .pipe(minifyHtml())
    .pipe(gulp.dest('destination'))
});

// including plugins
var minifyCss = require("gulp-minify-css");

// task
gulp.task('minify-css', function () {
    gulp.src(['./css/*.css','./views/css/*.css']) // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('destination'));
});

// including plugins
var uglify = require("gulp-uglify");

// task
gulp.task('minify-js', function () {
    gulp.src(['./js/*.js','./views/js/*.js']) // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('destination'));
});

// summary task run by 'gulp'
gulp.task('default', ['minify-inline', 'minify-css', 'minify-js'], function() {
});

//npm install --save-dev gulp-minify-html
//npm install --save-dev gulp-minify-css
//npm install --save-dev gulp-uglify
//npm install --save-dev gulp-minify-inline