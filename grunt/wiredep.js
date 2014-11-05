// WIREDEP
// Automatically inject Bower components into the HTML file
// This task should be used manually by executing
//
// grunt wiredep
//
module.exports = function(grunt) {

    'use strict';

    grunt.config('wiredep', {
        dev: {
            src: [
                '<%= conf.views %>/layout.twig'
            ],
            ignorePath: '../',
        }
    });
    grunt.loadNpmTasks('grunt-wiredep');
};
