#Front Lab
A light architecture in order to kickstart front end inspirations.

Front Lab use [npm](https://github.com/npm/npm) and [gulp](https://github.com/gulpjs/gulp) for quick & smooth workflow. Be aware of thoses tools and install them first.

You also better use the package manager [bower](https://github.com/bower/bower), this is not a must have, but front lab is built for it too.

##Quick look to the architecture
Nothing eccentric in the global architecture. It is divided in two main folders :

* `/src` for your working files: this is where you will work
* `/web` for your browser : this is where your files are compiled and used for rendering into browser. Your host should point into this folder. This folder is "gitignored" but you will be able to see it when you make your first compilations

There is no special architecture into `/src/js` & `/src/img` do as you want !.

###Templates
Templating is for now exclusively made with [twig](https://github.com/twigphp/Twig). The files as direct children of the folder `/src/templates` are considered as the main templates. It supposed to be pages that extends layouts and include partials.

###Style
Style is generated with [sass](https://github.com/sass/sass) into a specific architecture called styleLeague and designed by myself. I did not create any ressources in order to allow you to dig into styleLeague, but it will come soon.


##Getting started
In order to kick things off, you have to prepare the dev with the following command :

```
$ npm run make-dev
```

This command will install your node modules & bower dependencies plus compile and copy all the pre-existing code into the `/src` folder.


Then when you are ready to go, enter the following command for watch changes into your `/src` and compile them into the `/web` folder :

```
$ npm run start-dev
```

###Style commands
You want to create a new style brick ? Alright then gain some time with this command :

```
$ gulp create:style:brick --name yourBrickName
```

This will simply creates `.scss` file into the folders `/src/scss/bricks` & `/src/scss/parameters` as a partial (this means, it will create a file named `_yourBrickName.scss`) and automaticaly include it into the `/src/scss/bricks/bricks.scss` & `/src/scss/parameters/parameters.scss` style files. It will also create a partial template file at the path `/src/templates/bricks` and include it into the `src/templates/bricks/bricks.twig` file.

`$ gulp create:style:layout --name yourLayout` also exist for generating style files as for the bricks but into the `/src/scss/layout` & `/src/scss/parameters` folders.

###Bower command
In order to be install bower dependencies into `/src` & `/web` folders in the same time, you have to complete the dependencies into `bower.json` file and then run the following gulp task !

```
$ gulp bower
```

##What's next
For now, FrontLab use a selected number of tools and I am aware that we could expect any popular front technologies to run. So I could totally consider to work on less, or jade or whatever adaptations if you show interest.
