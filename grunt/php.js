// PHP
//  The php operation will start up php's built-in server, configure it's filepaths,
//  and open a web browser to the provided hostname.
module.exports = function(grunt) {

    'use strict';

    grunt.config('php', {
        options: {
            ini: '../var/php/php.ini',
            hostname: '<%= conf.localURL %>',
            port: '<%= conf.localPort %>',
            livereload: 35729,
            // keepalive: true,
        },
        // Configuration options for the "server" task (i.e. during development).
        livereload: {
            options: {
                base: '.tmp', //Set the document root to the src folder.
                router: '../var/php/router_dev.php',
                open: true,
            },
        },
        dist: { // The "server" task can pass in a "dist" arguement. Configure the server accordingly.
            options: {
                base: '<%= conf.dist %>/<%= conf.web %>', //Set the document root to the dist folder.
                router: '../../var/php/router.php',
                open: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-php');
};
