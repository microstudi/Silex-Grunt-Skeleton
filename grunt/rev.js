// REV
// Renames files for browser caching purposes
module.exports = function(grunt) {

    'use strict';

    grunt.config('rev', {
        dist: {
            files: {
                src: [
                    '<%= conf.dist %>/<%= conf.web %>/scripts/{,*/}*.js',
                    '<%= conf.dist %>/<%= conf.web %>/styles/{,*/}*.css',
                    '<%= conf.dist %>/<%= conf.web %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                    '<%= conf.dist %>/<%= conf.web %>/styles/fonts/{,*/}*.*'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-rev');
};
