// JSHINT
//  The jshint operation will lint our javascript files
//  making sure that there are no errors or bad formatting.
//  The .jshintrc file in the project folder sets the options
//  for linting. If the operations fails, the grunt script will abort.

module.exports = function(grunt) {

    'use strict';

    grunt.config('jshint', {
         options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            },
            app: [
                '<%= conf.app %>/assets/*.js'            ],
            gruntfiles: {
                src: ['Gruntfile.js', 'grunt/{,*/}*.js']
            }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
