// WATCH
// Watches files for changes and runs tasks based on the changed files
module.exports = function(grunt) {

    'use strict';

    grunt.config('watch', {
        js: {
            files: ['<%= conf.web %>/scripts/{,*/}*.js'],
            tasks: ['newer:jshint', 'newer:copy:js'],
            options: {
                livereload: true
            }
        },
        gruntfile: {
            files: ['Gruntfile.js', 'grunt/*.js']
        },
        // compass: {
        //     files: ['<%= conf.web %>/styles/{,*/}*.{scss,sass}'],
        //     tasks: ['compass:server', 'autoprefixer']
        // },
        styles: {
            files: ['<%= conf.web %>/styles/{,*/}*.css'],
            tasks: ['newer:copy:styles', 'autoprefixer']
        },
        images: {
            files: ['<%= conf.web %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'],
            tasks: ['newer:copy:images']
        },

        livereload: {
            options: {
                livereload: '<%= php.options.livereload %>'
            },
            files: [
                '<%= conf.views %>/{,*/}*.twig',
                '.tmp/styles/{,*/}*.css',
                '.tmp/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
            ]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};
