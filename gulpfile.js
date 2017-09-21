
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    glob = require('glob');

gulp.task('sass', function () {
  gulp.src('scss/*.scss')
    .pipe(
        sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./.css'));
});

gulp.task('rename',function(){
  let entries = function () {
    let entryFiles = glob.sync('.css/*.css');
    let map = [];
    for (let i = 0; i < entryFiles.length; i++) {
        let filePath = entryFiles[i];
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[i] = filename;
    }
    return map;
  };
  let entriesCss = entries();
  for (let index = 0; index < entriesCss.length; index++) {
    gulp.src(".css/"+entriesCss[index]+".css")
      .pipe(rename({
        dirname: "weapp-source/pages/"+entriesCss[index],
        extname: ".wxss"
      }))
      .pipe(gulp.dest("./"));
  }
});

gulp.task('watch',['sass','rename'], function () {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('.css/*.css', ['rename']);
});

gulp.task('default', ['watch'], function () {
  console.log('all task done!');
});
