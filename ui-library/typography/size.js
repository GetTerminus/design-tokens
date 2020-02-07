module.exports = {
  typography: {
    size: {
      base: { value: '{typography.size.300.value}' },
      display: {
        base: { value: '{typography.size.base.value}' },
        100: { value: '{typography.size.700.value}' },
        200: { value: '{typography.size.800.value}' },
        300: { value: '{typography.size.900.value}' },
        400: { value: '{typography.size.1000.value}' },
      },
      headline: { base: { value: '{typography.size.600.value}' } },
      title: { base: { value: '{typography.size.500.value}' } },
      subhead: { base: { value: '{typography.size.400.value}' } },
      body: {
        base: { value: '{typography.size.base.value}' },
        100: { value: '{typography.size.body.base.value}' },
        // TODO: This should actually be 14 but currently it is 16 in use.
        200: { value: '{typography.size.body.base.value}' },
      },
      caption: { base: { value: '{typography.size.200.value}' } },
      hint: { base: { value: '{typography.size.200.value}' } },
    },
  },
};

