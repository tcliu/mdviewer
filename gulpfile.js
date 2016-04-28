'use strict';

const fs = require('fs');
const gulp = require('gulp');
const yargs = require('yargs');
const browserify = require('browserify');
const watchify = require('watchify');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin')
const browserSync = require('browser-sync').create();
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('default', () => {
	// place code for your default task here
	console.log('Hello world!');
});

gulp.task('browserify', () => {
	var b = browserify({
		entries: ['app/index.js'],
		cache: {}, 
		packageCache: {},
		plugin: []
	})
	.transform('babelify', {presets: ['es2015', 'react']});
	bundle(b);

});

gulp.task('watchify', () => {
	var b = browserify({
		entries: ['app/index.js'],
		cache: {}, 
		packageCache: {},
		plugin: [watchify]
	})
	.transform('babelify', {presets: ['es2015', 'react']})
	.on('update', ids => {
		ids.forEach(id => console.log(`${id} updated.`));
		bundle(b);

	})
	.on('log', msg => { console.log(msg); });
	bundle(b);
});

gulp.task('html', function() {
	var htmlConfig = {collapseWhitespace: true};
	return gulp.src('app/**/*.html')
		.pipe(htmlmin(htmlConfig))
		.on('error', function(err) {
			console.log(err.message)
			this.emit('end');
		})
	    .pipe(gulp.dest('public'))
	    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
	var sassConfig = {outputStyle: 'compressed'};
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass(sassConfig).on('error', sass.logError))
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['html', 'sass', 'watchify'], function() {
    browserSync.init({
        server: "./public",
        port: yargs.argv.port || 3000
    });
    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/**/*.html", ['html']);
});

function bundle(b) {
	return b.bundle()
		.on('error', function(err) {
			console.log(err.message)
			this.emit('end');
		})
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('public'))
		.pipe(browserSync.stream());
}

