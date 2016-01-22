// Symfony2 commands
module.exports = function(grunt) {

    'use strict';

    grunt.config('sf2_console', {
        options: {
            path: 'bin/console'
        },
        'cache-clear-dev': {
            command: 'twig:cache:clear'
        },
        'cache-clear-test': {
            command: 'twig:cache:clear --env=test'
        },
        'cache-clear-prod': {
            command: 'twig:cache:clear --env=prod'
        },
        'cache-clear-preprod': {
            command: 'twig:cache:clear --env=preprod'
        }
    });

    grunt.loadNpmTasks('grunt-symfony2');
};
