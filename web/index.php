<?php

ini_set('display_errors', 0);

//This file will be on the dist/web/ directory so we must add ../ compared to index_dev.php
require_once __DIR__.'/../../vendor/autoload.php';

$app = require __DIR__.'/../../src/app.php';
require __DIR__.'/../../config/prod.php';
require __DIR__.'/../../src/controllers.php';
$app->run();
