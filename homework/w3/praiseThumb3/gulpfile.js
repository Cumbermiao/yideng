const gulp = require('gulp');
const babel = require('gulp-babel')
gulp.task('default',['compile'],function(){
    //gulp.watch的文件必须要是一个数组，否则不起效
    gulp.watch(['./public/js/index.es6'],['compile'])
})
gulp.task('compile',function(){
    return  gulp.src('./public/js/index.es6')
    .pipe(babel({
        presets: ['babel-preset-env']
    }))
    .pipe(gulp.dest('./'))
})
