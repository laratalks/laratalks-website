var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    del = require('del');

gulp.task('styles', function() {
    return gulp.src('static/lib/style.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function(){

    return gulp.src(['static/fonts/*'])
        .pipe(gulp.dest('dist/fonts'))

});

gulp.task('scripts', function() {
    return gulp.src([
            'vendor/jquery/dist/jquery.min.js',
            'vendor/underscore/underscore-min.js',
            'static/js/laratalks.js',
            'static/js/vendor/jquery.gomap.min.js',
            'static/js/app.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
    return gulp.src('static/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('clean', function(cb) {
    del(['dist', 'dist/img', 'dist/css', 'dist/js', 'dist/fonts'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'fonts');
});

gulp.task('watch', function() {
    gulp.watch('static/lib/**/*.scss', ['styles']);
    gulp.watch('static/js/**/*.js', ['scripts']);
    gulp.watch('static/img/**/*', ['images']);
});