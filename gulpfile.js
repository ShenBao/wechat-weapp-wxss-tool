/*
 * @Author: ShenBao
 * @Date: 2018-03-14 14:53:11
 * @Last Modified by: ShenBao
 * @Last Modified time: 2018-04-10 21:16:02
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const glob = require('glob');
const gulpWatch = require('gulp-watch');

// 配置信息
const config = {
    scssPath: 'scss/',
    
    scssPagesPath: 'scss/pages/*.scss',
    scssComponentsPath: 'scss/components/*.scss',

    cssPagesPath: '.css/page/',
    cssComponentsPath: '.css/components/',

    pagesPath: 'weapp/pages/',
    componentsPath: 'weapp/components/'
};

gulp.task('pages-sass', function () {
    gulp
        .src(config.scssPagesPath)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.cssPagesPath));
});

gulp.task('pages-rename', function () {
    let entries = function () {
        let entryFiles = glob.sync(config.cssPagesPath + '*.css');
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
        gulp.src(config.cssPagesPath + entriesCss[index] + ".css").pipe(rename({
            dirname: config.pagesPath + entriesCss[index],
            extname: ".wxss"
        })).pipe(gulp.dest("./"));
    }
});

gulp.task('component-sass', function () {
    gulp
        .src(config.scssComponentsPath)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.cssComponentsPath));
});

gulp.task('component-rename', function () {
    let entries = function () {
        let entryFiles = glob.sync(config.cssComponentsPath + '*.css');
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
        gulp.src(config.cssComponentsPath + entriesCss[index] + ".css").pipe(rename({
            dirname: config.componentsPath + entriesCss[index],
            extname: ".wxss"
        })).pipe(gulp.dest("./"));
    }
});

gulp.task('watch', [
    'pages-sass', 'pages-rename', 'component-sass', 'component-rename'
], function () {
    return gulpWatch(config.scssPath, function () {

        gulp.start('pages-sass');
        gulp.start('pages-rename');
        gulp.start('component-sass');
        gulp.start('component-rename');

    });
});

gulp.task('default', ['watch'], function () {
    console.log('all tasks start ...... ');
});