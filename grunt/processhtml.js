// PROCESSHTML
//  The processhtml operation will process the defined files
//  looking for "build" comment blocks and processing them accordingly.
//  In our case, we want to process the dist version of the tail.php
//  and remove the script tags that were put in there for livereload
//  purposes during development.

module.exports = function(grunt) {

    'use strict';

    grunt.config('processhtml', {
        options: {
            commentMarker: 'processhtml'
        },
        dist: {
            files: {
                '<%= conf.dist %>/<%= conf.views %>/layout.twig': ['<%= conf.dist %>/<%= conf.views %>/layout.twig']
            }
        }
    });
    grunt.loadNpmTasks('grunt-processhtml');
};
