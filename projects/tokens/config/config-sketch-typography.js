module.exports = {
  include: ['projects/tokens/base/**/*.js'],
  source: ['projects/tokens/ui-library-tokens/typography/compound.js'],
  platforms: {
    sketchTypography: {
      buildPath: 'dist/tokens/sketch/',
      files: [{
        destination: 'typographyDesignTokens.json',
        format: 'ts-format-sketch-typography',
      }],
      prefix: 'ts',
      transformGroup: 'ts/sketch/typography',
    },
  },
};
