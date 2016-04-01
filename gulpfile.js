// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');
//var sass = require('gulp-sass');
//var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlhint = require('gulp-htmlhint');
var cleanCSS = require('gulp-clean-css');
var usemin = require('gulp-usemin');
var wrapper = require('gulp-wrapper');
//var rev = require('gulp-rev');

var paths = {
    scripts: {
        all: ['./js/**/*.js'],
        JSLint: ['./js/*.js','!./js/lib/*']
    },
    css: ['./css/*.css'],
    html:{
        all: ['./index.html', './templates/*.html'],
        index: ['./index.html'],
        templates: ['./templates/*.html']
    }
};

gulp.task('usemin', function () {
    return gulp.src(paths.html.index)
        .pipe(usemin({
            css: ['concat'],
            html: [htmlmin({
                collapseWhitespace: true,
                removeEmptyAttributes: true,
                removeComments: true
            })],
            //js: [uglify(), rev()]
            js: ['concat'],
            //inlinecss: [ minifyCSS(), 'concat']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('minifyJS', ['usemin'], function(){
    return gulp.src('./dist/js/scripts.js')
        .pipe(wrapper({
            header: '(function(){\n',
            footer: '\n})();'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('minifyCSS', ['usemin'], function(){
    return gulp.src('./dist/css/styles.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
});

// Lint Task
gulp.task('JSLint', function() {
    return gulp.src(paths.scripts.JSLint)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('CSSLint', function() {
    return gulp.src(paths.css)
        .pipe(csslint())
        .pipe(csslint.reporter());
});

gulp.task('HTMLHint', function(){
    return gulp.src(paths.html.all)
        .pipe(htmlhint({
            "doctype-first": false
        }))
        .pipe(htmlhint.reporter());
});

// minify templates Task
gulp.task('minifyTemplates', function() {
    return gulp.src(paths.html.templates)
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeEmptyAttributes: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist/templates'));
});

// Compile Our Sass
/*
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});
*/

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(paths.html.all, ['HTMLHint']);
    gulp.watch(paths.scripts.JSLint, ['JSLint']);
    gulp.watch(paths.css, ['CSSLint']);
    gulp.watch([paths.html.index, paths.css, paths.scripts.all], ['usemin', 'minifyJS']);
    gulp.watch([paths.html.templates], ['minifyTemplates']);
    //gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['HTMLHint', 'JSLint', 'CSSLint', 'minifyCSS', 'usemin', 'minifyJS', 'minifyTemplates']);
