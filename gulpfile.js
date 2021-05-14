const gulp = require('gulp');
const browserSync = require('browser-sync');

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./dist/css/**/*.css').on('change', browserSync.reload);
    gulp.watch('./example/**/*.html').on('change', browserSync.reload);
};

module.exports = {
    watch
}