module.exports = {
  source: [
    'projects/tokens/base/**/*.js',
    'projects/tokens/ui-library-tokens/**/compound.js',
  ],
  platforms: {
    sketchTypography: {
      buildPath: 'dist/tokens/sketch/',
      files: [{
        destination: 'typographyDesignTokens.sketchpalette',
        format: 'sketch/palette/v2',
      }],
      prefix: 'ts',
      transformGroup: 'ts/sketch',
    },
  },
};
