// Symfony2 commands
module.exports = function(grunt) {

    'use strict';

    grunt.config('sf2-console', {
        options: {
            path: 'bin/console'
        },
        'cache-clear-dev': {
            command: 'cache:clear'
        },
        'cache-clear-test': {
            command: 'cache:clear --env=test'
        },
        'cache-clear-prod': {
            command: 'cache:clear --env=prod'
        }
    });

    grunt.loadNpmTasks('grunt-symfony2');
};
