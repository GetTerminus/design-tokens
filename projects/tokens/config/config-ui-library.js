module.exports = {
  include: ['projects/tokens/base/**/*.js'],
  source: ['projects/tokens/ui-library-tokens/**/*.js'],
  platforms: {
    css: {
      buildPath: 'dist/tokens/css/',
      files: [{
        destination: 'library-design-tokens.css',
        format: 'css/variables',
      }],
      prefix: 'ts',
      transformGroup: 'ts/css',
    },
    sassMap: {
      buildPath: 'dist/tokens/css/',
      files: [{
        destination: 'library-design-tokens-map.scss',
        format: 'scss/map-flat',
      }],
      prefix: 'ts',
      transformGroup: 'scss',
    },
    sassVars: {
      buildPath: 'dist/tokens/css/',
      files: [{
        destination: 'library-design-tokens.scss',
        format: 'scss/variables',
      }],
      prefix: 'ts',
      transformGroup: 'ts/scss',
    },
    js: {
      buildPath: 'dist/tokens/js/',
      files: [{
        destination: 'library-design-tokens.js',
        format: 'javascript/es6',
      }],
      prefix: 'ts',
      transformGroup: 'ts/js',
    },
    jsModule: {
      buildPath: 'dist/tokens/js/',
      files: [{
        destination: 'library-design-tokens-tree.js',
        format: 'javascript/module',
      }],
      prefix: 'ts',
      transformGroup: 'ts/js',
    },
  },
};
