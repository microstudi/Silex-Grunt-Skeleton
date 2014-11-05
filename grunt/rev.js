// REV
// Renames files for browser caching purposes
module.exports = function(grunt) {

    'use strict';

    grunt.config('rev', {
        dist: {
            files: {
                src: [
                    '<%= conf.distWeb %>/scripts/{,*/}*.js',
                    '<%= conf.distWeb %>/styles/{,*/}*.css',
                    '<%= conf.distWeb %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                    '<%= conf.distWeb %>/styles/fonts/{,*/}*.*'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-rev');
};
