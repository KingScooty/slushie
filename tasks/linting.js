var gulp         = require('gulp');

var postcss      = require('gulp-postcss');
var reporter     = require('postcss-reporter');
var syntax_scss  = require('postcss-scss');
var stylelint    = require('stylelint');

var sass_lint = function sass_lint() {

  var stylelintConfig = {
    "plugins": [
      "stylelint-statement-max-nesting-depth"
    ],
    "rules": {
      "block-no-empty": true,
      "color-no-invalid-hex": true,
      "declaration-colon-space-after": "always",
      "declaration-colon-space-before": "never",
      "function-comma-space-after": "always",
      "function-url-quotes": "double",
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-no-vendor-prefix": true,
      "max-empty-lines": 5,
      "number-leading-zero": "never",
      "number-no-trailing-zeros": true,
      "property-no-vendor-prefix": true,
      "rule-no-duplicate-properties": true,
      "declaration-block-no-single-line": true,
      "rule-trailing-semicolon": "always",
      "selector-list-comma-space-before": "never",
      "selector-list-comma-newline-after": "always",
      "selector-no-id": true,
      "string-quotes": "double",
      "value-no-vendor-prefix": true
      "statement-max-nesting-depth": [3, { countAtRules: false }],
    }
  };

  var processors = [
    stylelint(stylelintConfig),
    reporter({
      clearMessages: true
    })
  ];

  var task = gulp.src(
      ['app/assets/_scss/**/*.scss', '!app/assets/_scss/vendor/**/*.scss']
    )
    .pipe(postcss(processors, {syntax: syntax_scss}));
    .pipe(.failOnError());

  return task;
});
