// PHP
//  The php operation will start up php's built-in server, configure it's filepaths,
//  and open a web browser to the provided hostname.
module.exports = function(grunt) {

    'use strict';

    grunt.config('php', {
        local: {  //Configuration options for the "server" task (i.e. during development).
            options: {
                /*keepalive: true,*/
                ini: '../php/php.ini',
                hostname: '<%= conf.localURL %>',
                port: '<%= conf.localPort %>',
                base: '<%= conf.app %>', //Set the document root to the app folder.
                router: '../router_dev.php',
                keepalive: true,
                open: true
            }
        },
        dist: { // The "server" task can pass in a "dist" arguement. Configure the server accordingly.
            options: {
                //keepalive: true,
                ini: '../php/php.ini',
                hostname: '<%= conf.localURL %>',
                port: '<%= conf.localPort %>',
                base: '<%= conf.app %>', //Set the document root to the dist folder.
                router: '../router.php',
                keepalive: true,
                open: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-php');
};
