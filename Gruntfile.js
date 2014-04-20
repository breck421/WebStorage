'use strict';

var util = require('util');



module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: cleanConfig,
		concat: concatConfig,
		jshint: jshintConfig,
		karma: karmaConfig,
		uglify: uglifyConfig
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('test', [
		'jshint',
		'karma:unit'
	]);

	grunt.registerTask('build', [
		'clean:purge',
		'concat',
		'uglify:app',
		'clean:killNonMin'
	]);

	grunt.registerTask('package', [
		'test',
		'build'
	]);
};

/*This runs a JS lint on the code */
var jshintConfig = {
	options: {
		jshintrc: 'conf/jshintrc'
	},
	main: {
		src: [
			'Grunfile.js',
			'src/js/*.js',
			'tests/*.js'
		]
	}
};

/*Concatenates all files together*/
var concatConfig = {
	options: {},
	'dist/js/angular-web-storage.js': [
		'src/js/WebStorage.js',
		'src/js/angular-web-storage.js'
	]
};

/**
 * Uglify is the task that performs minification OR pretty printing. The following options
 * are available:
 * 		mangle: Reduce function and variable names down to one or two characters to save
 * 				space
 * 		compress: Remove all unnecessary whitespace (tabs or spaces used for alignment,
 * 				etc.)
 * 		beautify: Pretty-prints (formats for human reading)
 *
 * Subtasks:
 * 		dev: To be used in development, and on servers during early development; does not
 * 				compress nor mangle, and leaves the code human readible for debugging
 * 		dist: Compresses and mangles for maximum size reduction to speed up downloads
 *
 * Note that both subtasks concatenate the javascript or css files; this means that only
 * one JavaScript or one CSS file will be downloaded per request.
 */
var uglifyConfig = {
	app: {
		options: {
			mangle: false,
			compress: true,
			beautify: false
		},
		files: {
			'dist/js/angular-web-storage.min.js': 'dist/js/*.js'
		}
	}
};

var cleanConfig = {
	purge: [
		'dist/**'
	],
	killNonMin: [
		'dist/*.js', '!dist/*.min.js',
		'dist/js/*.js', '!dist/js/*.min.js'
	]
};

var karmaConfig = {
	unit: {
		configFile: 'conf/karma.conf.js',
		singleRun: true
	}
};