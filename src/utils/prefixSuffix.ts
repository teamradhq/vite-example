/**
 * Prepend `prefix` and append `suffix` to a value with a `separator`.
 *
 * @param prefix
 * @param suffix
 * @param value
 * @param separator
 */
export const prefixSuffix = ({ prefix, suffix, value }: PrefixOptions, separator = '-') => (
  [prefix, value, suffix]
    .filter((val) => Boolean(val?.length))
    .join(separator)
);
