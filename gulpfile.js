var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var zip = require('gulp-zip');

gulp.task('default', function() {
    // is not gonna be called, as soon as it is default task
    console.log('Greetings!');
});

gulp.task('spec', function () {
    return gulp.src('spec/*.spec.js')
        .pipe(jasmine());
});

gulp.task('package', function () {
    return gulp.src('src/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});