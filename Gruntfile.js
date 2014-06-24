module.exports = function (grunt) {

  grunt.initConfig({

		concat: {
			dist: {
				src: ['public/js/fb.service.angular.js', 'public/js/fb.controller.angular.js', 'public/js/fb.angular.js'],
				dest: 'dist/fb.angular.js'
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/fb.angular.min.js': ['dist/fb.angular.js']
				}
			}
		}

  });

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat:dist', 'uglify:dist']);

};
