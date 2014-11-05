// SVGMIN
// The following *-min tasks produce minified files in the dist folder
module.exports = function(grunt) {

    'use strict';

    grunt.config('htmlmin', {
        dist: {
            options: {},
            files: [{
                expand: true,
                cwd: '<%= conf.views %>',
                src: '{,*/}*.twig',
                dest: '<%= conf.dist %>/<%= conf.views %>/'
            }]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
