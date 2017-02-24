process.env.DISABLE_NOTIFIER = true;
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync'),
    del = require('del');

var ngannotate = require('gulp-ng-annotate');

    gulp.task('jshint', function() {
  return gulp.src('app/js/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
    return del(['json-server/public']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('usemin', 'imagemin','copyfonts','copyviews','copystyles');
});

gulp.task('copyviews',['clean'], function(){
    //views html filess
      return gulp.src('./app/views/*.html')
      .pipe(gulp.dest('json-server/public/views/'));
});

gulp.task('copystyles',function(){
    return gulp.src('./app/css/**/*.css')
    .pipe(gulp.dest('json-server/public/styles/'));
});

gulp.task('usemin',['jshint'], function () {
  return gulp.src('./app/*.html')
      .pipe(usemin({
        css:[minifycss(),rev()],
        js: [uglify(),rev()]
      }))
      .pipe(gulp.dest('json-server/public/'));
});

// Images
gulp.task('imagemin', function() {
  return del(['json-server/public/images']), gulp.src('app/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('json-server/public/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('copyfonts', ['clean'], function() {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./json-server/public/fonts'));
   gulp.src('./bower_components/bootstrap/json-server/public/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./json-server/public/fonts'));
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
  // Watch .js files
  gulp.watch('{app/js/**/*.js,app/fonts/**/*,app/styles/**/*.css,app/**/*.html}', ['usemin']);
      // Watch image files
  gulp.watch('app/images/**/*', ['imagemin']);

});

gulp.task('browser-sync', ['default'], function () {
   var files = [
      'app/**/*.html',
      'app/styles/**/*.css',
      'app/images/**/*.png',
      'app/js/**/*.js',
      'json-server/public/**/*'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "json-server/public",
         index: "index.html"
      },
       port: 3001
   });
        // Watch any files in json-server/public/, reload on change
  gulp.watch(['json-server/public/**']).on('change', browserSync.reload);
    });

gulp.task('usemin',['jshint'], function () {
    gulp.start('index','contactus','galary','projects','src')
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css:[minifycss(),rev()],
      js: [ngannotate(),uglify(),rev()]
    }))
    
    .pipe(gulp.dest('json-server/public/'));
});

gulp.task('index',['jshint'], function () {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css:[minifycss(),rev()],
      js: [ngannotate(),uglify(),rev()]
    }))
    
    .pipe(gulp.dest('json-server/public/'));
});

gulp.task('galary',['jshint'], function () {
  return gulp.src('./app/galary.html')
    .pipe(usemin({
      css:[minifycss(),rev()],
      js: [ngannotate(),uglify(),rev()]
    }))
    
    .pipe(gulp.dest('json-server/public/'));
});

gulp.task('contactus',['jshint'], function () {
  return gulp.src('./app/contact_us.html')
    .pipe(usemin({
      css:[minifycss(),rev()],
      js: [ngannotate(),uglify(),rev()]
    }))
    
    .pipe(gulp.dest('json-server/public/'));
});

gulp.task('projects',['jshint'], function () {
  return gulp.src('./app/projects.html')
    .pipe(usemin({
      css:[minifycss(),rev()],
      js: [ngannotate(),uglify(),rev()]
    }))
    
    .pipe(gulp.dest('json-server/public/'));
});

gulp.task('src',['jshint'], function () {
  return gulp.src('./app/SRC_Core_Committee.html')
    .pipe(usemin({
      css:[minifycss(),rev()],
      js: [ngannotate(),uglify(),rev()]
    }))
    
    .pipe(gulp.dest('json-server/public/'));
});

