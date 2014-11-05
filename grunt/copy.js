// COPY
// Copies remaining files to places other tasks can use
module.exports = function(grunt) {

    'use strict';

    grunt.config('copy', {
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= conf.web %>',
                dest: '<%= conf.dist %>/<%= conf.web %>',
                src: [
                    'index.php',
                    'images/{,*/}*.webp',
                    '*.{ico,png,txt}',
                    'styles/{,*/}*.{otf,svg,ttf,woff,eot}'
                    // 'bower_components/sass-bootstrap/fonts/*.*'
                ]
            }]
        },
        dev: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= conf.web %>',
                    dest: '.tmp/',
                    src: [
                        'index_dev.php',
                        'images/{,*/}*.webp',
                        '*.{ico,png,txt}',
                        'styles/{,*/}*.{otf,svg,ttf,woff,eot}'
                    ]
                }
            ]
        },
        'bower-components': {
            expand: true,
            dot: true,
            cwd: 'bower_components',
            dest: '.tmp/bower_components/',
            src: '**/*.*'
        },
        js: {
            expand: true,
            dot: true,
            cwd: '<%= conf.web %>/scripts',
            dest: '.tmp/scripts/',
            src: '{,*/}*.js'
        },
        images: {
            expand: true,
            dot: true,
            cwd: '<%= conf.web %>/images',
            dest: '.tmp/images/',
            src: '{,*/}*.{gif,jpeg,jpg,png,webp}'
        },
        styles: {
            expand: true,
            dot: true,
            cwd: '<%= conf.web %>/styles',
            dest: '.tmp/styles/',
            src: '{,*/}*.css'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
};
