const StyleDictionary = require('style-dictionary');

/**
 * Adds 'ms' to the end of non-zero values.
 *
 * @example
 * ```
 * // Matches: type: time
 * // Returns:
 * 200 => "200ms"
 * ```
 */
StyleDictionary.registerTransform({
  name: 'time/milliseconds',
  type: 'value',
  matcher: function(prop) {
    const matches = prop.attributes.type === 'time';
    const nonZeroValue = prop.original.value !== 0;
    return matches && nonZeroValue;
  },
  transformer: function(prop) {
    return `${prop.original.value}ms`;
  },
});


/**
 * Determine if the prop should be a `px` value
 *
 * @param prop - Object of properties and attributes
 * @return boolean
 */
const needsPx = function(prop) {
  const isPxRadius = prop.attributes.category === 'border' && prop.attributes.subitem === 'percent';
  const isSpacing = prop.attributes.category === 'space';
  const isSize = prop.attributes.type === 'size';
  const isLineHeight = prop.attributes.type === 'lineHeight';
  return isSize || isSpacing || isLineHeight || isPxRadius;
};

/**
 * Adds 'px' to the end of non-zero values.
 *
 * @example
 * ```
 * // Matches: type: size|lineHeight, category: space
 * // Returns:
 * 12 => "12px"
 * ```
 */
StyleDictionary.registerTransform({
  name: 'type/size/px',
  type: 'value',
  matcher: needsPx,
  transformer: function(prop) {
    return `${prop.original.value}px`;
  },
});

/**
 * Creates a kebab/camel case name.
 *
 * NOTE: This will kebab case all item paths but will not kebab case individual keys.
 * NOTE: If you define a prefix on the platform in your config, it will prepend with your prefix
 *
 * @example
 * ```
 * // Matches: all
 * // Returns:
 * "color-background-button-primary-active"
 * "typography-lineHeight-600"
 * ```
 */
StyleDictionary.registerTransform({
  name: 'name/cti/kebabCamel',
  type: 'name',
  transformer: function(prop, options) {
    return `${options.prefix}-${prop.path.join('-')}`;
  },
});

/**
 * TODO: Currently unable to correctly build a gradient with inherited colors.
 */
// StyleDictionary.registerTransform({
//   name: 'color/gradient',
//   type: 'value',
//   matcher: function(prop) {
//     return prop.attributes.subitem === 'gradienttt';
//   },
//   transformer: function(prop) {
//     const og = prop.original.value;
//     const gradient = `${og.type}(${og.direction}, ${og.start} 0%, ${og.end} 100%)`;
//     console.log('prop.attributes: ', prop.attributes);
//     console.log('prop.original.value: ', prop.original.value);
//     return JSON.stringify(gradient);
//   },
// });
