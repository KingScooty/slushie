var gulp         = require('gulp');

var postcss      = require('gulp-postcss');
var reporter     = require('postcss-reporter');
var syntax_scss  = require('postcss-scss');
var stylelint    = require('stylelint');

var sass_lint = function sass_lint() {

  /**
   * Linting rule documentation
   * https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md
   */

  var stylelintConfig = {
    "rules": {
      "block-no-empty": true,
      "color-no-invalid-hex": true,
      "declaration-colon-space-after": "always",
      "declaration-colon-space-before": "never",
      "function-comma-space-after": "always",
      "function-url-quotes": "always",
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-no-vendor-prefix": true,
      "max-empty-lines": 5,
      "number-leading-zero": "never",
      "number-no-trailing-zeros": true,
      "property-no-vendor-prefix": true,
      "declaration-block-no-duplicate-properties": true,
      "block-opening-brace-newline-after": "always",
      "block-closing-brace-newline-before": "always",
      "declaration-block-trailing-semicolon": "always",
      "selector-list-comma-space-before": "never",
      "selector-list-comma-newline-after": "always",
      "selector-max-id": 0,
      "string-quotes": "double",
      "value-no-vendor-prefix": true,
      "max-nesting-depth": [
        3,
        { ignore: ["blockless-at-rules"] }
      ]
    }
  };

  var processors = [
    stylelint(stylelintConfig),
    reporter({
      clearMessages: true,
      throwError: true
    })
  ];

  var task = gulp.src([
      '**/*.scss',
      '!bower_components/**/*.scss',
      '!node_modules/**/*.scss'
    ])

    .pipe(postcss(processors, {syntax: syntax_scss}));

  return task;
};

module.exports = sass_lint;
