const gulp =require('gulp'),babel=require('gulp-babel');

gulp.task('default',()=>{
    gulp.src('./index.js')
    .pipe(babel({plugins: ['transform-runtime']}))
    .pipe(gulp.dest('build'))
})