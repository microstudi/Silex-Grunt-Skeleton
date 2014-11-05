<?php

// configure your app for the phpunit tests environment

$app['twig.path'] = array(__DIR__.'/../templates');
$app['twig.options'] = array('cache' => __DIR__.'/../var/cache/twig');

// enable the debug mode
// $app['debug'] = true;

$app['exception_handler']->disable();
