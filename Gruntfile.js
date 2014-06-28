module.exports = function(grunt){
	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
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
			globalCss: {
				src: [
					'style/vendor/bootstrap.css',
					'style/vendor/ngDialog.min.css',
					'style/vendor/ngDialog-theme-default.css'
				],
				dest: '<%= distdir %>/style/global.css'
			},
			appCss: {
				src: ['style/taClassified.css'],
				dest: '<%= distdir %>/style/app.css'
			},
			globalJs: {
				src: [
					'script/vendor/jquery.js',
					'script/vendor/bootstrap.js',
					'script/vendor/angular.js',
				  	'script/vendor/angular-route.js'
				],
				dest: '<%= distdir %>/script/global.js'
			},
			appJs: {
				src: [
				  	'script/vendor/ngDialog.min.js',
					'script/config.js',
					'script/directives/directives.js',
					'script/filters/filters.js',
					'script/controllers/controllers.js',
					'script/app.js'
					],
				dest: '<%= distdir %>/script/app.js'
			},
			index: {
				src: ['index.html'],
				dest: '<%= distdir %>/index.html'
			}
		},
		copy: {
			template: {
				src: 'template/*',
				dest: '<%= distdir %>/'
			},
			data: {
				src: 'data/*',
				dest: '<%= distdir %>/'
			}
		},
		watch: {
			all: {
				files: [
					'**/*',
					'!**/node_modules/**',
					'!**/build/**'
				],
				tasks: ['concat', 'copy']
			}
		}
	});

	grunt.registerTask('foo', function(){
		grunt.log.writeln('foo is running...');
	});

	// Default task
	grunt.registerTask('default', ['concat', 'copy']);
	// Prod task
	grunt.registerTask('publish', ['concat', 'uglify'])
};