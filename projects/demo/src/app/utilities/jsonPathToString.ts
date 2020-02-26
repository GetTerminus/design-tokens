/**
 * Convert a JSON path to a string
 *
 * @param path - The path to convert
 * @return The new token
 */
export function jsonPathToString(path: string[]): string {
  return `${path.join('.')}`;
}
