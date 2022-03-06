/**
 * An `index` is a valid number if it's a number between -1 and array length.
 *
 * @param array
 * @param index
 */
export function isIndexValid(array: unknown[], index?: number): index is number {
  return (
    array.length > 0
    && typeof index === 'number'
    && index >= 0
    && index < array.length
  );
}
