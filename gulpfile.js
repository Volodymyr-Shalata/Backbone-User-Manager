///**
// * Created by Володимир on 10.08.2015.
// */
var gulp  = require('gulp');
//var autoprefixer = require('gulp-autoprefixer');
//var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var lr = require('tiny-lr'),
    server = lr();

gulp.task('scripts', function(){
    return gulp.src('js/**/*.js')
        .pipe(uglify()) /*для зжатия js*/
        .pipe(livereload());

});

gulp.task('html', function() {
    return gulp.src('templates/**/*.html')
        .pipe(livereload());
        //.pipe(notify({ message: 'HTML task complete' }));
});

gulp.task('watch', function () {
    livereload.listen();
        gulp.watch('js/**', ['scripts']);
        gulp.watch('templates/**/*.html', ['html']);
});


gulp.task('default', ['scripts','html', 'watch']);