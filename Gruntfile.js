module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

		concat: {
			dist: {
				src: [
                    'src/fb.service.angular.js',
                    'src/fb.controller.angular.js',
                    'src/fb.config.angular.js',
                    'src/fb.angular.js'
                ],
				dest: 'dist/fb.angular.js'
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/fb.angular.min.js': ['dist/fb.angular.js']
				}
			}
		},

        copy: {
            example: {
                files: {
                    'public/js/fb.angular.js': 'dist/fb.angular.js'
                }
            }
        }

    });

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat:dist', 'uglify:dist', 'copy:example']);

};
