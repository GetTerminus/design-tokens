const DISABLED = 'off';

module.exports = {
  extends: ["@terminus/eslint-config-frontend"],
  overrides: [
    // Configuration files
    {
      files: ['projects/tokens/config/**/*.{ts,js}'],
      rules: {
        '@typescript-eslint/no-magic-numbers': DISABLED,
      },
    },

    // Demo project
    {
      files: ['projects/demo/**/*.ts'],
      rules: {
        '@angular-eslint/prefer-on-push-component-change-detection': DISABLED,
        '@typescript-eslint/explicit-member-accessibility': DISABLED,
        '@typescript-eslint/member-ordering': DISABLED,
        '@typescript-eslint/no-explicit-any': DISABLED,
        '@typescript-eslint/no-magic-numbers': DISABLED,
        '@typescript-eslint/no-non-null-assertion': DISABLED,
        'no-console': DISABLED,
        'jsdoc/require-jsdoc': DISABLED,
      },
    },
  ],
};
