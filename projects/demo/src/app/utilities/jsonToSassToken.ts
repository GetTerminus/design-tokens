/**
 * Convert a JSON path to a Sass token
 *
 * @param path - The path to convert
 * @return The new token
 */
export function jsonToSassToken(path: string[], prefix = 'ts'): string {
  return `${prefix}-${path.join('-')}`;
}
