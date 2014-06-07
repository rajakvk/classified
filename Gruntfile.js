module.exports = function(grunt){
	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	// Configuration
	grunt.initConfig({
		distdir: 'build',
		uglify: {
			global: {
				src: '<%= distdir %>/global.js',
				dest: '<%= distdir %>/global.min.js'
			},
			target1: {
				src: 'script/app.js',
				dest: '<%= distdir %>/app.min.js'
			}
		},
		concat: {
			global: {
				src: [
					'script/jquery.js',
					'script/vendor/jquery.js',
					'script/vendor/bootstrap.js',
					'script/vendor/angular.js',
				  	'script/vendor/angular-route.js',
				],
				dest: '<%= distdir %>/global.js'
			},
			target1: {
				src: ['script/app.js'],
				dest: '<%= distdir %>/app.js'
			}
		}
	});

	grunt.registerTask('foo', function(){
		grunt.log.writeln('foo is running...');
	});

	// Default task
	grunt.registerTask('default', ['concat']);
	// Prod task
	grunt.registerTask('publish', ['concat', 'uglify'])
};