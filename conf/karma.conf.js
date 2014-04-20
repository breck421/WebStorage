module.exports = function(config) {
	config.set({
		basePath: '../',
		frameworks: ['jasmine'],
		reporters: ['progress'],
		//port: 8888,
		//runnerPort: 9100,
		colors: true,
		logLevel: config.LOG_INFO, // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		autoWatch: false,
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'src/js/WebStorage.js',
			'src/js/angular-web-storage.js',
			'tests/**/*.js'
		],
		browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 2,
		browserNoActivityTimeout: 20000,
		browsers: ['Chrome'],
		singleRun: false
	});
};