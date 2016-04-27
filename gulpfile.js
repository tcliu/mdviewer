'use strict';

const fs = require('fs');
const gulp = require('gulp');
const yargs = require('yargs');
const browserify = require('browserify');
const watchify = require('watchify');

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
	.on('log', msg => console.log(msg));
	bundle(b);
});

gulp.task('server', () => {
	
});

function bundle(b) {
	return b.bundle()
		.on('error', function(err) {
			console.log(err.message)
			this.emit('end');
		})
		.pipe(fs.createWriteStream('build/bundle.js'));
}

