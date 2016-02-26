#Slushie (WIP)
Literally an entire* Gulp pipeline for free, just add water.

\*(just Sass for now---more coming super soon!)

##Installing

Ensure you have gulp installed.

`npm install -g gulp`

Then install Slushie in your project using the following command:

`npm install slushie --save-dev`

Create a `gulpfile.js` in your project with the following:

```js
var slushie = require('slushie');

var water = {};

slushie(water);
```

This should work out of the box thanks to the carefully considered defaults set. However, if you do want to override any of the presets, take a look at the default settings in  [default.js](https://github.com/KingScooty/slushie/blob/master/defaults.js) and override as necessary in the `config` object in your newly created `gulpfile`.


## Main gulp tasks available
Commands  | Meaning
------------- | -------------
`gulp`  | alias for `gulp watch`
`gulp watch` | Sets up a Sass watch task to lint, and recompile the files in dev/fast mode (uncompressed, unoptimised) on change for development.
`gulp sass:lint` | Lints the Sass files and reports any errors.
`gulp build:production`  | Builds the Sass ready for production. Sass files are fully optimised, and minified. Calls sass:production and other (coming soon) tasks in sequence internally.
