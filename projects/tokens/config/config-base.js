module.exports = {
  source: ['projects/tokens/base/**/*.js'],
  platforms: {
    css: {
      buildPath: 'dist/tokens/css/',
      files: [{
        destination: 'design-tokens.css',
        format: 'css/variables',
      }],
      prefix: 'ts',
      transformGroup: 'ts/css',
    },
    sassMap: {
      buildPath: 'dist/tokens/css/',
      files: [{
        destination: 'design-tokens-map.scss',
        format: 'scss/map-flat',
      }],
      prefix: 'ts',
      transformGroup: 'scss',
    },
    sassVars: {
      buildPath: 'dist/tokens/css/',
      files: [{
        destination: 'design-tokens.scss',
        format: 'scss/variables',
      }],
      prefix: 'ts',
      transformGroup: 'scss',
    },
    js: {
      buildPath: 'dist/tokens/js/',
      files: [{
        destination: 'design-tokens.js',
        format: 'javascript/es6',
      }],
      prefix: 'ts',
      transformGroup: 'ts/js',
    },
    jsModule: {
      buildPath: 'dist/tokens/js/',
      files: [{
        destination: 'design-tokens-tree.js',
        format: 'javascript/module',
      }],
      prefix: 'ts',
      transformGroup: 'ts/js',
    },
  },
};
