const gulp = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const minifyCss = require('gulp-minify-css')

gulp.task('sass', function () {
  return gulp.src('theme-chalk/**/*.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/theme-chalk'))
})
