<?php

// configure your app for the phpunit tests environment

// include the prod configuration
require __DIR__.'/prod.php';

// enable the debug mode
// $app['debug'] = true;

$app['exception_handler']->disable();
