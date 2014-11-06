<?php
/**
 * Functional tests here
 */

use Silex\Application;
use Silex\WebTestCase;

class ApplicationTest extends WebTestCase {

    public function createApplication() {

        require $_SERVER['APP_DIR'] . '/app.php';
        require $_SERVER['APP_DIR'] . '/../config/test.php';
        require $_SERVER['APP_DIR'] . '/controllers.php';

        return $app;

    }

    public function testInitialPage() {

        $client = $this->createClient();
        $crawler = $client->request('GET', '/');

        $this->assertTrue($client->getResponse()->isOk());
        $this->assertContains('Welcome to your new Silex Application!', $client->getResponse()->getContent());

    }

    public function test404() {
        $client = $this->createClient();
        $client->request('GET', '/give-me-a-404');
        $this->assertEquals(404, $client->getResponse()->getStatusCode());
    }
}
