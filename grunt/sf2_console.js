// Symfony2 commands
module.exports = function(grunt) {

    'use strict';

    grunt.config('sf2_console', {
        options: {
            bin: 'bin/console'
        },
        cache_clear_dev: {
            cmd: 'cache:clear'
        },
        cache_clear_test: {
            cmd: 'cache:clear',
            args: {
                env: 'test'
            }
        },
        cache_clear_prod: {
            cmd: 'cache:clear',
            args: {
                env: 'prod'
            }
        },
        cache_clear_preprod: {
            cmd: 'cache:clear',
            args: {
                env: 'preprod'
            }
        }
    });

    grunt.loadNpmTasks('grunt-symfony2');
};
