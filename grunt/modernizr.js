// MODERNIZR
// Generates a custom Modernizr build that includes only the tests you
// reference in your app
module.exports = function(grunt) {

    'use strict';

    grunt.config('modernizr', {
        dist : {
            devFile: 'bower_components/modernizr/modernizr.js',
            outputFile: '<%= conf.dist %>/<%= conf.web %>/scripts/vendor/modernizr.js',
            files: {
                src:[
                    '<%= conf.dist %>/<%= conf.web %>/scripts/{,*/}*.js',
                    '!<%= conf.dist %>/<%= conf.web %>/scripts/vendor/*',
                    '<%= conf.dist %>/<%= conf.web %>/styles/{,*/}*.css'
                ]
            },
            uglify: true
        }
    });
    grunt.loadNpmTasks('grunt-modernizr');
};
