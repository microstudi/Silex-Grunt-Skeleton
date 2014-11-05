// SVGMIN
// The following *-min tasks produce minified files in the dist folder
module.exports = function(grunt) {

    'use strict';

    grunt.config('svgmin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= conf.web %>/images',
                src: '{,*/}*.svg',
                dest: '<%= conf.dist %>/<%= conf.web %>/images'
            }]
        }
    });
    grunt.loadNpmTasks('grunt-svgmin');
};
