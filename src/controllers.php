<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

//Request::setTrustedProxies(array('127.0.0.1'));


//Sub routes controller
$app->mount('/demo', new Demo\Controllers\DemoController());

$app->get('/', function () use ($app) {
    // die('home');
    return $app['twig']->render('index.twig', array());
})
->bind('homepage')
;

if($app['debug']) {
    // We capture the NotFoundHttpException to automatically capture all the templates
    // This allows you to quickly develop some twig templates without worry about the routing
    // When the application is finished, this should be removed
    $app->error(function (NotFoundHttpException $e, $code) use ($app) {
        return $app['twig']->render($app['request']->getPathInfo() . '.twig', array());
        // die('error');
    });
}

$app->error(function (\Exception $e, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    // 404.twig, or 40x.twig, or 4xx.twig, or error.twig
    $templates = array(
        'errors/'.$code.'.twig',
        'errors/'.$code.'.twig',
        'errors/'.substr($code, 0, 2).'x.twig',
        'errors/'.substr($code, 0, 1).'xx.twig',
        'errors/default.twig',
    );

    return new Response($app['twig']->resolveTemplate($templates)->render(array('code' => $code)), $code);
});
