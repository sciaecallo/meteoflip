var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server

gulp.task('default', function() {
  // place code for your default task here
});
gulp.task('browser-sync', function() {
    browserSync.init({
        tunnel: 'meteojs',
        open: false,
        server: {
            index: 'home.html',
            baseDir: "./"
        }
    });
});