var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var angularFilesort = require('gulp-angular-filesort');
var Server = require('karma').Server;

gulp.task('localhost', function () {
    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            PORT: 1000
        },
        ignore: ['./node_modules/**']
    });
});

gulp.task('package:js:src', function(){
    return gulp.src('js/src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js/dist'));
});

gulp.task('package:js:lib', function () {

    var manifest = [
        'bower_components/ngSweetAlert/SweetAlert.js',
        'bower_components/sweetalert/dist/sweetalert-dev.js',
        'bower_components/angular-spinner/angular-spinner.js',
        'bower_components/spin.js/spin.js'
    ];

    return gulp.src(manifest)
        .pipe(angularFilesort())
        .pipe(concat('lib.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js/dist'));
});

gulp.task('package:css:src', function(){
    return gulp.src('css/src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/dist'));
});

gulp.task('package:css:lib', function(){
    var manifest = [
        'bower_components/sweetalert/dist/sweetalert.css',
    ];

    return gulp.src(manifest)
        .pipe(concat('lib.css'))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/dist'));
});

gulp.task('watch:css', function () {
    gulp.watch('css/src/**/*.scss', ['package:css:src']);
});

gulp.task('watch:js', function () {
    gulp.watch('js/src/**/*.js', ['package:js:src']);
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});