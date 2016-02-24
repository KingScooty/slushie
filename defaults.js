module.exports = {
  sass_development: {
    source: [
      '**/*.scss',
      '!**/_*.scss',
      '!bower_components/**/*.scss',
      '!node_modules/**/*.scss'
    ],
    destination: './public'
  },
  sass_production: {
    source: [
      '**/*.scss',
      '!**/_*.scss',
      '!bower_components/**/*.scss',
      '!node_modules/**/*.scss'
    ],
    destination: './public'
  },
  watch: {
    destination: [
      '**/*.scss',
      '!bower_components/**/*.scss',
      '!node_modules/**/*.scss'
    ]
  }
}
