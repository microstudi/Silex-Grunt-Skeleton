ABOUT
=====

Just another Silex-Framework Skeleton

This is a port from the https://github.com/silexphp/Silex-Skeleton with this features added:

* Built-in PHP server (minimum version required 5.4)
* Livereloading for any css, js, or php file changes
* Demo class with view, phpunit test and route
* Grunt for automating tasks
* Bower to install javascript packages (currently jQuery, Modernizr)


GRUNT, BOWER & COMPOSER
=======================

This tools are required to use this project:

* [**Grunt**](http://gruntjs.com/) is a Javascript task runner that helps to execute repetitive tasks such as:
    * Javascript minification
    * CSS minification
    * Image optimizations
    * Package installers
    * Code checks and tests
    * ... so on ...

* [**Bower**](http://bower.io/) is a dependency manager for common Javascript libraries

* [**Composer**](https://getcomposer.org/) is a dependency manager for common PHP libraries

## Installing grunt and bower

Grunt is a scripting task tool installable through npm, the Node.js.

If you want to install nodejs, grunt and bower on Ubuntu 12.04 or 14.04 for the very first time just do:
```
sudo apt-get install build-essential libssl-dev git
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
sudo npm install -g grunt-cli
sudo npm install -g bower
```
Additionally, you may remove the configuration npm user directory to avoid
unexpected permissions problems when using npm as non root user afterwards:
```
sudo rm ~/.npm -rf 
```

To install Composer on Ubuntu or any other *nix execute this commands:
```
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

For other OS, please refer to the official install guides:

Install Grunt: http://gruntjs.com/getting-started
Install Bower: http://bower.io/#install-bower
Install Composer: https://getcomposer.org/doc/00-intro.md


## Using grunt

Once you have your copy of Grunt installed you need to install the tasks runners used.
To do so you may just execute in the path where you have your copy of the Silex-Skeleton code:

```
npm install
```

## Using bower

Once you have your copy of Bower installed you need to download/update the needed Javascript libraries.
To do so you may just execute in the path where you have your copy of the Silex-Skeleton code:

```
bower install
```

## Using composer

Once you have your copy of Composer installed you need to download/update the needed PHP libraries.
To do so you may just execute in the path where you have your copy of the Silex-Skeleton code:

```
composer install
```

After that you're ready to execute any of the task available in the same directory:
```
grunt jshint
grunt phplint
...
``` 

## Grunt commands

* **Default task**: `grunt`
  This task is the same as execute as doing: `grunt lint`
  It performs static code analysis in order to quick detect mistakes or misspellings

* **Code linter**: `grunt lint`
  Same as default task

* **Wiredep** `grunt wiredep`
  This task is to add into the specified layouts the bower components
  Should be executed manually every time a bower library is installed

* **build** `grunt build`
  Builds the project into the dist folder. Production web server should point to 
  the "dist/web" folder

* **serve** `grunt serve`
  Starts an instance of the PHP builtin server with livereload pointing to the development
  folder "web"

* **serve:dist** `grunt serve:dist`
  Builds the project and starts an instance of the PHP builtin server with
  livereload pointing to the production folder "web"

* **precommit** `grunt precommit`
  This task could be usefull if you want to add it to the pre-commit git hook.
  Executes the lint tasks for a a modified files only so you'll prevent from
  commiting broken files:

  Content of `.git/hooks/pre-commit`:
  ```
  #!/bin/sh
  grunt precommit
  ```
  Remember to make it executable:

  `$ chmod +x .git/hooks/pre-commit`

TODO:
=====
- adding clear cache cache in console via grunt
- adding optional yml config for assets path (cdn, jquery cdn or cdnfy), google analytics, etc
- add phpunit to grunt
- add translations
- doctrine
