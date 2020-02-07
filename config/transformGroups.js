const StyleDictionary = require('style-dictionary');

/**
 * The collection of transforms used for CSS generation
 */
StyleDictionary.registerTransformGroup({
  name: 'ts/css',
  transforms: [
    'attribute/cti',
    'color/css',
    'name/cti/kebabCamel',
    'time/milliseconds',
    'type/size/px',
  ],
});

/**
 * The collection of transforms used for Sketch generation
 */
StyleDictionary.registerTransformGroup({
  name: 'ts/sketch',
  transforms: [
    'attribute/cti',
    'color/sketch',
    'name/cti/kebabCamel',
  ],
});

/**
 * The collection of transforms used for JavaScript generation
 */
StyleDictionary.registerTransformGroup({
  name: 'ts/js',
  transforms: [
    'attribute/cti',
    'color/hex',
    'name/cti/pascal',
    'time/milliseconds',
    'type/size/px',
  ],
});
