var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var zip = require('gulp-zip');
var AWS = require('aws-sdk');
var util = require('util');

gulp.task('default', function() {
    // is not gonna be called, as soon as it is default task
    console.log('Greetings!');
});

gulp.task('spec', function () {
    return gulp.src('spec/*.spec.js')
        .pipe(jasmine({
            verbose: true
        }));
});

gulp.task('package', function () {
    return gulp.src('src/**/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('lambda-sum3', function() {
    var lambda = new AWS.Lambda({region: 'us-west-2'});
    var jsonfname = process.argv[process.argv.indexOf('--event') + 1];
    var jsonevent = require("./spec/fixtures/" + jsonfname);
    var jsonstr = util.format("%j", jsonevent);
    console.log(jsonstr);
    var params = {
        FunctionName: 'threeEvents',
        InvocationType: 'RequestResponse',
        LogType: 'Tail',
        Payload: jsonstr
    };
    lambda.invoke(params, function(err, data) {
        if (err)
            console.log(err, err.stack);
        else
            console.log(data);
    });
});
