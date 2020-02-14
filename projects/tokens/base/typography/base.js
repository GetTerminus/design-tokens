module.exports = {
  typography: {
    family: {
      base: {
        roboto: { value: 'roboto' },
        icons: { value: 'materialicons' },
        monospaced: { value: '\'lucida console\'' },
      },
    },
    stack: {
      base: {
        roboto: { value: '{typography.family.base.roboto.value}, {typography.stack.base.sansserif.value}' },
        sansserif: { value: '\'helvetica neue\', helvetica, arial, sans-serif' },
        monospaced: { value: '{typography.family.base.monospaced.value}, monaco, \'dejavu sans mono\', monospace' },
      },
    },
  },
};
