/**
 * Convert a JSON path to a JS token
 *
 * @param path - The path to convert
 * @return The new token
 */
export function jsonToJsToken(path: string[], prefix = 'ts'): string {
  return `${prefix}_${path.join('_')}`.toUpperCase();
}
