module.exports = {
  typography: {
    family: {
      roboto: { value: 'Roboto' },
      icons: { value: 'MaterialIcons' },
      base: { value: '{typography.family.roboto.value}' },
      monospaced: { value: '\'Lucida Console\'' },
    },
    stacks: {
      roboto: { value: '{typography.family.roboto.value}, {typography.stacks.sansSerif.value}' },
      sansSerif: { value: '\'Helvetica Neue\', Helvetica, Arial, sans-serif' },
      monospaced: { value: '{typography.family.monospaced.value}, Monaco, \'DejaVu Sans Mono\', monospace' },
    },
  },
};
