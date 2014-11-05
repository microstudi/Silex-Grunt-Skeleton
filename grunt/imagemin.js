// IMAGEMIN
// The following *-min tasks produce minified files in the dist folder
module.exports = function(grunt) {

    'use strict';

    grunt.config('imagemin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= conf.web %>/images',
                src: '{,*/}*.{gif,jpeg,jpg,png}',
                dest: '<%= conf.distWeb %>/images'
            }]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
