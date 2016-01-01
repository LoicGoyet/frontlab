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
Style is generated with [sass](https://github.com/sass/sass) into a specific architecture called based on Hugo Giraudel's [sass guidelines](http://sass-guidelin.es/#the-7-1-pattern).


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
You want to create a new style partial (base, components, layout, pages, theme, utils or vendor partial) ? Alright then gain some time with this command :

```
$ gulp create:style:{partial type} --name yourBrickName
// {partial type} is base, components, layout, pages, theme, utils or vendor
```

This will simply creates `.scss` file into the folders `/src/scss/{partial type}` & `/src/scss/{partial type}` as a partial and automaticaly include into the main style files. It will also create a partial template file at the path `/src/templates/guideline/{partial type}/yourBrickName`.

###Bower command
As you can check for yourself, `.bowerrc` install bower dependencies into the `/src/bower_components` folder. But it could be convenient for the browser to have access to thoses dependencies. So in order to copy the `/src/bower_components` folder at `/web/bower_components` just it the following command :

```
$ gulp copy-bowercomponents
```

##What's next
For now, FrontLab use a selected number of tools and I am aware that we could expect any popular front technologies to run. So I could totally consider to work on less, or jade or whatever adaptations if you show interest.
