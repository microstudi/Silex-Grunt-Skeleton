<?php

namespace Demo\Tests;


use Silex\Application;
use Silex\WebTestCase;

class DemoControllerTest extends WebTestCase {

	public function createApplication() {
		
		require $_SERVER['APP_DIR'] . '/app.php';
		require $_SERVER['APP_DIR'] . '/../config/test.php';
		require $_SERVER['APP_DIR'] . '/controllers.php';

		return $app;
		
	}

	public function testInitialPage() {
		
		$client = $this->createClient();
		$crawler = $client->request('GET', '/demo');

		$this->assertTrue($client->getResponse()->isOk());
		$this->assertContains('This is just a demo page!', $client->getResponse()->getContent());


		$crawler = $client->request('GET', '/demo/get-some-404');
		$this->assertEquals($client->getResponse()->getStatusCode(), 404);


	}
}