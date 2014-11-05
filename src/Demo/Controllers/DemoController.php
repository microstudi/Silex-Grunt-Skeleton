<?php

namespace Demo\Controllers;

use Silex\Application;
use Silex\ControllerProviderInterface;

class DemoController implements ControllerProviderInterface {

	/**
	 * Collecció de controladors disponibles
	 * @param  Application $app Silex
	 * @return [type]           [description]
	 */
	public function connect(Application $app) {
		$controllers = $app['controllers_factory'];
        // print_r($controllers);die;
 		$controllers
            ->get('/', array($this, 'index'))
            ->bind('testpage')
        ;
        return $controllers;
	}

	public function index(Application $app) {

		return $app['twig']->render('demo.twig', array());
	}

}