module.exports = {
  color: {
    base: {
      documentation: { migration: 'How previous color values map to the new values: xlight=10, light=30 base=50, dark=70, xdark=90' },
      // was light
      white: { value: '#fafafa' },
      // was dark
      black: { value: '#302d35' },
      // was primary
      palette1: {
        100: { value: '#1777b6' },
        300: { value: '#1666b1' },
        500: { value: '#00538a' },
        700: { value: '#0c4271' },
        900: { value: '#0a375b' },
      },
      // was a1
      palette2: {
        100: { value: '#55AD69' },
        300: { value: '#3b9b5c' },
        500: { value: '#2f854d' },
        700: { value: '#317448' },
        900: { value: '#2b673f' },
      },
      // was a2
      palette3: {
        100: { value: '#F9EACB' },
        300: { value: '#F4CD86' },
        500: { value: '#EEAE4D' },
        700: { value: '#CB843E' },
        900: { value: '#845626' },
      },
      // was a3
      palette4: {
        100: { value: '#DAD4E3' },
        300: { value: '#A295BD' },
        500: { value: '#7D6BA2' },
        700: { value: '#594288' },
        900: { value: '#462E7C' },
      },
      // was a4
      palette5: {
        100: { value: '#BDDFED' },
        300: { value: '#7FBFDC' },
        500: { value: '#4598C6' },
        700: { value: '#36799E' },
        900: { value: '#1E4A62' },
      },
      // TODO: Does the term 'warn' make sense at a global level? Seems like an app-level definition
      // was warn
      palette6: {
        100: { value: '#D3B6B0' },
        300: { value: '#D59A8D' },
        500: { value: '#BC5C49' },
        700: { value: '#913B2C' },
        900: { value: '#763023' },
      },
      // was utility
      palette7: {
        100: { value: '#f2f0f7' },
        300: { value: '#cecdd1' },
        500: { value: '#999' },
        700: { value: '#757575' },
        900: { value: '#3e3c43' },
      },
    },
  },
};
