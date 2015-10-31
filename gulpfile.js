var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jade', function () {
    gulp.src('views/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src('styles/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('templates', function () {
    setTimeout(function () {
        gulp.src('scripts/views/**/*.js')
            .pipe(gulp.dest('dist/js/views'))
            .pipe(connect.reload());
    }, 1000);
});

gulp.task('server', function () {
    connect.server({
        root: 'dist',
        port: 1337,
        livereload: true
    });
});

gulp.task('browserify', function () {
    gulp.src('scripts/index.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('styles/**/*.scss', ['sass']);
    gulp.watch('views/index.jade', ['jade']);
    gulp.watch('scripts/**/*.js', ['browserify']);
    gulp.watch('scripts/views/**/*.js', ['templates']);
});

gulp.task('build', ['server', 'jade', 'sass', 'browserify', 'watch']);