// PHP
//  The php operation will start up php's built-in server, configure it's filepaths,
//  and open a web browser to the provided hostname.

path = require('path');
absolute = path.resolve();

module.exports = function(grunt) {

    'use strict';

    grunt.config('php', {
        options: {
            hostname: '<%= conf.localURL %>',
            port: '<%= conf.localPort %>',
            livereload: 35729,
            directives: {
                memory_limit: '128M',
                short_open_tag: 'On',
                upload_tmp_dir: absolute + '/var/php',
                sys_temp_dir: absolute + '/var/php',
                display_errors: 'On',
                session: {save_path: absolute + '/var/php'},
                allow_url_fopen: 'On'
            }
            //, keepalive: true,
        },
        // Configuration options for the "server" task (i.e. during development).
        livereload: {
            options: {
                base: '.tmp', //Set the document root to the src folder.
                router: 'var/php/router_dev.php',
                open: true,
            },
        },
        dist: { // The "server" task can pass in a "dist" arguement. Configure the server accordingly.
            options: {
                base: '<%= conf.distWeb %>', //Set the document root to the dist folder.
                router: 'var/php/router.php',
                open: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-php');
};
