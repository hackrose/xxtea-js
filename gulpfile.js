var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task('clear', function(cb){
    del(['dist/js/xxtea.min.js'], cb);
});

gulp.task('default', ['clear'], function() {
    return gulp.src('lib/xxtea.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'));
});
