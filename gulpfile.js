'use strict';

let gulp = require('gulp');
let electron = require('electron-connect').server.create();

gulp.task('serve', _ => {
  electron.start();

  gulp.watch('main.js', electron.restart);

  gulp.watch(['**/*.html', '**/*.css'], electron.reload);
});
