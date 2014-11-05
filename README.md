ABOUT
=====

Just another Silex-Framework Skeleton

This is a port from the https://github.com/silexphp/Silex-Skeleton with this features added:

* Demo class with view, phpunit test and route
* Grunt for automating tasks
* Bower to install javascript packages (currently jQuery, Modernizr)


GRUNT
=====

We use the **grunt** tool in order to execute repetitive task such as:
* Javascript minification
* CSS minification
* Image optimizations
* Package installers
* Code checks and tests
* ... so on ...

## Installing grunt

Grunt is a scripting task tool installable trougth npm, the Node.js.
Please refer to the official guide to grunt to install it:

http://gruntjs.com/getting-started

If you want to install grunt on Ubuntu 12.04 o4 14.04 for the very first time just do:
```
sudo apt-get install build-essential libssl-dev git
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
sudo npm install -g grunt-cli
```
Additionally, you may remove the configuration npm user directory to avoid
unexpected permissions problems when using npm as non root user afterwards:
```
sudo rm ~/.npm -rf 
```

## Using grunt

Once you have your copy of grunt installed you need to install the tasks used.
To do so you may just execute in the path where you have your copy of the Goteo code:

```
npm install
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
  Same as default
