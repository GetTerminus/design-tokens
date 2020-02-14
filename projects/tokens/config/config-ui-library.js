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
  },
};
