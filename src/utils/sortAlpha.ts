/**
 * Case-insensitive comparison of `first` and `second` strings.
 *
 * @example ```typescript
 * sortAlpha('a', 'B') // -1
 * sortAlpha('c', 'C') //  0
 * sortAlpha('D', 'e') //  1
 * ```
 *
 * @param first
 * @param second
 */
export function sortAlpha(first: string, second: string): Spaceship  {
  const a = first.toLowerCase();
  const b = second.toLowerCase();

  if (a < b) {
    return -1;
  }

  return a === b ? 0 : 1;
}
