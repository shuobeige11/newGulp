'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify');

var opt = {
    publicFolder: './dist',
    srcFolder: './src'
}

// 判断是否发布版本
gulp.task('connect', function() {
    connect.server({
        root: opt.publicFolder+'/',
        port: 8080,
        livereload: true
    });
});

// 全局转换
gulp.task('script',function(){

});

gulp.task('res', function() {
    gulp.src([opt.srcFolder + '/images/**.png', opt.srcFolder + '/images/**.gif',opt.srcFolder + '/images/**.jpg'])
        .pipe(gulp.dest(opt.publicFolder + '/images'))
    gulp.src([opt.srcFolder + '/js/*.js', ])
        .pipe(gulp.dest(opt.publicFolder + '/js'));

    gulp.src([opt.srcFolder + '/**.html', ])
        .pipe(gulp.dest(opt.publicFolder))
});

gulp.task('script', function(){
    gulp.src([opt.srcFolder + '/js/main.js', ])
     .pipe(browserify())
     .pipe(uglify())
     .pipe(gulp.dest(opt.publicFolder + '/js'));
});


gulp.task('sass', function() {
    gulp.src([opt.srcFolder + '/css/**/*.scss'])
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(opt.publicFolder + '/css'));
});

gulp.task('default', ['script','res', 'sass','connect'], function() {
    gulp.watch([opt.srcFolder + '/**',opt.srcFolder + '/**'],['script','res','sass']);
});



