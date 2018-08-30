const gulp =require('gulp'),babel=require('gulp-babel');

gulp.task('default',()=>{
    gulp.src('./index.js')
    .pipe(babel())
    .pipe(gulp.dest('build'))
})

gulp.task('build',()=>{
    gulp.src('./main.js')
    .pipe(babel())
    .pipe(gulp.dest('build'))
})