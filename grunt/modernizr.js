// MODERNIZR
// Generates a custom Modernizr build that includes only the tests you
// reference in your app
module.exports = function(grunt) {

    'use strict';

    grunt.config('modernizr', {
        dist : {
            devFile: 'bower_components/modernizr/modernizr.js',
            outputFile: '<%= conf.distWeb %>/scripts/vendor/modernizr.js',
            files: {
                src:[
                    '<%= conf.distWeb %>/scripts/{,*/}*.js',
                    '!<%= conf.distWeb %>/scripts/vendor/*',
                    '<%= conf.distWeb %>/styles/{,*/}*.css'
                ]
            },
            uglify: true
        }
    });
    grunt.loadNpmTasks('grunt-modernizr');
};
