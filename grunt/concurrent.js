// CONCURRENT
// Run some tasks in parallel to speed up build process
module.exports = function(grunt) {

    'use strict';

    grunt.config('concurrent', {
        server: [
            // 'compass:server',
            'copy:bower-components',
            'copy:dev',
            'copy:js',
            'copy:images',
            'copy:styles'
        ],
        dev: [
            'copy:bower-components',
            'copy:dev',
            'copy:js',
            'copy:images',
            'copy:styles'
        ],
        dist: [
            // 'compass',
            'copy:bower-components',
            'copy:js',
            'copy:styles',
            'imagemin',
            'svgmin',
            'htmlmin'
        ]

    });
    grunt.loadNpmTasks('grunt-concurrent');
};
