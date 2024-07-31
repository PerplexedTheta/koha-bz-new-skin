const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


// build sass
function compileSass() {
  return gulp.src('scss/**/*.scss') // Path to your SASS files
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 3,
      errLogToConsole: true,
      includePaths: ['node_modules/']
    }).on('error', console.error))
    .pipe(gulp.dest('.')); // Output directory for CSS files
}
gulp.task('compile-sass', compileSass);
gulp.task('sass', compileSass);


// watch sass
function watchSass() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
}
gulp.task('sass-watch', watchSass);
