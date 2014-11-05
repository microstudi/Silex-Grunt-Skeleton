// PHPLINT
//  The phplint operation will lint your php files to make sure there
//  are no syntax errors. Note that the linter does not execute your scripts,
//  it only does a syntax check.
module.exports = function(grunt) {

    'use strict';

    grunt.config('phplint', {
        app: [
           '<%= conf.src %>/**/*.php',
           '!<%= conf.app %>/**/*.php'
        ]
    });
    grunt.loadNpmTasks('grunt-phplint');
};
