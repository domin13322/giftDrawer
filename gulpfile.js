import gulp from 'gulp';
import node_sass from 'sass';
import gulpSass from 'gulp-sass'
import ts from 'gulp-typescript'
import imagemin from 'gulp-imagemin'
const sass = gulpSass(node_sass);
var tsProject = ts.createProject("tsconfig.json");

gulp.task("sass", (done) => {
    gulp.src("src/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"));
        done();
})
gulp.task("copyHTML", (done) => {
    gulp.src("src/templates/*.html")
    .pipe(gulp.dest("dist/templates"));
    done();
});
gulp.task("scripts", (done) => {
    
});
gulp.task("ts", (done) => {
    tsProject.src()
    .pipe(tsProject()).js
    .pipe(gulp.dest("dist/js"));
    done();
});
gulp.task("img_min", (done) => {
    gulp.src('src/img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
    done();
})
gulp.task('watch', () => {
    gulp.watch('src/scripts/**/*.ts', gulp.series('ts'));
    gulp.watch('src/sass/**/*.scss',gulp.series('sass'));
    gulp.watch('src/templates/*.html', gulp.series('copyHTML'));
    gulp.watch('src/img/*',gulp.series('img_min'));
})