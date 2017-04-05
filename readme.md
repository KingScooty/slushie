Slushie (Work in progress)
---
Literally an entire* Gulp pipeline for free installed via npm. Just add water!
\*(just Sass for now---more coming super soon!)

You can read the article here: http://www.creativenightly.com/2016/02/Slushie-the-pre-packaged-gulp-pipeline/

Slushie currently comes with the following Sass gulp tasks:
- Development
  - Linting
  - Sourcemaps
  - Autoprefixing
  - Watch
- Production
  - Linting
  - Autoprefixing
  - Optimisation *(Sorting, removing duplicates etc.)*
  - Minification

You'll get them all for free just by installing via npm! Magic!

## Installing

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
