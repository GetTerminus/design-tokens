module.exports = {
  typography: {
    family: {
      base: {
        roboto: { value: 'roboto' },
        monospaced: { value: '\'Roboto Mono\'' },
      },
    },
    stack: {
      base: {
        roboto: { value: '{typography.family.base.roboto.value}, {typography.stack.base.sansserif.value}' },
        sansserif: { value: '\'helvetica neue\', helvetica, arial, sans-serif' },
        // HACK: 'monospace' should be declared twice. See:
        // https://stackoverflow.com/questions/36524272/why-does-firefox-not-honor-css-font-size-for-code-tags-wrapped-in-pre/36540436%2336540436
        monospaced: { value: '{typography.family.base.monospaced.value}, \'Open Sans\', monaco,  monospace, monospace' },
      },
    },
  },
};
