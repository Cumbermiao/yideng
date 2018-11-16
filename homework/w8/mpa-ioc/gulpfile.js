const gulp = require('gulp');
const babel = require('gulp-babel')
const rollup = require('gulp-rollup')
const BUILD = process.env.NODE_ENV === 'production'
let _task = []

gulp.task('gulp:dev', () => {
    gulp.watch('./src/nodeuii/**/*.js', () => {
        gulp.src('./src/nodeuii/**/*.js')
            // .pipe(babel({
            //     presets: ['@babel/env'],
            //     babelrc:false
            // }))
            .pipe(gulp.dest('dist'))
    })
})

gulp.task('conf',()=>{
    return gulp.src('./src/nodeuii/**/*.js')
    .pipe(babel({
        babelrc:false,
        plugins:[["@babel/plugin-proposal-decorators", { "legacy": true }]]
    }))
    // .pipe(rollup({
    //     input:['./src/nodeuii/app.js','./src/nodeuii/config/index.js'],
    //     output: {
    //         format: 'cjs'
    //     },
    // }))
    
    .pipe(gulp.dest('dist'))
})
// gulp.task('conf',()=>{
//     gulp.src('./src/nodeuii/**/*.js',{
//         ignore:'./src/nodeuii/config/index.js'
//     })
//     .pipe(rollup({
//         input:'./src/nodeuii/config/index.js',
//         output: {
//             format: 'cjs'
//         },
//     }))
//     .pipe(gulp.dest('dist'))
// })

// gulp.task('copy',()=>{

// })
gulp.task('default',['conf'])