#Morph GrandStand Gulp
This little tool provides a nicely packaged way of compiling Sass files.

##Installing (WIP -- this bit might not work properly yet)

Install using the following command[?]:

`morph install morph-grandstand-gulp --save-dev`

Create a `gulpfile.js` in your project with the following:

```js
var morph_grandstand_gulp = require('morph-grandstand-gulp');

var config = {};

morph_grandstand_gulp(config);
```

This should work out of the box thanks to the carefully considered defaults set for morph projects. However, if you do want to override any of the presets, take a look at the default settings in  [default.js](https://github.com/bbc/morph-grandstand-gulp/blob/master/defaults.js) and override as necessary in the `config` object in your newly created `gulpfile`.


## Main gulp tasks available
Commands  | Meaning
------------- | -------------
`gulp`  | alias for `gulp watch`
`gulp watch` | Sets up a Sass watch task to lint, and recompile the files in dev/fast mode (uncompressed, unoptimised) on change for development.
`gulp sass:lint` | Lints the Sass files and reports any errors.
`gulp build:production`  | Builds the Sass ready for production. Sass files are fully optimised, and minified. Calls sass:production and prefix in sequence internally.
