// USEMINPREPARE
//  This operation is part of the usemin operation and is responsible for setting everything
//  up. This operation will parse the files listed in the options defined here looking for
//  comment blocks of the form:
//          <!-- build:css({.tmp,app}) styles/main.css -->
//          ...
//          <!-- endbuild -->
//  It will then parse the html between these blocks and update the configuration of the
//  cssmin, concat, and uglify operations to make sure they will operate properly on the
//  files defined in the html comment block. The Usemin operation (below) will then be
//  responsible for updating these references to point to the newly created, combined
//  and minified files. This operation should be run BEFORE the concat, cssmin, and uglify
//  operations to ensure they are properly configured.

module.exports = function(grunt) {

    'use strict';

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    grunt.config('useminPrepare', {
        options: {
            dest: '<%= conf.dist %>/<%= conf.web %>',
            root: '.tmp'
        },
        // html: '<%= conf.views %>/{,*/}*.twig'
        html: '<%= conf.views %>/layout.twig'
    });

    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
