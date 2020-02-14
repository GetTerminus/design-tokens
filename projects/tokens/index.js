const StyleDictionary = require('style-dictionary');
// NOTE: `transforms` must be included _before_ `transformGroups`.
require('./config/transforms');
require('./config/transformGroups');


// TODO: Create custom transform to create sketch shared text styles
// StyleDictionary.registerTransform({
//   name: 'sketch/typography',
//   type: 'value',
//   matcher: function(prop) {
//     return prop.attributes.category === 'compound';
//   },
//   transformer: function(prop) {
//     return prop.original.value;
//   }
// });


const configs = [
  {
    name: 'base',
    config: require('./config/config-base.js'),
  },
  {
    name: 'library',
    config: require('./config/config-ui-library'),
  },
  {
    name: 'sketch-color',
    config: require('./config/config-sketch-color'),
  },
  // TODO
  // {
  //   name: 'sketch-typography',
  //   config: require('./config/config-sketch-typography'),
  // },
];

// Build all configurations
configs.map(function(config) {
  const updatedDictionary = StyleDictionary.extend(config.config);
  updatedDictionary.buildAllPlatforms();
});

