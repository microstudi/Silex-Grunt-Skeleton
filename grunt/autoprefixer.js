// AUTOPREFIXER
// Add vendor prefixed styles
module.exports = function(grunt) {

    'use strict';

    grunt.config('autoprefixer', {
        options: {
            browsers: ['last 1 version']
        },
        dist: {
            files: [{
                expand: true,
                cwd: '.tmp/styles/',
                src: '{,*/}*.css',
                dest: '.tmp/styles/'
            }]
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
};
