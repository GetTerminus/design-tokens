module.exports = {
  source: ['projects/tokens/base/**/*.js'],
  platforms: {
    sketchColor: {
      buildPath: 'dist/tokens/sketch/',
      files: [{
        destination: 'colorDesignTokens.sketchpalette',
        format: 'sketch/palette/v2',
        filter: { attributes: { category: 'color' } },
      }],
      prefix: 'ts',
      transformGroup: 'ts/sketch/color',
    },
  },
};
