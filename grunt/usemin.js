// USEMIN
//  The usemin operation will update references to javascript and css files that
//  have beem concatinated and minified. See the USEMINPREPARE operation for instructions
//  on how to identify references in your html/php with comment blocks. This operation
//  should be run AFTER the concat, cssmin, and uglify operations. This is because this
//  operation will ensure that the final output file(s) have been created before updating
//  references to point to them.

module.exports = function(grunt) {

    'use strict';

    // Performs rewrites based on rev and the useminPrepare configuration
    grunt.config('usemin', {
        options: {
            assetsDirs: ['<%= conf.distWeb %>/**/']
        },
        // html: ['<%= conf.distViews %>/{,*/}*.twig'],
        html: ['<%= conf.distViews %>/layout.twig'],
        css: ['<%= conf.distWeb %>/styles/{,*/}*.css']
    });

};
