# WoodPecker - Multipurpose Bootstrap Theme 
An open source Bootstrap template which is a complete multipurpose UI kit to help you get started quickly.

1. [Online Demo](https://woodpeckertheme.com/ "Online Demo")
2. [Complete Documentation](https://woodpeckertheme.com/demos/documentation/getting-started.html "Complete Documentation")
3. [Sass API Documentation](https://woodpeckertheme.com/demos/documentation/index.html "Sass API Documentation")


## Directory Structure
Once you download and unzip the contents of the WoodPecker® Multipurpose Bootstrap Theme this is the directory structure which can help you find the relevant content.

```bash

├── WoodPecker
│   ├── dist                    -   (Main Folder To Start Working With)
│       └── _dependencies       -   (Contains on all the dependencies)
│       └── assets
│           ├── js              -   (Contains all javascript modules and javascript dependencies)
│           └── custom.js       -   (Custom javascript file that can be included to write your own javascript)
│       └── css
│           ├── style.css       -   (Final CSS file which compiles from the style.scss)
│           └── style.scss      -   (Scss file which includes all the WoodPecker Scss partials and finally compiles to style.css)
│           └── fonts
│               └── font files  -   (Font files certain libraries depend on)
│           └── img
│               └── images      -   (Images certain libraries depend on)
│       ├── sass                -   (Contains all scss files)
│       ├── gulpfile.js         -   (Gulp configuration file)
│       ├── package.json        -   (Configuration file for npm)
│       └── index.html          -   (Default HTML boilerplate to start working with)
│   ├── documentation           -   (Documentation files for WoodPecker®)
│   ├── template                -   (The main theme folder)
│   ├── demos                   -   (Contains all the demo sites)

```

## Getting Started
WoodPecker Multipurpose Bootstrap Theme can be used to fit into your preferred development enviornment. All you need to do is to compile the scss files into the desired style.css file that you want to include into your page. We have following set of instructions for setting up WoodPecker® with Gulp and Codekit. 

### Setup With Gulp and npm
WoodPecker® comes with configuration files for Gulp and npm. The browserSync configation is done for you so that you get a perfect development environment with automatic broswer refreshing using gulp and browserSync. Follow the following steps to setup gulp and npm.

#### Installing Node.js and npm
First of all you need to ensure that Node.js is installed on your system and npm installed as well. For instructions on installing Node.js [Click Here To Install Node](https://nodejs.org/en/ "Install Node"). To check if Node.js is installed correctly run the following command.

```bash 

node --version

```

Node also installs npm along with it. To ensure that npm is installed as well run the following command.

```bash 

npm --version

```

Since, we have Node and npm installed let's just lets just install Gulp CLI globally on the system to do so use the following command

```bash 

npm install --global gulp-cli

```

Now copy the contents of the dist directory and move the content to your project directory. Now navigate to your project directory in terminal and run the following command to install all the required dependencies to run the setup

```bash 

cd myProject

npm install

```

Once all the dependencies have been installed by npm all you need to do is to run gulp and gulp will automatically watch all the changes and do the following:

    1. Gulp will watch for any changes made to *.scss files and automatically compile scss files to css
    2. Upon changes made to any of the files gulp will reload the browser automatically.

```bash

gulp

```

Running the above command should fire a webserver and load index.html in the browser with the following details

```bash 

[Browsersync] Access URLs:
 ------------------------------------
       Local: http://localhost:5000
    External: http://*yourIpAddress*:5000
 ------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ------------------------------------
[Browsersync] Serving files from: ./

```

### Including the required files in HTML
In the `dist` directory you get an HTML file which is a boilerplate for you to start writing your own code. This contains all the css and javascript files that you need to include in your HTML. Here are an explanation of each of the includes.


The following files need to be included in the header

```html 
<head>
    <!-- Include the jQuery file needed by Bootstrap -->
    <script src = "/assets/js/jquery.js"></script>

    <!-- Link The Compiled WoodPecker CSS file -->
    <link rel = "stylesheet" href = "/css/style.css">
</head>
```

The following files need to be included before `</body>`

```html

<!-- Optionally Link FontAwesome CSS -->
<link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

<!-- Include the Bootstrap Js Bundle  -->
<script src = "/assets/js/bundle.js"></script>

<!-- Include the WoodPecker JS Module Loader -->
<script data-main = "/assets/js/requirejs-config.js" src = "/assets/js/require.js"></script>

<!-- Include Custom JS File for any custom Javascript If Needed. This is a blank file -->
<script src = "/assets/custom.js"></script>

```

HTML Markup needed for WoodPecker to function properly

```html 
<!-- WoodPecker Preloader -->
<div id = "wdpk-page-load-animate" class = "wdpk-page-load-animate">
    <div class = "wdpk-spinner" role = "status">
        <span class = "sr-only"></span>
    </div>
</div>
<!-- / WoodPecker Preloader -->

<!-- Mandatory Main Container -->
<div id = "wdpk-main" class = "wdpk-main">

    <!-- Write Your HTML Here -->

</div>
<!-- / Mandatory Main Container -->
```


